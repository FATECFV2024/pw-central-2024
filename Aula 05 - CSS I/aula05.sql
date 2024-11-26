CREATE DATABASE FACULDADE;

USE FACULDADE;

CREATE TABLE ALUNO(
        id int primary key auto_increment,
        nome varchar(255),
        idade int
)

SELECT * FROM ALUNO WHERE IDADE =18

INSERT INTO ALUNO (nome, idade) VALUES ("Francisco", 18);

-- vs

USE FACULDADE;

db.aluno.insert()

db.aluno.find();

ALTER TABLE ALUNO   
    ADD COLUMN genero varchar(20);
    
--
db.aluno.insertOne({"nome":"Felipe","idade":18,"genero":"Masculino"})


db.aluno.insertMany([{"nome": "Maria","idade":25, "genero":"Feminino"},
                    {"nome": "Luana","idade":21, "genero":"Feminino"},
                    {"nome": "Ricardo","idade":20, "genero":"Masculino"}])

db.aluno.insertOne({"nome":"Lucas Sousa","idade":18,"genero":"Masculino", 
                    "nota": [{"P1": 7, "P2":5, "P3":0, "MS":6, "Disciplina": "Banco de Dados"},
                             {"P1": 6, "P2":6, "P3":0, "MS":6, "Disciplina": "Programação Web"}]})


db.aluno.insertOne({"nome":"Jessica Sousa","idade":18,"genero":"Feminino", 
                    "nota": [{"P1": 10, "P2":5, "P3":0, "MS":7.5, "Disciplina": "Banco de Dados"},
                             {"P1": 8, "P2":8, "P3":0, "MS":8, "Disciplina": "Programação Web"}]})



db.aluno.insertOne({"nome":"Raquel Lima","idade":18,"genero":"Feminino", 
                    "nota": [{"P1": 10, "P2":5, "P3":0, "MS":7, "Disciplina": "Estrutura de Dados"},
                             {"P1": 8, "P2":8, "P3":0, "MS":8, "Disciplina": "Lógica de Programação"}]})


db.aluno.insertOne({"nome":"Jessica Lima","idade":18,"genero":"Feminino", 
                    "nota": [{"P1": 10, "P2":5, "P3":0, "MS":7, "Disciplina": "Estrutura de Dados"},
                             {"P1": 2, "P2":6, "P3":0, "MS":4, "Disciplina": "Lógica de Programação"}]})                             


db.aluno.find({"idade":{$gt:20}})
db.aluno.find({"idade":{$gte:20}})
db.aluno.find({"idade":{$lte:20}})
db.aluno.find({"idade":{$lt:20}})
db.aluno.find({"idade":{$ne:20}})

-- funcionou
db.aluno.find({$or:[{"nome":"Francisco"}, {"nome":"Raquel"}, {"idade":20}]})
-- funcionou
db.aluno.find({$and:[{"nome":"Francisco"}, {"idade":18}]})

-- não funcionou
db.aluno.find({$and:[{"nome":"Francisco"}, {"nome":"Raquel"}, {"idade":20}]})

db.aluno.find({$and:[{"idade":{$gt:18}}, {"idade": {$lt:25}}]})


ALTER TABLE ALUNO
    ADD COLUMN GENERO VARCHAR(20);

UPDATE ALUNO SET GENERO='MASCULINO' WHERE NOME='JOAO'

db.aluno.updateOne({"nome":"Joaõ"},{$set:{"genero":"Masculino"}})