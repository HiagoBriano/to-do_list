import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import createTask from '../models/createTask';
import app from '../index'
import { createToken } from '../services/safety'

chai.use(chaiHttp);
const { expect } = require('chai');
const date = new Date('2022-06-30T17:37:03.677Z');

const RESPONSE_CREATE = {
  id: 11,
  task: 'hello word',
  status: 'in progress',
  authorId: 8,
  createIn: date,
  updatedAt: date,
}

let token: string;

describe('creating new task', () => {
  before(async () => {
    token = createToken(11, 'test@test.com');
    sinon.stub(createTask, 'createTask').resolves(RESPONSE_CREATE);
  });

  after(() => {
    sinon.restore();
  });

  it('Submitting the correct information', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/task')
      .set({ authorization: token })
      .send({
        task: 'hello word',
        status: 'in progress',
      });
    
    expect(chaiHttpResponse.status).to.be.eq(201);
    expect(chaiHttpResponse.body.message).to.be.eq('created task');
  });

  it('without the information sending the task', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/task')
      .set({ authorization: token })
      .send({
        status: 'in progress',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the task is mandatory'
    );
  });

  it('without the information sending the status', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/task')
      .set({ authorization: token })
      .send({
        task: 'hello word',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the status is mandatory'
    );
  });

  it('sending wrong status', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/task')
      .set({ authorization: token })
      .send({
        task: 'hello word',
        status: 'concluido',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq(
      'invalid status, try done, in progress or pending'
    );
  });

  it('sending invalid token', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/task')
      .set({ authorization: 'token' })
      .send({
        task: 'hello word',
        status: 'done',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Invalid Token'
    );
  });

  it('without sending token', async () => {
    const chaiHttpResponse = await chai
      .request(app)
      .post('/task')
      .send({
        task: 'hello word',
        status: 'done',
      });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq(
      'Sending the token is mandatory'
    );
  });
});
