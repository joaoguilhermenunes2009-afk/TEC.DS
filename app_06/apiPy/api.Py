from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Banco de dados Fake
alunos = [
    {"id": 1, "nome": "Ana Silva", "media": 5.0},
    {"id": 2, "nome": "Bruno Costa", "media": 7.5},
    {"id": 3, "nome": "Carlos Estevao", "media": 6.5},
    {"id": 4, "nome": "Rafaela Nunes", "media": 8.5} 
]
#Rotas
@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

# Iniciar a API
app.run(port=3000, debug=True) 