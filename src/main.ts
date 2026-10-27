import promptSync from 'prompt-sync';

import { cadastrarCliente, listarClientes, buscarClientePorId } from './clientes.js';

import {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    buscarProdutosPorNome,
    filtrarProdutosPorCategoria,
    atualizarProduto,
    removerProduto
} from './produtos.js';

import {
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarQuantidade,
    listarCarrinho,
    calcularSubtotal,
    calcularTotal
} from './carrinho.js';

import {
    finalizarPedido,
    listarPedidos,
    buscarPedidosPorCliente
} from './pedidos.js';

import {
    relatorioVendas,
    relatorioProdutosVendidos,
    relatorioPedidos
} from './relatorios.js';

import type { Cliente } from './types.js';

const prompt = promptSync({ sigint: true });


// ===== CADASTRO DE CLIENTE =====

console.log('===== CADASTRO DE CLIENTE =====');

const idInput: number = Number(prompt('Digite o número do ID do cliente: '));
const nomeInput: string = prompt('Agora, digite o nome do cliente: ');
const emailInput: string = prompt('Por fim, digite o e-mail do cliente: ');

const novoCliente: Cliente = {
    id: idInput,
    nome: nomeInput,
    email: emailInput
};

cadastrarCliente(novoCliente);

console.log('===== CLIENTES CADASTRADOS =====');
console.log(listarClientes());

console.log('===== BUSCA DE CLIENTE =====');
console.log(buscarClientePorId(1));


// ===== PRODUTOS =====

console.log('===== PRODUTOS DISPONÍVEIS =====');
console.log(listarProdutos());

console.log('===== CADASTRAR PRODUTO =====');

cadastrarProduto({
    id: 4,
    nome: 'Monitor',
    categoria: 'Eletrônicos',
    preco: 900,
    estoque: 12
});

console.log('===== BUSCAR PRODUTO POR ID =====');
console.log(buscarProdutoPorId(1));

console.log('===== BUSCAR PRODUTO POR NOME =====');
console.log(buscarProdutosPorNome('mouse'));

console.log('===== FILTRAR POR CATEGORIA =====');
console.log(filtrarProdutosPorCategoria('Eletrônicos'));

console.log('===== ATUALIZAR PRODUTO =====');

atualizarProduto(4, 'Monitor LED', 'Eletrônicos', 950, 10);

console.log(buscarProdutoPorId(4));

console.log('===== REMOVER PRODUTO =====');
console.log('Produto removido:', removerProduto(4));


// ===== TESTE INVÁLIDO 1 =====

console.log('===== TESTE: PREÇO NEGATIVO =====');

cadastrarProduto({
    id: 5,
    nome: 'Webcam',
    categoria: 'Eletrônicos',
    preco: -100,
    estoque: 5
});

console.log('Produto inválido cadastrado?', buscarProdutoPorId(5));


// ===== CARRINHO =====

console.log('===== ADICIONAR PRODUTOS AO CARRINHO =====');

adicionarAoCarrinho(1, 2);
adicionarAoCarrinho(2, 1);

console.log(listarCarrinho());

console.log('===== ALTERAR QUANTIDADE =====');

alterarQuantidade(2, 2);

console.log('===== CALCULAR SUBTOTAL =====');
console.log('Subtotal do notebook: R$', calcularSubtotal(1));

console.log('===== CALCULAR TOTAL =====');
console.log('Total: R$', calcularTotal());

console.log('===== REMOVER ITEM DO CARRINHO =====');

console.log('Item removido:', removerDoCarrinho(2));
console.log(listarCarrinho());


// ===== TESTE INVÁLIDO 2 =====

console.log('===== TESTE: ESTOQUE INSUFICIENTE =====');

adicionarAoCarrinho(1, 100);

console.log('Carrinho após tentativa inválida:');
console.log(listarCarrinho());


// ===== FINALIZAR COMPRA =====

console.log('===== FINALIZAR PEDIDO =====');

const pedido = finalizarPedido(1);

if (pedido) {
    console.log('Pedido realizado:', pedido);
} else {
    console.log('Não foi possível finalizar o pedido.');
}

console.log('===== ESTOQUE APÓS A COMPRA =====');
console.log(buscarProdutoPorId(1));

console.log('===== TODOS OS PEDIDOS =====');
console.log(listarPedidos());

console.log('===== PEDIDOS DO CLIENTE 1 =====');
console.log(buscarPedidosPorCliente(1));


// ===== TESTE INVÁLIDO 3 =====

console.log('===== TESTE: CARRINHO VAZIO =====');

finalizarPedido(1);


// ===== RELATÓRIOS =====

relatorioVendas();
relatorioProdutosVendidos();
relatorioPedidos();

console.log('===== FIM DA DEMONSTRAÇÃO =====');