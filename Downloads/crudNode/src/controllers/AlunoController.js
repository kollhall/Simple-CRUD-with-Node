const AlunoService = require('../services/AlunoService');

module.exports =  {
    buscarTodos: async (req, res) => {
        let json = {error: '', result: []};

        let alunos = await AlunoService.buscarTodos();
        for(let i in alunos) {
            json.result.push({
                nome: alunos[i].nome,
                idade: alunos[i].idade
            });
        }
        res.json(json);
    },
    buscarPorNome: async (req, res) => {
        let json = {error: '', result: []};

        let nomeBuscado = req.params.nome;

        let alunos = await AlunoService.buscarPorNome(nomeBuscado);
        if(alunos) {
            for(let i in alunos) {
                json.result.push( {
                    nome: alunos[i].nome,
                    idade: alunos[i].idade
                });
            }
        }
        res.json(json);
    },
    buscarPorIdade: async (req, res) => {
        let json = {error: '', result: []};

        let idadeBuscada = req.params.idade;
        
        let alunos = await AlunoService.buscarPorIdade(idadeBuscada);
        console.log(alunos)
        if(alunos) {
            for(let i in alunos) {
                json.result.push( {
                    nome: alunos[i].nome,
                    idade: alunos[i].idade
                });
            }
        }
        res.json(json);
    },
    adicionar: async (req, res) => {
        let json = {error: '', result: {}}

        let nome = req.body.nome;
        let idade = req.body.idade;

        idade = parseInt(idade);
        if(nome && idade) {
            let aluno = await AlunoService.adicionar(nome, idade);
            if(aluno !== null) {
                json.result = {
                    codigo: aluno,
                    nome,
                    idade
                }
            }
        } else {
            json.error = 'Campos nao enviados';
        }
        res.json(json);
    },
    alterar: async (req, res) => {
        let json = {error: '', result: {}}

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let idade = req.body.idade;

        if(nome && idade && codigo) {
            let aluno = await AlunoService.alterar(nome, idade, codigo);
            if(aluno !== null) {
                json.result = {
                    aluno,
                    nome,
                    idade
                }
            }
        } else {
            json.error = 'Campos nao enviados';
        }
        res.json(json);
    },
    deletar: async(req, res) => {
        let json = {error: '', result: {}}

        await AlunoService.deletar(req.params.codigo);
        res.json(json);
    }
}