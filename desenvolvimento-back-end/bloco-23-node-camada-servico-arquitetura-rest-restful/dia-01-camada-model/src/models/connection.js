const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '@DesertLirium123',
  database: 'model_example'
});

module.exports = connection;
