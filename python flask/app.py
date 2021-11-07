from flask import Flask, render_template, request
from flask.wrappers import Request
from flask_mysqldb import MySQL
from werkzeug.wrappers import request

app = Flask(__name__)

app.config['MYSQSL_HOST'] = 'localhost'
app.config['MYSQSL_USER'] = 'root'
app.config['MYSQSL_PASSWORD'] = 'Camiloesbueno.'
app.config['MYSQSL_DB'] = 'contactos'

mysql = MySQL(app)

@app.route('/')
def init():
    return render_template('index.html')

@app.route('/add_contact', methods=['POST'])
def contact():
    if request.method == 'POST':

        id = request.form['id']
        fullname = request.form['fullname']
        numero = request.form['numero']
        email = request.form['email']
    print(id)
    print(fullname)
    print(numero)
    print(email)
    return 'recibido'

@app.route('/edit_contact')
def edit():
    return 'edit contact'

@app.route('/delete_contact')
def delete():
    return 'delete contact'

if __name__ == '__main__':
    app.run( port= 3000 , debug = True)