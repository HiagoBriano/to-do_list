import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import consultUserByEmail from '../models/consultUserByEmail';
import createUser from '../models/createUser';
import app from '../index'

chai.use(chaiHttp);

const { expect } = require('chai');
const date = new Date('2022-06-30T17:37:03.677Z');

const RESPONSE_CREATE = {
  id: 40,
  name: 'Renata Wiltshire',
  email: 'renata@email.com',
  createIn: date,
}

const SEND_CREATE = {
  name: 'Renata Wiltshire',
  email: 'renata@email.com',
  password: '123456',
}

describe('Creating a new user', () => {
  before(() => {
    sinon.stub(consultUserByEmail, 'consultUserByEmail').resolves(undefined);
    sinon.stub(createUser, 'createUser').resolves(RESPONSE_CREATE);
  });

  after(() => {
    sinon.restore();
  });

  it('Submitting the correct information', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/user')
      .send(SEND_CREATE);

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
      .request(app)
      .post('/user')
      .send({
        email: 'renata@email.com',
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
      .request(app)
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
      .request(app)
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
