const user = {
  username: 'adson',
  password: '123456'
}

const TOKEN_AUTH = 'as52duh475h1fd5ss'

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  if (token !== TOKEN_AUTH) {
    return res.status(401).json({ message: 'Access Denied' });
  }
  if (!(username || password)) {
    return res.status(401).json({ message: 'Access Denied' });
  }
  if (username !== user.username
    || password !== user.password) {
      return res.status(401).json({ message: 'Access Denied' });
    }
  
  next();
}

module.exports = {
  authMiddleware,
}
