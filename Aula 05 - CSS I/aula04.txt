CREATE DATABASE FATECFV;

USE FATECFV;

CREATE TABLE ALUNO(
        id int primary key auto_increment,
        nome varchar(255),
        idade int
)

SELECT * FROM ALUNO WHERE IDADE =18

INSERT INTO ALUNO (nome, idade) VALUES ("Francisco", 18);

-- vs

USE FATECFV;

db.aluno.insert()

db.aluno.find();

ALTER TABLE ALUNO   
    ADD COLUMN genero varchar(20);
    
--
db.aluno.insertOne({"nome":"Felipe","idade":18,"genero":"Masculino"})