// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { run } = require('./config/db');

export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

export function connect_to_mongo() {
  const db = run();
  return db;
}
