🛒 DNCommerce - Sistema de Gerenciamento de Produtos
API RESTful para gerenciamento de produtos, clientes e pedidos de uma loja de produtos de beleza.

📋 Diagrama do Banco de Dados
text
┌───────────┐       ┌──────────┐       ┌──────────┐
│ CLIENTES  │◄──────┤ PEDIDOS  ├──────►│ PRODUTOS │
└───────────┘       └──────────┘       └──────────┘
     │                    │                    │
     │ 1:N              1││:N                 │
     │                    │                    │
     └────────────────────┘                    │
          (itens do pedido)                    │
                                               │
                                          ┌─────┐
                                          │ESTOQUE│
                                          └─────┘
Entidades Principais:
Produtos - Cadastro de produtos de beleza

Clientes - Cadastro de clientes da loja

Pedidos - Registro de vendas com itens

Estoque - Controle de quantidade disponível

🚀 Como Executar
Pré-requisitos
Node.js (versão 14 ou superior)

npm ou yarn

Instalação
bash
# Clone o repositório
git clone https://github.com/seu-usuario/dncommerce.git
cd dncommerce

# Instale as dependências
npm install

# Execute o servidor
npm run dev
O servidor estará disponível em: http://localhost:3000

📚 Documentação da API
Endpoints Disponíveis
Produtos
Método	Endpoint	Descrição
GET	/api/produtos	Listar todos produtos
GET	/api/produtos/:id	Buscar produto por ID
POST	/api/produtos	Criar novo produto
PUT	/api/produtos/:id	Atualizar produto
DELETE	/api/produtos/:id	Deletar produto (soft delete)
Clientes
Método	Endpoint	Descrição
GET	/api/clientes	Listar todos clientes
GET	/api/clientes/:id	Buscar cliente por ID
POST	/api/clientes	Criar novo cliente
PUT	/api/clientes/:id	Atualizar cliente
DELETE	/api/clientes/:id	Deletar cliente
Pedidos
Método	Endpoint	Descrição
GET	/api/pedidos	Listar todos pedidos
GET	/api/pedidos/:id	Buscar pedido por ID
POST	/api/pedidos	Criar novo pedido
PUT	/api/pedidos/:id/status	Atualizar status do pedido
🧪 Exemplos de Uso
Criar um Produto
bash
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Batom Líquido Matte",
    "descricao": "Batom de longa duração, acabamento matte",
    "preco": 45.90,
    "categoria": "maquiagem",
    "marca": "ColorPop",
    "estoque": 50
  }'
Criar um Cliente
bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "telefone": "(11) 99999-9999",
    "endereco": {
      "rua": "Rua das Flores",
      "numero": "123",
      "bairro": "Centro",
      "cidade": "São Paulo",
      "estado": "SP"
    }
  }'
Criar um Pedido
bash
curl -X POST http://localhost:3000/api/pedidos \
  -H "Content-Type: application/json" \
  -d '{
    "clienteId": 1,
    "itens": [
      {
        "produtoId": 1,
        "quantidade": 2
      },
      {
        "produtoId": 2,
        "quantidade": 1
      }
    ],
    "enderecoEntrega": {
      "rua": "Av. Paulista, 1000",
      "cidade": "São Paulo",
      "estado": "SP"
    },
    "observacoes": "Entregar de tarde"
  }'
🏗️ Estrutura do Projeto
text
dncommerce/
├── src/
│   ├── config/           # Configurações do projeto
│   │   └── database.js   # Configuração do banco de dados
│   ├── controllers/      # Controladores da API
│   │   ├── produtoController.js
│   │   ├── clienteController.js
│   │   └── pedidoController.js
│   ├── models/          # Modelos de dados
│   │   ├── Produto.js
│   │   ├── Cliente.js
│   │   └── Pedido.js
│   ├── routes/          # Rotas da API
│   │   ├── produtoRoutes.js
│   │   ├── clienteRoutes.js
│   │   └── pedidoRoutes.js
│   └── app.js           # Aplicação principal
├── server.js            # Ponto de entrada
├── package.json         # Dependências
├── .env                 # Variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo git
└── README.md           # Documentação
🛠️ Tecnologias Utilizadas
Node.js - Ambiente de execução JavaScript

Express - Framework web para Node.js

Arquitetura MVC - Padrão Model-View-Controller

JSON - Formato de dados para APIs

📊 Funcionalidades Implementadas
✅ Produtos
CRUD completo de produtos

Controle de estoque automático

Filtros por categoria

Soft delete (produtos não são removidos, apenas desativados)

✅ Clientes
Cadastro com validação de email único

Endereço completo

CRUD completo

✅ Pedidos
Criação com validação de estoque

Atualização automática de estoque

Controle de status (pendente, processando, enviado, entregue, cancelado)

Cálculo automático do total

✅ API
Respostas padronizadas em JSON

Status HTTP apropriados

Tratamento de erros

Validações de entrada

🧪 Testando a API
Com Insomnia/Postman
Importe a coleção de requisições

Configure a URL base: http://localhost:3000

Teste os endpoints disponíveis

Com curl (terminal)
bash
# Testar status da API
curl http://localhost:3000/

# Listar produtos
curl http://localhost:3000/api/produtos

# Criar produto
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","preco":100,"categoria":"teste"}'
🔧 Configuração do Ambiente
Variáveis de Ambiente (.env)
env
PORT=3000
NODE_ENV=development
Scripts do package.json
json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
🤝 Contribuindo
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/nova-feature)

Commit suas mudanças (git commit -m 'Adiciona nova feature')

Push para a branch (git push origin feature/nova-feature)

Abra um Pull Request


👥 Autor
Nicolas Barsoti - Desenvolvedor Back-end

🙏 Agradecimentos
À equipe da DNCommerce pelo desafio proposto

À comunidade Node.js pelas excelentes ferramentas

Aos professores e colegas pelo apoio

⚠️ Nota: Este projeto usa dados em memória para demonstração. Para produção, recomenda-se a integração com um banco de dados como MongoDB ou PostgreSQL.