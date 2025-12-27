// src/routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');

router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscar);
router.post('/', clienteController.criar);
router.put('/:id', clienteController.atualizar);
router.delete('/:id', clienteController.deletar);

module.exports = router;