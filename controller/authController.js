// controller/authController.js
const { login } = require('../service/authService');

function loginController(req, res) {
  const { username, password } = req.body;
  const result = login(username, password);
  if (result.success) {
    return res.status(200).json({ message: 'Login realizado com sucesso', user: result.user });
  }
  return res.status(401).json({ message: result.message });
}

module.exports = { loginController };
