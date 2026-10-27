# Mini-Projeto E-commerce — Back-End Node.js

**Aluno:** Pedro Correia Guedes  
**Curso:** SC Tech — Desenvolvimento de Software  
**Projeto:** Primeiro Projeto Avaliativo de Back-End

---

## 📌 Sobre o projeto

Neste projeto, desenvolvi em TypeScript e Node.js um sistema simples de e-commerce. Além de ser uma excelente oportunidade para aplicar esses fundamentos de desenvolvimento back-end, o objetivo é utilizar muitos dos conceitos de programação aprendidos durante o curso, como funções, objetos, arrays, validações, tipos e a organizar o código em diferentes módulos, que se complementam.

O sistema permite difeentes ações, sendo elas: gerenciar clientes, produtos, carrinho de compras, pedidos e relatórios de vendas.

---

## 🚀 Funcionalidades

### 👤 Gerenciamento de clientes

- Cadastrar novos clientes.
- Listar os clientes cadastrados.
- Buscar clientes pelo ID.
- Validar os dados informados no cadastro.

### 📦 Gerenciamento de produtos

- Cadastrar novos produtos.
- Listar os produtos disponíveis.
- Buscar produtos pelo ID.
- Pesquisar produtos pelo nome.
- Filtrar produtos por categoria.
- Atualizar informações dos produtos.
- Remover produtos cadastrados.
- Validar preços e quantidades em estoque.

### 🛒 Carrinho de compras

- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Alterar a quantidade dos produtos.
- Listar os itens adicionados.
- Calcular o subtotal de cada produto.
- Calcular o valor total da compra.
- Verificar a disponibilidade em estoque.

### 💳 Gerenciamento de pedidos

- Finalizar compras.
- Verificar se o cliente está cadastrado.
- Validar a disponibilidade dos produtos.
- Impedir a finalização de carrinhos vazios.
- Atualizar o estoque após a compra.
- Registrar os pedidos realizados.
- Consultar pedidos por cliente.

### 📊 Relatórios

- Consultar a quantidade de pedidos realizados.
- Calcular o faturamento total da loja.
- Consultar a quantidade de produtos vendidos.
- Visualizar o histórico de pedidos.

---

## 🛠️ Tecnologias utilizadas

- **Node.js:** execução do projeto no terminal.
- **TypeScript:** linguagem utilizada no desenvolvimento.
- **prompt-sync:** biblioteca para receber informações digitadas pelo usuário.

---

## 📁 Estrutura do projeto

```text
ecommerce/
├── src/
│   ├── types.ts
│   ├── clientes.ts
│   ├── produtos.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   ├── relatorios.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Organização dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `types.ts` | Definição dos tipos utilizados no sistema. |
| `clientes.ts` | Cadastro e consulta de clientes. |
| `produtos.ts` | Cadastro, pesquisa e gerenciamento de produtos. |
| `carrinho.ts` | Operações e cálculos do carrinho de compras. |
| `pedidos.ts` | Finalização e consulta dos pedidos. |
| `relatorios.ts` | Relatórios de vendas e faturamento. |
| `main.ts` | Execução e demonstração das funcionalidades. |

---

## ▶️ Como executar o projeto

### 1. Pré-requisitos

É necessário ter o **Node.js** e o **npm** instalados no computador.

### 2. Instalar as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 3. Verificar o código TypeScript

```bash
npx tsc --noEmit
```

Esse comando verifica possíveis erros de compilação sem gerar arquivos JavaScript.

### 4. Compilar o projeto

```bash
npx tsc
```

### 5. Executar o sistema

```bash
node dist/main.js
```

O sistema solicitará os dados de um novo cliente e, em seguida, executará uma demonstração das funcionalidades do e-commerce.

---

## 🧪 Testes realizados

O arquivo `main.ts` demonstra situações válidas e inválidas para verificar o funcionamento do sistema.

### Teste 1 — Cadastro com preço negativo

O sistema tenta cadastrar um produto com preço inferior a zero.

**Resultado esperado:** o cadastro é rejeitado e o produto não é adicionado à lista.

### Teste 2 — Estoque insuficiente

O sistema tenta adicionar ao carrinho uma quantidade superior ao estoque disponível.

**Resultado esperado:** a operação é rejeitada e o carrinho permanece sem alterações.

### Teste 3 — Carrinho vazio

O sistema tenta finalizar um pedido sem produtos no carrinho.

**Resultado esperado:** o pedido não é registrado.

### Teste 4 — Compra válida

O sistema realiza a compra de duas unidades de um notebook.

**Resultado esperado:**

- O pedido é registrado com sucesso.
- O valor total é calculado.
- O estoque é atualizado automaticamente.
- O carrinho é esvaziado após a compra.

### Teste 5 — Relatórios

Após a compra, o sistema apresenta o faturamento, a quantidade de produtos vendidos e o histórico de pedidos.

---

## 📋 Regras de negócio

- Cada produto deve possuir um identificador único.
- O preço de um produto deve ser maior que zero.
- O estoque não pode ser negativo.
- O cliente deve estar cadastrado para realizar uma compra.
- A quantidade solicitada não pode ultrapassar o estoque disponível.
- O carrinho não pode estar vazio ao finalizar um pedido.
- O estoque é atualizado somente após a validação da compra.
- Os pedidos registram os preços dos produtos no momento da compra.

---

## ⚠️ Limitações do projeto

- Os dados são armazenados em memória.
- As informações são reiniciadas quando o programa é encerrado.
- O sistema funciona pelo terminal.
- Não há integração com banco de dados.
- Não há interface gráfica ou processamento real de pagamentos.

