import os
def zip_name(id):
    return 'MathJax-{}.zip'.format(id)

def output_path(id):
    return os.path.join('output','MathJax-{}'.format(id))
