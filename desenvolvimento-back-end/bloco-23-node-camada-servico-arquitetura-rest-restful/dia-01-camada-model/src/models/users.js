const connection = require('./connection');

const getUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
}

module.exports = { 
  getUsers
};
