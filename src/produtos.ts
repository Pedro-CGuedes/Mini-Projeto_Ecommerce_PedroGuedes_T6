import type { Produto } from './types.js';


const produtos: Produto[] = [
    { id: 1, nome: 'Notebook', categoria: 'Eletrônicos', preco: 3000, estoque: 15},
    { id: 2, nome: 'Mouse sem fio', categoria: 'Acessórios', preco: 60, estoque: 40 },
    { id: 3, nome: 'Cadeira Gamer', categoria: 'Mobiliário', preco: 1500, estoque: 25 }
];


function cadastrarProduto(produto: Produto): void {
    const produtoExistente = produtos.find(p => p.id === produto.id);

    if (produtoExistente) {
        console.log('Produto já cadastrado com esse ID.');
        return;
    }

    if (produto.nome.trim() === '') {
        console.log('Os campos nome e categoria precisam ser obrigatoriamente descritos.');
        return;
    }

    if (produto.preco <= 0) {
        console.log('O preço do produto precisa ser superior a  0.');
        return;
    }

    if (produto.estoque < 0) {
        console.log('O número do produto em estoque não pode ser negativo.');
        return;
    }

    produtos.push(produto);
    console.log ('Produto cadastrado com sucesso');
}


function listarProdutos(): Produto[] {
    return produtos;
};


function buscarProdutoPorId (id:number): Produto | undefined {
return produtos.find (produto => produto.id === id)
};


function buscarProdutosPorNome(nome: string): Produto[] {
    return produtos.filter(produto =>
        produto.nome.toLowerCase().includes(nome.toLowerCase())
    );
}


function filtrarProdutosPorCategoria(categoria: string): Produto[] {
return produtos.filter(produto =>
        produto.categoria.toLowerCase() === categoria.toLowerCase()
    );
}


function atualizarProduto (

id: number,
nome: string,
categoria: string,
preco: number,
estoque: number


): void {
    
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        console.log('Produto não encontrado.');
        return;
    }

    if (nome.trim() === '' || categoria.trim() === '') {
        console.log('Nome e categoria são obrigatórios.');
        return;
    }

    if (preco <= 0) {
        console.log('O preço deve ser maior que zero.');
        return;
    }

    if (estoque < 0) {
        console.log('O estoque deve ser um número inteiro não negativo.');
        return;
    }

    produto.nome = nome;
    produto.categoria = categoria;
    produto.preco = preco;
    produto.estoque = estoque;
}

function removerProduto(id: number): boolean{

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return false;

    }

    produtos.splice(indice,1);
    return true;

}


export {
    produtos,
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    buscarProdutosPorNome,
    filtrarProdutosPorCategoria,
    atualizarProduto,
    removerProduto
};