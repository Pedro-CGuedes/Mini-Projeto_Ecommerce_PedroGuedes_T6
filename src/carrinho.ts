import type { ItemCarrinho } from './types.js';
import { buscarProdutoPorId } from './produtos.js';

const carrinho: ItemCarrinho[] = [];

function adicionarAoCarrinho(produtoId: number, quantidade: number): void {

const produto = buscarProdutoPorId(produtoId);

if (!produto) {
console.log ('Produto não encontrado.');
return;

}

if (quantidade <= 0) {
console.log('A quantidade de produtos deve ser maior que zero!');
return;

    }

    const itemExistente = carrinho.find(item=> item.produtoId === produtoId);
    let quantidadeTotal = quantidade;


    if (itemExistente) {
        quantidadeTotal = itemExistente.quantidade + quantidade;
    }

    if (quantidadeTotal > produto.estoque) {
        console.log('Estoque insuficiente!');
        return;
    }

    if (itemExistente) {
        itemExistente.quantidade = quantidadeTotal;
    } else {
        carrinho.push({ produtoId, quantidade });
    }

    console.log('Produto adicionado ao carrinho!');
}

function removerDoCarrinho(produtoId: number): boolean {
    const indice = carrinho.findIndex(item => item.produtoId === produtoId);

    if (indice === -1) {
        return false;
    }

    carrinho.splice(indice, 1);
    return true;
}


function alterarQuantidade(produtoId: number, quantidade: number): void {
    const item = carrinho.find(item => item.produtoId === produtoId);
    const produto = buscarProdutoPorId(produtoId);

    if (!item || !produto) {
        throw new Error('Produto não encontrado no carrinho!');
    }

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        throw new Error('Quantidade inválida!');
    }

    if (quantidade > produto.estoque) {
        throw new Error('Estoque insuficiente!');
    }

    item.quantidade = quantidade;
    console.log('Quantidade atualizada!');
}


function listarCarrinho(): ItemCarrinho[] {
    return carrinho;
}


function calcularSubtotal(produtoId: number): number {
    const item = carrinho.find(item => item.produtoId === produtoId);
    const produto = buscarProdutoPorId(produtoId);

    if (!item || !produto) {
        throw new Error('Produto não encontrado!');
    }

    return produto.preco * item.quantidade;
}


function calcularTotal(): number {
    let total = 0;

    for (const item of carrinho) {
        total += calcularSubtotal(item.produtoId);
    }

    console.log('O cálculo total da sua compra é:');
    return total;
}


function limparCarrinho(): void {
    carrinho.splice(0, carrinho.length);
}

export {
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarQuantidade,
    listarCarrinho,
    calcularSubtotal,
    calcularTotal,
    limparCarrinho
};
