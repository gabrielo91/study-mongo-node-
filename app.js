const express = require('express');
const { callApi } = require('./call-api');
const app = express();

app.get('/health-check', (req, res) => {
  return res.send({ status: 'ok' });
});

app.get('/pokemon', async (req, res) => {
  const result = await callApi('https://pokeapi.co/api/v2/pokemon');
  return res.send(result);
});

module.exports = { app };
