const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')(require('./knexfile.js')['development'])

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// News
app.get('/news', async (req, res) => {
  const response = await knex('news')
  res.send(response);
});

app.post('/news',  async (req, res) => {
  const response = await knex('news').insert(req.body.data);
  res.send(response);
});

// Authors
app.get('/authors', async (req, res) => {
  const response = await knex('authors')
    .select('*');
  res.send(response);
});

app.post('/authors', async (req, res) => {
  const response = await knex('authors').insert(req.body.data);
  res.send(response);
});

// Cat
app.get('/cat', async (req, res) => {
  const response = await knex('cat')
    .select('*');
  res.send(response);
});

app.post('/cat', async (req, res) => {
  const response = await knex('cat').insert(req.body.data);
  res.send(response);
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
