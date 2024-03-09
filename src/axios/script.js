// POST
const formCriaProduto = document.getElementById('formCriarProduto');
const btnCriarProduto = document.getElementById('btnCriarProduto');

const criarProduto = (e) => {
    e.preventDefault();
    const nomeProduto = document.querySelector('input[name="nomeProduto"').value;

    const precoProduto = document.querySelector('input[name="precoProduto"').value;

    api.post('/criar-produto', {
        nome: nomeProduto,
        preco: precoProduto
    })
        .then(res => {
            alert(`${res.data.message}`);
        })
        .catch(err => {
            alert(`${err.response.data.message}`);
        })
}

formCriaProduto.addEventListener('submit', criarProduto);

// GET
const formListarProdutos = document.getElementById('listarProdutos');
const btnListarProdutos = document.getElementById('btnListarProdutos');

const listarProdutos = (e) => {
    e.preventDefault();

    const lista = document.getElementById('listaProdutos');

    lista.innerHTML = '';

    api.get('/produtos')
        .then(res => {
            const listaProdutos = res.data.listaProdutos;
            listaProdutos.forEach(produtos => {
                const li = document.createElement('li');
                lista.appendChild(li);
                li.innerText = `Produto: ${produtos.nome}
                            Preço: R$${produtos.preco}`
            });
        })
        .catch(err => {
            lista.innerHTML = `<h2>${err.response.data.message}</h2>`;
        })
}

formListarProdutos.addEventListener('submit', listarProdutos);

// PUT
const formAtualizarProduto = document.getElementById('atualizarProduto');
const btnAtualizarProduto = document.getElementById('btnAtualizarProduto');

const atualizarProduto = (e) => {
    e.preventDefault();

    const nomeParaAtualizar = document.querySelector('input[name="nomeParaAtualizar"]').value;
    const nomeAtualizado = document.querySelector('input[name="nomeProdutoAtualizar"]').value;
    const precoAtualizado = document.querySelector('input[name="precoProdutoAtualizar"]').value;

    if(nomeParaAtualizar && nomeAtualizado && precoAtualizado) {

        api.put(`/produtos/${nomeParaAtualizar}`, {
            nome: nomeAtualizado,
            preco: precoAtualizado
        })
            .then(res => {
                alert(res.data.message);
            })
            .catch(err => {
                alert(err.response.data.message);
            })
    } else {
        alert('Todos os campos precisam ser preechidos!');
    }

};

formAtualizarProduto.addEventListener('submit', atualizarProduto);