const errorMiddleware = (err, _req, res, _next) => {
  if (err.status && err.code) {
    return res.status(err.status).json({ error: err.message, code: err.code });
  }

  return res.status(404).json({ message: 'Bad Request' })
}

module.exports = {
  errorMiddleware
};
