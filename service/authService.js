// service/authService.js
const { findUserByUsername } = require('../model/userModel');

function login(username, password) {
  const user = findUserByUsername(username);
  if (!user) return { success: false, message: 'Usuário não encontrado' };
  if (user.password !== password) return { success: false, message: 'Senha incorreta' };
  return { success: true, user: { id: user.id, username: user.username } };
}

module.exports = { login };
