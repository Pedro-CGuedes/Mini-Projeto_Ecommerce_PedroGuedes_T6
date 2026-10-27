import { listarPedidos } from './pedidos.js';


function relatorioVendas(): void {

    const pedidos = listarPedidos();
    let faturamento = 0;

    for (const pedido of pedidos) {
        faturamento += pedido.total;
    }

    console.log('===== RELATÓRIO DE VENDAS =====');
    console.log('Quantidade de pedidos realizados:', pedidos.length);
    console.log('Faturamento total da loja: R$', faturamento.toFixed(2));
}



function relatorioProdutosVendidos(): void {

    const pedidos = listarPedidos();
    let quantidadeVendida = 0;

    for (const pedido of pedidos) {
        for (const item of pedido.itens) {
            quantidadeVendida += item.quantidade;
        }
    }

    console.log('===== PRODUTOS VENDIDOS =====');
    console.log('Quantidade total de produtos vendidos:', quantidadeVendida);
}



function relatorioPedidos(): void {
    const pedidos = listarPedidos();

    console.log('===== HISTÓRICO DE PEDIDOS =====');

    for (const pedido of pedidos) {
        console.log('Número do pedido:', pedido.id);
        console.log('ID do cliente:', pedido.clienteId);
        console.log('Valor da compra: R$', pedido.total.toFixed(2));
        console.log('Data da compra:', pedido.data.toLocaleString('pt-BR'));
        console.log('-----------------------------');
    }
}

export {
    relatorioVendas,
    relatorioProdutosVendidos,
    relatorioPedidos
};