from flask import render_template
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

@app.route('/reports')
def reports():
    return render_template('reports.html')
