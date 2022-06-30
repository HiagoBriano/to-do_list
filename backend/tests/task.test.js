const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = require('chai');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJicmV0dEBlbWFpbC5jb20iLCJpYXQiOjE2NTY2MTUzNzIsImV4cCI6MTY1NjcwMTc3Mn0.ZTqzuvup56lN3jPa883FEeo4lpBNe1DCGlqJ8MSwPF0';

describe('creating new task', () => {
  before(async () => {
    sinon.stub(prisma.task, 'create').resolves([
      {
        id: 11,
        task: 'hello word',
        status: 'in progress',
        authorId: 8,
        createIn: '2022-06-30T19:01:51.444Z',
        updatedAt: '2022-06-30T19:01:51.445Z',
      },
    ]);
  });

  // after(() => {
  //   prisma.user.findUnique.restore();
  // });

  it('Submitting the correct information', async () => {
    const chaiHttpResponse = await chai
      .request('http://localhost:3001')
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
      .request('http://localhost:3001')
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
      .request('http://localhost:3001')
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
      .request('http://localhost:3001')
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
      .request('http://localhost:3001')
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
      .request('http://localhost:3001')
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
