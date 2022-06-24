const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const shinobis = [
  {
    id: 1,
    name: 'Uzumaki Naruto',
    type: 'Fuuton',
    level_id: 5,
    village_id: 1
  },
  {
    id: 2,
    name: 'Darui',
    type: 'Raiton',
    level_id: 5,
    village_id: 3
  }
];
const villages = [
  {
    id: 1,
    name: 'konohagakure'
  },
  {
    id: 2,
    name: 'iwagakure'
  },
  {
    id: 3,
    name: 'kumogakure'
  },
  {
    id: 4,
    name: 'kirihagakure'
  },
  {
    id: 5,
    name: 'sunahagakure'
  },
];
const levels = [
  {
    id: 1,
    name: 'Gennin'
  },
  {
    id: 2,
    name: 'Chunnin'
  },
  {
    id: 3,
    name: 'Jounnin'
  },
  {
    id: 4,
    name: 'Ambu'
  },
  {
    id: 5,
    name: 'Kage'
  }
];

app.get('/', (_req, res) => res.status(200).send('Bem vindo a API ninja, veja os ninjas em [ /shinobis ]'))
app.get('/shinobis', (_req, res) => res.status(200).json(shinobis));
app.get('/shinobis/q', (req, res) => {
  const { name } = req.query;

  const shinobisFiltered = shinobis.filter((shi) => (shi.name.toLowerCase().includes(name.toLowerCase())));

  if (shinobisFiltered.length === 0) return res.status(404).json({ message: 'No results' });

  res.status(200).json(shinobisFiltered);
});
app.get('/shinobis/:id', (req, res) => {
  const { id } = req.params;

  const shinobiFound = shinobis.find((shi) => shi.id === Number(id));

  if (!shinobiFound) return res.status(404).json({ message: 'Shinobi not found!' });

  res.status(200).json(shinobiFound);
});
app.get('/villages', (_req, res) => res.status(200).json(villages));
app.get('/levels', (_req, res) => res.status(200).json(levels));

app.post('/shinobis', (req, res) => {
  const { id, name, type, level_id, village_id } = req.body;
  shinobis.push({ id, name, type, level_id, village_id });
  shinobis.sort((a, b) => a.id - b.id);

  res.status(201).json({ message: 'Shinobi successfully added!' });
});
app.put('/shinobis/:id', (req, res) => {
  const { id } = req.params;
  const { name, type, level_id, village_id } = req.body;

  const shinobiIndex = shinobis.findIndex((shi) => shi.id === Number(id));

  if (shinobiIndex === -1) return res.status(404).json({ message: 'Result not found!' });
  
  shinobis[shinobiIndex] = {...shinobis[shinobiIndex], name, type, level_id, village_id};
  shinobis.sort((a, b) => a.id - b.id);

  res.status(201).end();
});
app.delete('/shinobis/:id', (req, res) => {
  const { id } = req.params;

  const shinobiIndex = shinobis.findIndex((shi) => shi.id === Number(id));

  if (shinobiIndex === -1) return res.status(404).json({ message: 'Result not found!' });

  shinobis.splice(shinobiIndex, 1);
  shinobis.sort((a, b) => a.id - b.id);

  res.status(204).end();
})
app.all('*', (req, res) => {
  return res.status(404).json({ message: `The Route [ ${req.path} ] doesn't exists` });
})

app.listen(3005, () => console.log('Hearing port 3005'));
