const { app } = require('../app');
const request = require('supertest');

it('should response ok from health-check route', async () => {
  const response = await request(app).get('/health-check').send().expect(200);
  expect(response.body).toEqual({ status: 'ok' });
});

it('should return pokemons', async () => {
  const response = await request(app).get('/authors').send().expect(200);
  expect(response.body).toBeDefined();
});
