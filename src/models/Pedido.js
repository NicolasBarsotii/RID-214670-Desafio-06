// src/models/Pedido.js
class Pedido {
  constructor() {
    this.pedidos = [];
    this.proximoId = 1;
  }

  listar() {
    return this.pedidos;
  }

  buscarPorId(id) {
    return this.pedidos.find(p => p.id === parseInt(id));
  }

  criar(dados) {
    const novoPedido = {
      id: this.proximoId++,
      ...dados,
      status: 'pendente',
      data: new Date().toISOString()
    };
    
    this.pedidos.push(novoPedido);
    return novoPedido;
  }

  atualizarStatus(id, status) {
    const pedido = this.buscarPorId(id);
    if (!pedido) return null;
    
    pedido.status = status;
    return pedido;
  }
}

module.exports = new Pedido();