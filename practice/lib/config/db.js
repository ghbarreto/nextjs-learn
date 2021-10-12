const { mongoURI } = require('./keys');
const { MongoClient } = require('mongodb');

async function _mongo() {
  const client = new MongoClient(mongoURI);
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
module.exports = _mongo();
