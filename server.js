// server.js - VERSÃO ATUALIZADA
const app = require('./src/app/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║              DNCOMMERCE API - COMPLETO              ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  🌐 URL: http://localhost:${PORT}                     ║`);
  console.log('║  📊 Status: Online                                  ║');
  console.log('║  🗄️  Dados: Memória (arrays)                         ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log('║  📦 ENTIDADES IMPLEMENTADAS:                        ║');
  console.log('║     • Produtos  (CRUD completo)                     ║');
  console.log('║     • Clientes  (CRUD completo)                     ║');
  console.log('║     • Pedidos   (com controle de estoque)           ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log('║  🔧 ENDPOINTS PRINCIPAIS:                           ║');
  console.log(`║     GET  http://localhost:${PORT}/api/produtos        ║`);
  console.log(`║     POST http://localhost:${PORT}/api/produtos        ║`);
  console.log(`║     POST http://localhost:${PORT}/api/clientes        ║`);
  console.log(`║     POST http://localhost:${PORT}/api/pedidos         ║`);
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log('║  💡 Use Insomnia/Postman para testar POST/PUT       ║');
  console.log('║  🛑 Ctrl+C para parar o servidor                    ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log('');
  console.log('📋 Para ver todos endpoints, acesse: http://localhost:3000');
  console.log('');
});