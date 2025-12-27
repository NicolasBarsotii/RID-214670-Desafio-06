// src/controllers/clienteController.js
const Cliente = require('../models/Cliente');

const listar = (req, res) => {
  try {
    const clientes = Cliente.listar();
    res.json({
      sucesso: true,
      quantidade: clientes.length,
      dados: clientes
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao listar clientes',
      erro: error.message
    });
  }
};

const buscar = (req, res) => {
  try {
    const cliente = Cliente.buscarPorId(req.params.id);
    
    if (!cliente) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Cliente não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      dados: cliente
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar cliente',
      erro: error.message
    });
  }
};

const criar = (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    
    if (!nome || !email || !telefone) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Nome, email e telefone são obrigatórios'
      });
    }
    
    const cliente = Cliente.criar(req.body);
    
    if (cliente.erro) {
      return res.status(400).json({
        sucesso: false,
        mensagem: cliente.erro
      });
    }
    
    res.status(201).json({
      sucesso: true,
      mensagem: 'Cliente criado com sucesso',
      dados: cliente
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: 'Erro ao criar cliente',
      erro: error.message
    });
  }
};

const atualizar = (req, res) => {
  try {
    const cliente = Cliente.atualizar(req.params.id, req.body);
    
    if (!cliente) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Cliente não encontrado'
      });
    }
    
    if (cliente.erro) {
      return res.status(400).json({
        sucesso: false,
        mensagem: cliente.erro
      });
    }
    
    res.json({
      sucesso: true,
      mensagem: 'Cliente atualizado com sucesso',
      dados: cliente
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar cliente',
      erro: error.message
    });
  }
};

const deletar = (req, res) => {
  try {
    const sucesso = Cliente.deletar(req.params.id);
    
    if (!sucesso) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Cliente não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      mensagem: 'Cliente deletado com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao deletar cliente',
      erro: error.message
    });
  }
};

module.exports = {
  listar,
  buscar,
  criar,
  atualizar,
  deletar
};