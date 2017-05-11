from flask import Flask, request, render_template, send_from_directory, jsonify
import os
from zipfile import ZipFile
import uuid
import tasks
import helpers

app = Flask(__name__)

def rmq_job(s):
    print("JOB: "+s)

if not os.path.exists('builds'):
    os.makedirs('builds')

if not os.path.exists('zips'):
    os.makedirs('zips')

def tree(path):
    dirs = []
    files = []
    for entry in os.scandir(path):
        if entry.is_dir() and entry.name != '.git':
            dirs.append(tree(entry.path))
        else:
            if entry.name[0]!='.':
                files.append({'name':entry.name,'size':entry.stat().st_size,'use':True})
    return {'dirs':sorted(dirs,key=lambda x:x['name']),'files':sorted(files,key=lambda x:x['name']),'use':'all','name':os.path.split(path)[1],'space':0}

mathjax_files = tree('MathJax')

@app.route('/')
def home():
    return render_template('index.html',mathjax_files=mathjax_files)

@app.route('/make',methods=['POST'])
def make():
    id = uuid.uuid4().hex
    description = request.get_json()
    job = tasks.make_package(id, description)
    return jsonify({'id':id})

@app.route('/build/<id>/ready')
def is_ready(id):
    ready = os.path.exists(os.path.join('builds','{}.txt'.format(id)))
    d = {'ready':ready}
    if ready:
        statinfo = os.stat(os.path.join('zips',helpers.zip_name(id)))
        d['zip_size'] = statinfo.st_size
    return jsonify(d)

@app.route('/build/<id>.zip')
def zip(id):
    return send_from_directory('zips','MathJax-{}.zip'.format(id),mimetype='application/zip',as_attachment=True)

@app.route('/MathJax/<id>/<path:path>')
def mathjax(id, path):
    return send_from_directory(helpers.output_path(id),path)

@app.route('/test')
def test():
    return render_template('test.html',config=request.args.get('config',''),id=request.args.get('id',''))
