const users = [
  {
    username: 'zezin',
    password: '123456'
  },
  {
    username: 'julinhaDaMassa',
    password: '65431'
  }
];

const TOKEN_AUTH = 'nevergiveup4005';

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  const { token } = req.headers;
  
  const validUser = users.find((user) => (
    username === user.username
    && password == user.password
  ));

  if (token !== TOKEN_AUTH) return next({ code: 401, message: 'Unauthorized Auth Token' });
  if (!validUser || validUser === undefined) return res.status(401).json({ message: 'Unauthorized' });

  next();
}

module.exports = authMiddleware;
