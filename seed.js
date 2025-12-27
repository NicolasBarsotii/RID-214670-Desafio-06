// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./src/models/Produto');
const Cliente = require('./src/models/Cliente');

const produtosIniciais = [
  {
    nome: 'Batom Líquido Matte',
    descricao: 'Batom de longa duração, acabamento matte',
    preco: 45.90,
    categoria: 'maquiagem',
    marca: 'ColorPop',
    estoque: 50
  },
  {
    nome: 'Creme Facial Hidratante',
    descricao: 'Hidratação 24h para pele seca',
    preco: 89.90,
    categoria: 'skincare',
    marca: 'Neutrogena',
    estoque: 30
  },
  {
    nome: 'Shampoo Antiqueda',
    descricao: 'Fórmula com biotina e cafeína',
    preco: 42.50,
    categoria: 'cabelos',
    marca: 'Pantene',
    estoque: 40
  }
];

const clientesIniciais = [
  {
    nome: 'Maria Silva',
    email: 'maria@email.com',
    telefone: '(11) 99999-9999',
    endereco: {
      rua: 'Rua das Flores',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP'
    }
  },
  {
    nome: 'João Santos',
    email: 'joao@email.com',
    telefone: '(21) 98888-7777',
    endereco: {
      rua: 'Av. Brasil',
      numero: '1000',
      bairro: 'Centro',
      cidade: 'Rio de Janeiro',
      estado: 'RJ'
    }
  }
];

async function seed() {
  try {
    console.log('🔗 Conectando ao MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dncommerce');
    
    console.log('🧹 Limpando banco de dados...');
    await Produto.deleteMany({});
    await Cliente.deleteMany({});
    
    console.log('🌱 Inserindo dados iniciais...');
    await Produto.insertMany(produtosIniciais);
    await Cliente.insertMany(clientesIniciais);
    
    console.log('✅ Banco populado com sucesso!');
    console.log(`📦 ${produtosIniciais.length} produtos inseridos`);
    console.log(`👥 ${clientesIniciais.length} clientes inseridos`);
    
    // Listar produtos inseridos
    const produtos = await Produto.find({});
    console.log('\n📋 Produtos disponíveis:');
    produtos.forEach(p => {
      console.log(`   • ${p.nome} - R$ ${p.preco} (Estoque: ${p.estoque})`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao popular banco:', error);
    process.exit(1);
  }
}

seed();