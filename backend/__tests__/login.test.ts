import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../index'
import consultUserByEmail from '../models/consultUserByEmail';

chai.use(chaiHttp);
const { expect } = require('chai');

const RESPONSE_BD = {
  id: 8,
  name: 'Brett Wiltshire',
  email: 'brett@email.com',
  password:
    '$2a$04$6viIOEBjczjw7gbTT3pPKe0yPYWzbs7.LyCbzVVnbT5VVP8q26AvW',
}

describe('Making a request on the login page', () => {
  before(async () => {
    sinon.stub(consultUserByEmail, 'consultUserByEmail').resolves(RESPONSE_BD);
  });

  after(() => {
    sinon.restore();
  });

  it("checks if it is returning the user's token, name and e-mail, and if it doesn't return the review", async () => {
    const chaiHttpResponse = await chai
      .request(app)
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
      .request(app)
      .post('/login')
      .send({
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the email is mandatory'
    );
  });

  it('without sending the password', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'brett@email.com',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the password is mandatory'
    );
  });

  it('without sending email and password', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({});

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the email is mandatory'
    );
  });

  it('invalid password', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'brett@email.com',
        password: '1234567',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq('invalid password');
  });
});


describe('invalid email', () => {
  before(async () => {
    sinon.stub(consultUserByEmail, 'consultUserByEmail').resolves(undefined);
  });

  after(() => {
    sinon.restore();
  });

  it('invalid email', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'brett@xablau.com',
        password: '123456',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.not.have.property('name');
    expect(chaiHttpResponse.body).to.not.have.property('email');
    expect(chaiHttpResponse.body).to.not.have.property('token');
    expect(chaiHttpResponse.body).to.not.have.property('password');
    expect(chaiHttpResponse.body.message).to.be.eq('Unregistered E-mail');
  });
});