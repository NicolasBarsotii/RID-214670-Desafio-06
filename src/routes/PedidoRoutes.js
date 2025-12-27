// src/routes/pedidoRoutes.js
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/PedidoController');

router.get('/', pedidoController.listar);
router.get('/:id', pedidoController.buscar);
router.post('/', pedidoController.criar);
router.put('/:id/status', pedidoController.atualizarStatus);

module.exports = router;