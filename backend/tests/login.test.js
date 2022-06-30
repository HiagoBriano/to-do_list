const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = require('chai');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Making a request on the login page', () => {
  beforeEach(async () => {
    sinon.stub(prisma.user, 'findUnique').resolves([
      {
        id: 8,
        name: 'Brett Wiltshire',
        email: 'brett@email.com',
        password:
          '$2a$04$6viIOEBjczjw7gbTT3pPKe0yPYWzbs7.LyCbzVVnbT5VVP8q26AvW',
      },
    ]);
  });

  // afterEach(() => {
  //   prisma.user.findUnique().restore();
  // });

  it("checks if it is returning the user's token, name and e-mail, and if it doesn't return the review", async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/login')
      .send({
        email: 'brett@email.com',
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.have.property('name');
    expect(chaiHttpResponse.body).to.have.property('email');
    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
  });

  it('without sending the email', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/login')
      .send({
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
  });

  it('without sending the password', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/login')
      .send({
        email: 'brett@email.com',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
  });

  it('without sending email and password', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
      .post('/login')
      .send({});

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
  });
});
