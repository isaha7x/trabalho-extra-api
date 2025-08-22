// model/userModel.js
// Simulação de um "banco de dados" em memória
const users = [
  { id: 1, username: 'admin', password: '123456' },
  { id: 2, username: 'user', password: 'password' }
];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { findUserByUsername };
