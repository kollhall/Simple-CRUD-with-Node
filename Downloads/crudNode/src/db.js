const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if(err) {
        console.error('Erro de conexão: ' + err.stack);
        return;
    }
    console.log(`Conectado ao Banco de Dados ${process.env.DB_NAME}`);
})

module.exports = connection;