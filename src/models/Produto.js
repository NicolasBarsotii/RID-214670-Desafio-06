// src/models/Produto.js - VERIFIQUE SE ESTÁ ASSIM
class Produto {
  constructor() {
    this.produtos = [
      { 
        id: 1, 
        nome: 'Batom Matte Vermelho', 
        descricao: 'Batom líquido de longa duração',
        preco: 45.90, 
        categoria: 'maquiagem',
        marca: 'Beleza Total',
        estoque: 50,
        ativo: true,
        criadoEm: new Date().toISOString()
      },
      { 
        id: 2, 
        nome: 'Creme Facial Hidratante', 
        descricao: 'Hidratação 24h para pele seca',
        preco: 89.90, 
        categoria: 'skincare',
        marca: 'Pele Perfeita',
        estoque: 30,
        ativo: true,
        criadoEm: new Date().toISOString()
      }
    ];
    this.proximoId = 3;
  }

  listar(filtros = {}) {
    let produtosFiltrados = this.produtos;
    
    if (filtros.categoria) {
      produtosFiltrados = produtosFiltrados.filter(p => 
        p.categoria.toLowerCase() === filtros.categoria.toLowerCase()
      );
    }
    
    if (filtros.ativo !== undefined) {
      produtosFiltrados = produtosFiltrados.filter(p => 
        p.ativo === filtros.ativo
      );
    }
    
    return produtosFiltrados;
  }

  buscarPorId(id) {
    return this.produtos.find(p => p.id === parseInt(id));
  }

  criar(dados) {
    const novoProduto = {
      id: this.proximoId++,
      ...dados,
      estoque: dados.estoque || 0,
      ativo: dados.ativo !== undefined ? dados.ativo : true,
      criadoEm: new Date().toISOString()
    };
    
    this.produtos.push(novoProduto);
    return novoProduto;
  }

  atualizar(id, dados) {
    const index = this.produtos.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) return null;
    
    this.produtos[index] = {
      ...this.produtos[index],
      ...dados,
      id: parseInt(id)
    };
    
    return this.produtos[index];
  }

  deletar(id) {
    const index = this.produtos.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) return false;
    
    this.produtos[index].ativo = false;
    return true;
  }

  atualizarEstoque(id, quantidade) {
    const produto = this.buscarPorId(id);
    if (!produto) return false;
    
    produto.estoque = quantidade;
    return true;
  }
}

// Exportar UMA INSTÂNCIA da classe
module.exports = new Produto();