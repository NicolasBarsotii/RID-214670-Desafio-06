🛒 DNCommerce - Sistema de Gerenciamento de Produtos
API RESTful para gerenciamento de estoque e vendas de uma loja online de produtos de beleza.

🚀 Visão Geral
O DNCommerce é uma API desenvolvida em Node.js + Express que permite o gerenciamento completo de produtos, clientes e pedidos. O sistema foi projetado para atender às necessidades de uma loja de cosméticos, com controle de estoque automático e validações de negócio.

✨ Funcionalidades Principais
✅ Gestão de Produtos - CRUD completo com controle de estoque
✅ Cadastro de Clientes - Com validação de email único
✅ Sistema de Pedidos - Com cálculo automático de total
✅ Controle de Estoque - Atualização automática ao vender
✅ API RESTful - Endpoints padronizados e documentados
✅ Validações - Dados consistentes e seguros

🏗️ Tecnologias
Node.js - Ambiente de execução

Express - Framework web

Arquitetura MVC - Organização do código

JavaScript - Linguagem principal

📚 Endpoints Disponíveis
Recurso	Métodos	Descrição
/api/produtos	GET, POST	Listar e criar produtos
/api/clientes	GET, POST	Gerenciar clientes
/api/pedidos	GET, POST	Processar vendas
🚦 Como Usar
bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/dncommerce.git

# 2. Instale as dependências
npm install

# 3. Execute o servidor
npm run dev

# 4. Acesse: http://localhost:3000
📊 Estrutura do Projeto
text
src/
├── controllers/  # Lógica das rotas
├── models/       # Modelos de dados
├── routes/       # Definição das rotas
└── app.js        # Configuração principal
🎯 Objetivo do Projeto
Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar habilidades em:

Modelagem de dados

Desenvolvimento de APIs RESTful

Integração de sistemas

Boas práticas de programação
