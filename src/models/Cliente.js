// src/models/Cliente.js
class Cliente {
  constructor() {
    this.clientes = [
      {
        id: 1,
        nome: 'Maria Silva',
        email: 'maria@email.com',
        telefone: '(11) 99999-9999',
        endereco: {
          rua: 'Rua das Flores',
          numero: '123',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'SP',
          cep: '01234-567'
        },
        criadoEm: new Date().toISOString()
      }
    ];
    this.proximoId = 2;
  }

  listar() {
    return this.clientes;
  }

  buscarPorId(id) {
    return this.clientes.find(c => c.id === parseInt(id));
  }

  buscarPorEmail(email) {
    return this.clientes.find(c => c.email === email);
  }

  criar(dados) {
    if (this.buscarPorEmail(dados.email)) {
      return { erro: 'Email já cadastrado' };
    }
    
    const novoCliente = {
      id: this.proximoId++,
      ...dados,
      criadoEm: new Date().toISOString()
    };
    
    this.clientes.push(novoCliente);
    return novoCliente;
  }

  atualizar(id, dados) {
    const index = this.clientes.findIndex(c => c.id === parseInt(id));
    
    if (index === -1) return null;
    
    if (dados.email && dados.email !== this.clientes[index].email) {
      if (this.buscarPorEmail(dados.email)) {
        return { erro: 'Email já cadastrado' };
      }
    }
    
    this.clientes[index] = {
      ...this.clientes[index],
      ...dados,
      id: parseInt(id)
    };
    
    return this.clientes[index];
  }

  deletar(id) {
    const index = this.clientes.findIndex(c => c.id === parseInt(id));
    
    if (index === -1) return false;
    
    this.clientes.splice(index, 1);
    return true;
  }
}

module.exports = new Cliente();