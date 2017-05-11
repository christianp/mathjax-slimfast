from huey.contrib.sqlitedb import SqliteHuey
from huey import crontab
from time import sleep
import os
import shutil
from zipfile import ZipFile
from pathlib import Path
from datetime import datetime
import helpers

huey = SqliteHuey('mathjax-slimfast',filename='huey.db')

def copy_files(description,inpath='MathJax',outpath='output'):
    os.makedirs(outpath)
    for f in description['files']:
        shutil.copyfile(os.path.join(inpath,f),os.path.join(outpath,f))
    for d,subdesc in description['dirs'].items():
        if subdesc=='all':
            shutil.copytree(os.path.join(inpath,d),os.path.join(outpath,d))
        else:
            copy_files(subdesc,os.path.join(inpath,d),os.path.join(outpath,d))

@huey.task()
def make_package(id, description):
    outpath = helpers.output_path(id)
    print("Writing to {}".format(outpath))
    if os.path.exists(outpath):
        shutil.rmtree(outpath)
    copy_files(description,outpath=outpath)
    zippath = os.path.join('zips',helpers.zip_name(id))
    print("Writing {}".format(zippath))
    z = ZipFile(zippath,'w')
    for root,ds,fs in os.walk(outpath):
        for f in fs:
            inpath = Path(root,f)
            opath = Path(*inpath.parts[1:])
            z.write(str(inpath),arcname=str(opath))
    z.close()
    print("Done!")
    with open(os.path.join('builds','{}.txt'.format(id)),'w') as f:
        f.write(id)

@huey.periodic_task(crontab(minute='*'))
def clean_old():
    now = datetime.now()
    for f in os.scandir('builds'):
        ctime = datetime.fromtimestamp(f.stat().st_ctime)
        delta = (now - ctime).total_seconds()
        with open(f.path) as file:
            id = file.read()
        if delta>10*60:
            print("Remove old build {}".format(id))
            os.remove(f.path)
            os.remove(os.path.join('zips',helpers.zip_name(id)))
            shutil.rmtree(helpers.output_path(id))
