import type { Cliente } from "./types.ts";


const clientes: Cliente[] = [

{id:1, nome: "Ana Elisa", email: "anaelisagcunha@gmail.com"},

{id: 2, nome: "Gabriel Novaes", email: "gabrielnct@yahoo.com"},

{id: 3, nome: "Vanessa Tobias", email: "vanessatbt@gmail.com"},

];


// Para cadastrar cada um dos clientes

function cadastrarCliente(cliente: Cliente): boolean {
    return adicionarALista (cliente);

}

function adicionarALista(cliente: Cliente): boolean {
 
    if (cliente.nome.trim() === '') {
    console.log ('Preencha o nome do cliente:')
    return false;

 }

if (cliente.nome.trim() === '') {
        console.log('Preencha o nome do cliente!');
        return false;
    }

    if (cliente.email.trim() === '') {
        console.log('Preencha o e-mail do cliente');
        return false;
    }

    const clienteExistente = clientes.find(c => c.id === cliente.id);

    if (clienteExistente) {
        console.log('Já temos um cliente com esse ID cadastrado no sistema!');
        return false;
    }

    const emailExistente = clientes.find(c => c.email === cliente.email);

    if (emailExistente) {
        console.log('E-mail já cadastrado!');
        return false;
    }

    clientes.push(cliente);
    console.log('Cliente cadastrado com sucesso!');
    return true;
}

// Para buscar um cliente no sistema

function listarClientes(): Cliente[] {
    return clientes;

}


// Se eu quiser localizar um cliente por ID

function buscarClientePorId  (id: number): Cliente | undefined {

    return clientes.find((cliente) => cliente.id === id);

}

export {
  cadastrarCliente,
  listarClientes,
  buscarClientePorId
};