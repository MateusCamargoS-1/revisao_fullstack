import express from 'express';
import cors from 'cors';

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

let listaProdutos = [];

// POST - CREATE
app.post('/criar-produto', (req, res) => {
    const data = req.body;
    const nome = data.nome;
    const preco = data.preco;

    try {
        if(!nome) {
            return res.status(400).send({message: 'Nome inválido, informe o nome.'});
        }
        if(!preco) {
            return res.status(400).send({message: 'Preço inválido, informe o preço.'});
        }

        let novoProduto = {
            nome,
            preco
        }

        listaProdutos.push(novoProduto);

        res.status(201).send({message: 'Produto Criado com sucesso!', listaProdutos});

    } catch (error) {
        res.status(500).send({message: 'Erro Interno'});
    }
})

// GET - READ
app.get('/produtos', (req, res) => {

    try {
        if(listaProdutos.length <= 0) {
            return res.status(400).send({message: 'Estoque vazio. Cadastre Produtos!'});
        }

        res.status(200).send({message: 'Lista de Produtos', listaProdutos});

    } catch (error){
        res.status(500).send({message: 'Erro Interno'})
    }
})

// PUT - UPDATE
app.put('/produto/:nomeProduto', (req, res) => {
    const nomeProduto = req.params.nomeProduto;
    const data = req.body;
    const novoNome = data.nome;
    const novoPreco = data.preco;
    try {
        let produtoAtualizar = listaProdutos.find(produto => nomeProduto === produto.nome);

        if(!produtoAtualizar) {
            return res.status(404).send({message: 'Produto não encontrado!'});
        }

        const produtoAtualizado = {
            novoNome,
            novoPreco
        }

        listaProdutos[produtoAtualizar] = produtoAtualizado;
        
        res.status(201).send({message: 'Produto Atualizado!', data: produtoAtualizado});

    } catch (error) {

    }
})

// DELETE - DELETAR
app.delete('/produto/:nomeProduto', (req, res) => {
    const nomeProduto = req.params.nomeProduto;

    try {
        let produtoDeletar = listaProdutos.findIndex(produto => nomeProduto === produto.nome);
        
        if(produtoDeletar !== -1) {
            listaProdutos.splice(produtoDeletar, 1);
            return res.status(200).send({message: 'Produto deletado com sucesso!'});
        } else {
            return res.status(404).send({message: 'Produto não encontrado!'});
        }
    } catch (error) {
        res.status(500).send({message: 'Erro Interno'});
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})