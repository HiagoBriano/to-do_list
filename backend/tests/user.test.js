const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = require('chai');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Creating a new user', () => {
  before(async () => {
    sinon.stub(prisma.user, 'create').resolves([
      {
        id: 9,
        name: 'Brett Wiltshire',
        email: 'brett2@email.com',
        createIn: '2022-06-30T17:37:03.677Z',
      },
    ]);
  });

  // after(() => {
  //   prisma.user.findUnique.restore();
  // });

  it('Submitting the correct information', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/user')
      .send({
        name: 'Brett Wiltshire',
        email: 'brett2@email.com',
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(201);
    expect(chaiHttpResponse.body).to.have.property('id');
    expect(chaiHttpResponse.body).to.have.property('name');
    expect(chaiHttpResponse.body).to.have.property('email');
    expect(chaiHttpResponse.body).to.have.property('createIn');
    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
  });

  it('without the information sending the name', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/user')
      .send({
        email: 'brett2@email.com',
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('id');
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('createIn');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the name is mandatory'
    );
  });

  it('without the information sending the email', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/user')
      .send({
        name: 'Brett Wiltshire',
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('id');
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('createIn');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the email is mandatory'
    );
  });

  it('without the information sending the password', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/user')
      .send({
        name: 'Brett Wiltshire',
        email: 'brett2@email.com',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('id');
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('createIn');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the password is mandatory'
    );
  });
});
