function filesize_filter(size) {
    const sizes = ['B','KB','MB','GB'];
    let i = 0;
    while(size>=1024) {
        i += 1;
        size /= 1024;
    }
    return Math.ceil(size)+sizes[i];
}

function get_path(path,folder) {
    if(typeof(path)==='string') {
        path = path.split('/');
    }
    if(!path.length) {
        return folder;
    }
    if(!path[0]) {
        return get_path(path.slice(1),folder);
    }
    let subdir = folder.dirs.find(d=>d.name==path[0]);
    if(subdir) {
        return get_path(path.slice(1),subdir);
    } else if(path.length==1) {
        return folder.files.find(f=>f.name==path[0]);
    }
}

function compute_space(folder) {
    let t;
    switch(folder.use) {
        case 'all':
            t = 0;
            folder.dirs.forEach(function(d) {
                t += d.total_space;
            });
            folder.files.forEach(function(f) {
                t += f.size;
            });
            return t;
        case 'some':
            t = 0;
            folder.dirs.forEach(function(d) {
                t += d.space;
            });
            folder.files.forEach(function(f) {
                t += f.use ? f.size : 0;
            });
            return t;
        case 'none':
            return 0;
    }
}
function describe_used_files(folder) {
    let dirs = {};
    let files = [];

    folder.dirs.forEach(function(d) {
        switch(d.use) {
        case 'all':
            dirs[d.name] = 'all';
            break;
        case 'some':
            dirs[d.name] = describe_used_files(d);
            break;
        }
    });
    files = folder.files.filter(f => f.use).map(f => f.name);

    return {dirs,files};
}

function load_description(data,folder) {
    folder.files.map(function(f) {
        f.use = data.files.indexOf(f.name)>=0;
    });
    folder.dirs.map(function(d) {
        const use = data.dirs[d.name];
        switch(data.dirs[d.name]) {
        case 'all':
            d.use = 'all';
            break;
        default:
            if(!(d.name in data.dirs)) {
                d.use = 'none';
            } else {
                d.use = 'some';
                load_description(data.dirs[d.name],d);
            }
        }
    });
}

Vue.component('folder',{
    template:'#folder',
    props: ['model','root'],
    computed: {
        open() {
            return this.root || this.model.use=='some';
        },
        space_used() {
            return compute_space(this.model);
        }
    },
    watch: {
        space_used() {
            this.model.space = this.space_used;
        }
    },
    filters: {
        filesize: filesize_filter
    },
    created: function() {
        this.model.space = this.space_used;
    }
});

Vue.component('filesize',{
    template: '<span class="filesize" :class="[units]">{{scaled_size}}{{units}}</span>',
    props: ['size','resize'],
    computed: {
        scaled_size() {
            let size = this.size;
            while(size>=1024) {
                size /= 1024;
            }
            return size%1<0.1 ? Math.floor(size) : size.toFixed(1);
        },
        units() {
            let size = this.size;
            const sizes = ['B','KB','MB','GB'];
            let i = 0;
            while(size>=1024) {
                i += 1;
                size /= 1024;
            }
            return sizes[i];
        }
    }
});

function set_total_space(folder) {
    folder.dirs.forEach(function(d) { set_total_space(d); });
    let t = 0;
    folder.dirs.forEach(function(d) { t += d.total_space; });
    folder.files.forEach(function(f) { t += f.size; });
    folder.total_space = t;
    folder.is_dir = true;
}
set_total_space(mathjax_files);
mathjax_files.use = 'some';

const configs = get_path('config',mathjax_files).files.map(f=>f.name);

Object.values(components).map(function(c) {
    c.include = false;
});

class Tab {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
}

const tabs = [
    new Tab('components','Choose components'),
    new Tab('files','Refine included files'),
    new Tab('compile','Build a package')
];

let app = new Vue({
    el: '#app',
    filters: {
        filesize: filesize_filter
    },
    data: {
        tabs: tabs,
        activeTab: tabs[0],
        compiled: false,
        compile_status: 'never',
        compile_id: '',
        compile_zipfile: '',
        compile_zip_size: 0,
        files: mathjax_files,
        configs: configs,
        config: configs[0],
        components: components,
        component_groups: component_groups
    },
    computed: {
        total_space() {
            return compute_space(this.files);
        },
        description() {
            return describe_used_files(this.files);
        },
        available_configs() {
            let config_dir = get_path('config',this.files);
            let files = config_dir.use=='all' ? config_dir.files : config_dir.files.filter(f=>f.use);
            return files.map(f=>f.name);
        },
        enabled_components() {
            return Object.entries(this.components).filter(c=>c[1].include).map(c=>c[0]);
        }
    },
    watch: {
        description() {
            localStorage['package_description'] = JSON.stringify(this.description);
        },
        enabled_components() {
            localStorage['enabled_components'] = JSON.stringify(this.enabled_components);
            this.set_components();
        },
        available_configs() {
            if(this.available_configs.length && this.available_configs.indexOf(this.config)==-1) {
                this.config = this.available_configs[0];
            }
        }
    },
    created: function() {
        const app = this;
        let data;
        if('package_description' in localStorage) {
            data = JSON.parse(localStorage['package_description']);
            load_description(data,this.files);
        }
        if('enabled_components' in localStorage) {
            data = JSON.parse(localStorage['enabled_components']);
            data.forEach(function(k) {
                app.components[k].include = true;
            });
        }
    },
    methods: {
        compile() {
            const app = this;
            this.compiled = false;
            this.compile_status = 'compiling';
            fetch(
                '/make',
                {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.description)})
            .then(function(response) {
                if(response.ok) {
                    app.compiled = true;
                    app.compile_status = 'waiting';
                    response.json().then(function(j) {
                        app.compile_id = j.id;
                        app.wait_for_ready();
                    });
                } else {
                    app.compile_status = 'error';
                    response.text().then(console.log);
                }
            });
        },
        wait_for_ready() {
            let app = this;
            function respond(d) {
                if(!d.ready) {
                    setTimeout(check_ready,3000);
                } else {
                    app.compile_status='compiled';
                    app.compile_zipfile = `/build/${app.compile_id}.zip`;
                    app.compile_zip_size = d.zip_size;
                }
            }
            function check_ready() {
                fetch(`/build/${app.compile_id}/ready`).then(r=>r.json()).then(respond);
            }
            check_ready();
        },
        set_components() {
            let paths = [];
            let app = this;
            Object.values(this.components).filter(c=>c.include).forEach(function(c) {
                for(let path in c.paths) {
                    let satisfied = c.paths[path].every(function(deps) {
                        return deps.split('|').some(k=>app.components[k].include);
                    });
                    if(satisfied) {
                        paths.push(path);
                    }
                }
            });
            paths.sort();
            console.log(paths.join('\n'));
            function reset(folder) {
                folder.use = 'none';
                folder.dirs.forEach(reset);
                folder.files.forEach(function(f){f.use=false});
            }
            reset(this.files);
            this.files.use = 'some';
            get_path('MathJax.js',this.files).use = true;
            function include(path,folder,longpath) {
                if(path.length>0) {
                    if(folder.use=='all') {
                        return;
                    } else {
                        folder.use = 'some';
                    }
                    let item = get_path(path[0],folder);
                    if(item) {
                        if(item.is_dir) {
                            include(path.slice(1),item,longpath);
                        } else {
                            item.use = true;
                        }
                    }
                } else {
                    folder.use = 'all';
                }
            }
            paths.forEach(function(path) {
                path = path.split('/');
                include(path,app.files,path.slice());
            });
        }
    }
});
