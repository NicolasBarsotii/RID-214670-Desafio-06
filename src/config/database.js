// src/config/database.js - SIMPLIFICADO
console.log('⚠️  Modo: Dados em memória (sem MongoDB)');
console.log('💡 Para usar MongoDB, instale: npm install mongoose');

// Função vazia - não faz nada (modo memória)
const connectDB = () => {
  console.log('✅ Servidor usando dados em memória');
};

module.exports = connectDB;