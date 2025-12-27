// src/routes/produtoRoutes.js - VERIFIQUE SE ESTÁ ASSIM
const express = require('express');
const router = express.Router();

// Importar o controller COMPLETO
const produtoController = require('../controllers/produtoController');

// Definir rotas com as funções CORRETAS
router.get('/', produtoController.listar);           // Listar produtos
router.get('/:id', produtoController.buscar);        // Buscar produto por ID
router.post('/', produtoController.criar);           // Criar produto
router.put('/:id', produtoController.atualizar);     // Atualizar produto
router.delete('/:id', produtoController.deletar);    // Deletar produto
router.put('/:id/estoque', produtoController.atualizarEstoque); // Atualizar estoque

module.exports = router;