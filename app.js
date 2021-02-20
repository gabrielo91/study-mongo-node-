const express = require('express');
const { callApi } = require('./call-api');
const { Author } = require('./models/author');

const app = express();
app.use(express.json());

app.get('/health-check', (req, res) => {
  return res.send({ status: 'ok' });
});

app.get('/authors', async (req, res) => {
  const result = await callApi(
    'https://jsonmock.hackerrank.com/api/article_users?page=1'
  );
  return res.send(result);
});

app.get('/v1/authors', async (req, res) => {
  const authors = await Author.find();
  return res.send(authors);
});

app.get('/v1/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.find({ id });
  return res.send(author);
});

app.post('/v1/authors', async (req, res) => {
  const author = new Author(req.body);

  try {
    await author.save();
    return res.send(author);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { app };
