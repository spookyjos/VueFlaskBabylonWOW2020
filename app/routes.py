from flask import render_template, url_for
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='WOW!2020 IHPC', message='In Partnership With')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/presentables')
def presentables():
    return render_template('presentables.html')

@app.route('/reports39219309123123129382913891283981238283982')
def reports():
    return render_template('reports.html')

@app.route('/auth')
def auth():
    return render_template('auth.html')

@app.route('/presentables/unity1')
def unity1():
    return render_template('personindex.html')

@app.route('/presentables/unity2')
def unity2():
    return render_template('roboticindex.html')
