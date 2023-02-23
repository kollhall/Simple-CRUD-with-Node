//dotenv serve para ler o arquivo de variaveis de sistema
require('dotenv').config( {path:'variaveis.env'});
const express = require('express');

//cors é uma especificação que permite trabalhar com API, permite acesso de recursos de outro site msm estando em diferentes
const cors = require('cors');
const bodyParser = require('body-parser');


const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

//Todos os endereços das rotas teram esse prefixo api
server.use(bodyParser.json()) 
server.use('/api', routes);
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});