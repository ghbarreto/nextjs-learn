const express = require('express');
const next = require('next');
const PORT = 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();
const { _mongo } = require('./lib/config/db');

// db.db('sample_mflix').collection('comments').findOne({});
_mongo;
app.prepare().then(() => {
  const server = express();
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
