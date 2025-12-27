// src/models/Estoque.js
const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true,
    unique: true
  },
  quantidade: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  quantidadeMinima: {
    type: Number,
    default: 10
  },
  ultimaAtualizacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Estoque', estoqueSchema);