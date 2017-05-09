from flask import Flask, request, render_template, send_from_directory, jsonify
import os
import shutil
from zipfile import ZipFile
from pathlib import Path
import uuid

app = Flask(__name__)

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
    return {'dirs':dirs,'files':files,'use':'all','name':os.path.split(path)[1],'space':0}

mathjax_files = tree('MathJax')

def create_package(description,inpath='MathJax',outpath='output'):
    os.makedirs(outpath)
    for f in description['files']:
        shutil.copyfile(os.path.join(inpath,f),os.path.join(outpath,f))
    for d,subdesc in description['dirs'].items():
        if subdesc=='all':
            shutil.copytree(os.path.join(inpath,d),os.path.join(outpath,d))
        else:
            create_package(subdesc,os.path.join(inpath,d),os.path.join(outpath,d))

@app.route('/')
def home():
    return render_template('index.html',mathjax_files=mathjax_files)

@app.route('/make',methods=['POST'])
def make_package():
    id = uuid.uuid4().hex
    description = request.get_json()
    outpath = 'output/MathJax-{}'.format(id)
    if os.path.exists(outpath):
        shutil.rmtree(outpath)
    create_package(description,outpath=outpath)
    zippath = 'zips/Mathjax-{}.zip'.format(id)
    z = ZipFile(zippath,'w')
    for root,ds,fs in os.walk('output'):
        for f in fs:
            inpath = Path(root,f)
            opath = Path(*inpath.parts[1:])
            z.write(str(inpath),arcname=str(opath))
    z.close()

    return jsonify({
        'id': id,
        'zippath': zippath,
    })

@app.route('/MathJax/<id>/<path:path>')
def mathjax(id, path):
    return send_from_directory('output/MathJax-{}'.format(id),path)

@app.route('/test')
def test():
    return render_template('test.html',config=request.args.get('config',''),id=request.args.get('id',''))
