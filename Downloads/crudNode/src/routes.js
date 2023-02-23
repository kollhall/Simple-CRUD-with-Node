const express = require('express');
const router = express.Router();


const AlunoController = require('./controllers/AlunoController')

//GET
router.get('/alunos', AlunoController.buscarTodos);
router.get('/alunos/:nome', AlunoController.buscarPorNome);
router.get('/alunoso/:idade', AlunoController.buscarPorIdade);


//POST
router.post('/aluno', AlunoController.adicionar);


//Put 
router.put('/aluno/:codigo', AlunoController.alterar);

//Delete
router.delete('/aluno/:codigo', AlunoController.deletar);

module.exports = router;