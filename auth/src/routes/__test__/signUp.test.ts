import request from 'supertest';
import app from '../../app';

it('returns a 201 on successful sign up', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '1234' })
    .expect(201);
});

it('returns a 400 with an invalid email sign up', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test', password: '1234' })
    .expect(400);
});

it('returns a 400 with an invalid password sign up', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '12' })
    .expect(400);
});

it('returns a 400 with missing email and password sign up', async () => {
  return request(app).post('/api/users/signup').send({}).expect(400);
});

it('disallows email duplicates sign up', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '1234' })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '1234' })
    .expect(400);
});

it('set cookies after successful sign up', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '1234' })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
