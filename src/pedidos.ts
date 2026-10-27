import type { Pedido, ItemPedido } from './types.js';
import { buscarClientePorId } from './clientes.js';
import { buscarProdutoPorId } from './produtos.js';
import { listarCarrinho, limparCarrinho } from './carrinho.js';

const pedidos: Pedido[] = [];


function finalizarPedido(clienteId: number): Pedido | undefined {
    const cliente = buscarClientePorId(clienteId);

    if (!cliente) {
        console.log('Cliente não encontrado!');
        return;
    }

    const carrinho = listarCarrinho();

    if (carrinho.length === 0) {
        console.log('Não é possível finalizar um carrinho vazio!');
        return;
    }

    
    for (const item of carrinho) {
        const produto = buscarProdutoPorId(item.produtoId);

        if (!produto) {
            throw new Error('Um produto do carrinho não existe mais!');
        }

        if (!Number.isInteger(item.quantidade) || item.quantidade <= 0) {
            throw new Error('Quantidade inválida!');
        }

        if (item.quantidade > produto.estoque) {
            throw new Error('Estoque insuficiente para finalizar o pedido!');
        }
    }

    
    const itensPedido: ItemPedido[] = [];

    for (const item of carrinho) {
        const produto = buscarProdutoPorId(item.produtoId);

        if (!produto) {
            throw new Error('Produto não encontrado!');
        }

        const subtotal = produto.preco * item.quantidade;

        itensPedido.push({
            produtoId: produto.id,
            nome: produto.nome,
            precoUnitario: produto.preco,
            quantidade: item.quantidade,
            subtotal: subtotal
        });
    }

    
    let total = 0;

    for (const item of itensPedido) {
        total += item.subtotal;
    }

    
    const novoPedido: Pedido = {
        id: pedidos.length + 1,
        clienteId: clienteId,
        itens: itensPedido,
        total: total,
        data: new Date()
    };

    
    for (const item of itensPedido) {
        const produto = buscarProdutoPorId(item.produtoId);

        if (produto) {
            produto.estoque -= item.quantidade;
        }
    }

    pedidos.push(novoPedido);
    limparCarrinho();

    console.log('Pedido finalizado com sucesso!');

    return novoPedido;
}


function listarPedidos(): Pedido[] {
    return pedidos;
}


function buscarPedidosPorCliente(clienteId: number): Pedido[] {
    return pedidos.filter(pedido => pedido.clienteId === clienteId);
}

export {
    finalizarPedido,
    listarPedidos,
    buscarPedidosPorCliente
};