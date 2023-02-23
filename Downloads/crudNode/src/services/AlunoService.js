//Será responsavel pelo BD
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM alunos', (erro, results) => {
                if(erro) {rejeitado(error); return;}
                aceito(results);
            })
        })
    },
    buscarPorNome: (nomeBuscado) => {
        return new Promise((aceito, rejeitado) => {
            db.query(`SELECT * FROM alunos WHERE nome = ?`, [nomeBuscado], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
        })
    },
    buscarPorIdade: (idadeBuscada) => {
        return new Promise((aceito, rejeitado) => {
            db.query(`SELECT * FROM alunos WHERE idade = ?`, [idadeBuscada], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
        })
    },
    adicionar: (nome, idade) => {
        return new Promise((aceito, rejeitado) => {
            db.query(`INSERT INTO alunos (nome, idade) VALUES (?, ?)`,[nome, idade], (error, results) => {
                    if(error) {rejeitado(error); return;}
                    aceito(results.insertCodigo);
            })
        })
    },
    alterar: (nome, idade, codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query(`UPDATE alunos SET nome = ?, idade = ? WHERE codigo = ?`, [nome, idade, codigo],
                (error, results) => {
                    if(error) {rejeitado(error); return;}
                    aceito(results);
            })
        })
    },
    deletar: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query(`DELETE FROM alunos WHERE codigo = ${codigo}`, (erro, results) => {
                if(erro) {rejeitado(error); return;}
                aceito(results);
            })
        })
    },
};