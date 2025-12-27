// src/controllers/pedidoController.js
const Pedido = require('../models/Pedido');

const listar = (req, res) => {
  try {
    const pedidos = Pedido.listar();
    res.json({
      sucesso: true,
      quantidade: pedidos.length,
      dados: pedidos
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao listar pedidos',
      erro: error.message
    });
  }
};

const buscar = (req, res) => {
  try {
    const pedido = Pedido.buscarPorId(req.params.id);
    
    if (!pedido) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Pedido não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      dados: pedido
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar pedido',
      erro: error.message
    });
  }
};

const criar = (req, res) => {
  try {
    const { clienteId, itens } = req.body;
    
    if (!clienteId || !itens || !Array.isArray(itens)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Cliente e itens são obrigatórios'
      });
    }
    
    const pedido = Pedido.criar(req.body);
    
    res.status(201).json({
      sucesso: true,
      mensagem: 'Pedido criado com sucesso',
      dados: pedido
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: 'Erro ao criar pedido',
      erro: error.message
    });
  }
};

const atualizarStatus = (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Status é obrigatório'
      });
    }
    
    const pedido = Pedido.atualizarStatus(req.params.id, status);
    
    if (!pedido) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Pedido não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      mensagem: 'Status atualizado com sucesso',
      dados: pedido
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar status',
      erro: error.message
    });
  }
};

module.exports = {
  listar,
  buscar,
  criar,
  atualizarStatus
};