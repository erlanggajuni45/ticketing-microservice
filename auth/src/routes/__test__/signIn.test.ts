import request from 'supertest';
import app from '../../app';

it('fails when emails does not exist', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({ email: 'dasdas@fsafa.com', password: '1234' })
    .expect(400);
});

it('fails when password is incorrect', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'test' })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: '1234' })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'test' })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: 'test' })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
