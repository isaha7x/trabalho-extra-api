
const request = require('supertest');
const sinon = require('sinon');
const app = require('../app');

describe('Auth Controller', () => {
  it('Quando o login é válido o retorno será 200', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: '123456'
      });
    const { expect } = await import('chai');
    expect(resposta.status).to.equal(200);
  });

  it('Quando o usuário não existe, retorna 401 e mensagem adequada', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'naoexiste',
        password: 'qualquer'
      });
    const { expect } = await import('chai');
    expect(resposta.status).to.equal(401);
    expect(resposta.body).to.have.property('message', 'Usuário não encontrado');
  });

  it('Quando a senha está incorreta, retorna 401 e mensagem adequada', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: 'errada'
      });
    const { expect } = await import('chai');
    expect(resposta.status).to.equal(401);
    expect(resposta.body).to.have.property('message', 'Senha incorreta');
  });

  it('Quando o login é válido, retorna mensagem de sucesso', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'user',
        password: 'password'
      });
    const { expect } = await import('chai');
    expect(resposta.body).to.have.property('message', 'Login realizado com sucesso');
    expect(resposta.body).to.have.property('user');
    expect(resposta.body.user).to.have.property('username', 'user');
  });

  it('Quando o body está vazio, retorna 401 e mensagem de usuário não encontrado', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({});
    const { expect } = await import('chai');
    expect(resposta.status).to.equal(401);
    expect(resposta.body).to.have.property('message', 'Usuário não encontrado');
  });
});
