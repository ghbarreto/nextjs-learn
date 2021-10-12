const keys = require('./keys');
const mongoose = require('mongoose');

// connection pool
const mflix = {
  dbName: 'sample_mflix',
};

// returns the status of the connected databases
const events = (event, database_name) => {
  event.on('connected', () => {
    console.log(database_name, ' connection created');
  });

  event.on('disconnected', () => {
    console.log(database_name, ' connection disconnected');
  });
};

// creating a connection
const connection = mongoose.createConnection(keys.mongoURI, mflix);

// calling the events function to know whether it connected or not
events(connection, 'mflix-access');

module.exports = {
  _connection: connection,
};
