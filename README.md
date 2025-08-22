# API de Login Simples

Esta é uma API REST básica de login, separada em camadas Controller, Service e Model, feita para fins de estudo e testes automatizados.

## Estrutura do Projeto

```
controller/
  authController.js
model/
  userModel.js
service/
  authService.js
app.js
server.js
swagger.json
README.md
```

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:

```bash
npm install express swagger-ui-express
```

## Como rodar

```bash
node server.js
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

- `POST /login` — Realiza login. Exemplo de body:
  ```json
  {
    "username": "admin",
    "password": "123456"
  }
  ```
- `GET /api-docs` — Documentação Swagger da API.

## Testes

Para testar com Supertest, importe o `app.js` no seu arquivo de teste sem rodar o `listen()`.

---

API criada para fins didáticos.
