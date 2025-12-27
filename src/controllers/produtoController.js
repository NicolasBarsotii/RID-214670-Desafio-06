// src/controllers/produtoController.js - VERIFIQUE SE ESTÁ ASSIM
const Produto = require('../models/Produto');

// 1. Função para listar produtos
const listar = (req, res) => {
  try {
    const produtos = Produto.listar(req.query);
    res.json({
      sucesso: true,
      quantidade: produtos.length,
      dados: produtos
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao listar produtos',
      erro: error.message
    });
  }
};

// 2. Função para buscar produto por ID
const buscar = (req, res) => {
  try {
    const produto = Produto.buscarPorId(req.params.id);
    
    if (!produto) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Produto não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      dados: produto
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao buscar produto',
      erro: error.message
    });
  }
};

// 3. Função para criar produto
const criar = (req, res) => {
  try {
    const { nome, preco, categoria } = req.body;
    
    if (!nome || !preco || !categoria) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Nome, preço e categoria são obrigatórios'
      });
    }
    
    if (preco <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Preço deve ser maior que zero'
      });
    }
    
    const produto = Produto.criar(req.body);
    
    res.status(201).json({
      sucesso: true,
      mensagem: 'Produto criado com sucesso',
      dados: produto
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: 'Erro ao criar produto',
      erro: error.message
    });
  }
};

// 4. Função para atualizar produto
const atualizar = (req, res) => {
  try {
    const produto = Produto.atualizar(req.params.id, req.body);
    
    if (!produto) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Produto não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      mensagem: 'Produto atualizado com sucesso',
      dados: produto
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar produto',
      erro: error.message
    });
  }
};

// 5. Função para deletar produto
const deletar = (req, res) => {
  try {
    const sucesso = Produto.deletar(req.params.id);
    
    if (!sucesso) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Produto não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      mensagem: 'Produto desativado com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao deletar produto',
      erro: error.message
    });
  }
};

// 6. Função para atualizar estoque
const atualizarEstoque = (req, res) => {
  try {
    const { quantidade } = req.body;
    
    if (quantidade === undefined || quantidade < 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Quantidade inválida'
      });
    }
    
    const sucesso = Produto.atualizarEstoque(req.params.id, quantidade);
    
    if (!sucesso) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Produto não encontrado'
      });
    }
    
    res.json({
      sucesso: true,
      mensagem: 'Estoque atualizado com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar estoque',
      erro: error.message
    });
  }
};

// EXPORTAR TODAS AS FUNÇÕES
module.exports = {
  listar,
  buscar,
  criar,
  atualizar,
  deletar,
  atualizarEstoque
};