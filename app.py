from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "uma_chave_qualquer"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    usuario = request.form.get('usuario')
    senha = request.form.get('senha')

    #aqui eu faço a validação de usuario e senha
    if usuario == "teste" and senha == "123":
        session['usuario'] = usuario
        return redirect('/menu')
    else:
        return "Usuário ou senha incorretos"
    
@app.route('/menu')
def menu():
    if 'usuario' in session:
        return render_template('menu.html')
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)