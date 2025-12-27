// src/app.js - VERSÃO SIMPLIFICADA QUE FUNCIONA
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Rota principal SIMPLES
app.get('/', (req, res) => {
  res.json({
    sistema: 'DNCommerce API',
    status: 'online',
    versao: '1.0.0',
    descricao: 'Sistema de gerenciamento de produtos',
    rotas: {
      produtos: '/api/produtos',
      clientes: '/api/clientes', 
      pedidos: '/api/pedidos'
    }
  });
});

// Rotas de produtos (SIMPLE)
app.get('/api/produtos', (req, res) => {
  res.json([
    { id: 1, nome: 'Batom Teste', preco: 39.90 },
    { id: 2, nome: 'Base Líquida', preco: 65.90 }
  ]);
});

app.post('/api/produtos', (req, res) => {
  console.log('Produto criado:', req.body);
  res.status(201).json({
    mensagem: 'Produto criado!',
    produto: { id: Date.now(), ...req.body }
  });
});

// Rotas de clientes (SIMPLE)
app.get('/api/clientes', (req, res) => {
  res.json([
    { id: 1, nome: 'Cliente Teste', email: 'teste@email.com' }
  ]);
});

app.post('/api/clientes', (req, res) => {
  console.log('Cliente criado:', req.body);
  res.status(201).json({
    mensagem: 'Cliente criado!',
    cliente: { id: Date.now(), ...req.body }
  });
});

// Rotas de pedidos (SIMPLE)
app.get('/api/pedidos', (req, res) => {
  res.json([
    { id: 1, clienteId: 1, status: 'pendente' }
  ]);
});

app.post('/api/pedidos', (req, res) => {
  console.log('Pedido criado:', req.body);
  res.status(201).json({
    mensagem: 'Pedido criado!',
    pedido: { id: Date.now(), ...req.body, status: 'pendente' }
  });
});

module.exports = app;