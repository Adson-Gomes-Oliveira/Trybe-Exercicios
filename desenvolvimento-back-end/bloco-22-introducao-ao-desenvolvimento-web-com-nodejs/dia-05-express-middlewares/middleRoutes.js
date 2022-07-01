const express = require('express');
const router = express.Router();

const avengers = ['Iron-Men', 'Thor', 'Hulk', 'Black-Widow', 'Hawk-Eye', 'Captain-America'];

router.get('/', (_req, res) => {
  res.send(avengers)
});

router.post('/', (req, res) => {
  const { avenger } = req.body;

  if (!avenger) return res.status(404).send('Failure: No Hero to ADD!')

  avengers.push(avenger);

  res.send(avengers);
});

module.exports = router;
