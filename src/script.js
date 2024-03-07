let listaProdutos = [];

const criarProduto = (nome, preco) => {
    novoProduto = {
        nomeProduto: nome,
        precoProduto: preco
    }

    listaProdutos.push(novoProduto);
}


const lerProdutos = () => {
    if(listaProdutos.length > 0) {
        listaProdutos.forEach(produto => {
            console.log(`Nome: ${produto.nomeProduto}, Preco: ${produto.precoProduto}`);
        })
    } else {
        console.log('Estoque Vazio. Cadastre Produtos');
    }
}

const atualizarProduto = (antigoNome, novoNome, novoPreco) => {
    let produto = listaProdutos.find(produto => antigoNome === produto.nomeProduto);

    if(produto !== -1) {
        produto.nomeProduto = novoNome;
        produto.precoProduto = novoPreco;
    } else {
        console.log('Produto não encontrado.')
    }
}

const deletarProduto = (nome) => {
    let produto = listaProdutos.findIndex(produto => nome === produto.nomeProduto);
    if(produto !== -1) {
        listaProdutos.splice(produto, 1);
        console.log('Deletado.');
    } else {
        console.log('Produto não encontrado.');
    }
}

let novoNomeProduto = 'Notebook';
let novoPrecoProduto = 2000;

console.log('Criando Produtos:')
criarProduto(novoNomeProduto, novoPrecoProduto);
criarProduto(novoNomeProduto, novoPrecoProduto);
criarProduto(novoNomeProduto, novoPrecoProduto);
lerProdutos();
console.log('-----------------\n');

console.log('Atualizando Produto:');
let novoNome = 'Computador';
let novoPreco = 3000;
atualizarProduto(novoNomeProduto, novoNome, novoPreco);
lerProdutos();
console.log('-----------------\n');


console.log('Deletando Produto: ');
deletarProduto(novoNome);
lerProdutos();
console.log('-----------------\n');