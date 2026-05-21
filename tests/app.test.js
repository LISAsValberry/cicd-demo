const request = require('supertest');
const app = require('../src/app');

test('health check returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('add endpoint returns correct sum', async () => {
  const res = await request(app).get('/add?a=3&b=5');
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(8);
});

test('sub endpoint returns correct difference', async () => {
  const res = await request(app).get('/sub?a=10&b=3');
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(7);
});