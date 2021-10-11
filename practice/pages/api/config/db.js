const { mongoURI } = require('./keys');
const { MongoClient } = require('mongodb');

const client = new MongoClient(mongoURI);

const run = async () => {
  try {
    await client.connect();

    await client.db('admin').command({ ping: 1 });
    console.log('connected');
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

module.exports = {
  run,
};
