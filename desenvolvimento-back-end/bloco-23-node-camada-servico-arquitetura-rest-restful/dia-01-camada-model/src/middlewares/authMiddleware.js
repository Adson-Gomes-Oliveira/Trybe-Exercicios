const users = require('../models/users');

const authMiddleware = async (req, _res, next) => {
  const { username, password, token } = req.headers;
  const validUsers = await users.getUsers();

  const findUser = validUsers.find((user) => (
    user.username === username
    && user.password === password
    && user.token === token
    ));
  
  if (!findUser || findUser === undefined) return next({ message: 'Invalid User!', status: 401, code: 401});

  next();
}

module.exports = {
  authMiddleware
};
