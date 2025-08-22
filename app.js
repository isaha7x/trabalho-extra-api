// app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { loginController } = require('./controller/authController');

const app = express();
app.use(express.json());

// Rota de login
app.post('/login', loginController);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
