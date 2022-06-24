const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const heroes = [
  {
    id: 1,
    name: 'Homelander',
    main_power: 'Invencible',
    employee: 'Vought'
  },
  {
    id: 2,
    name: 'Star Light',
    main_power: 'Light Power',
    employee: 'Vought'
  },
  {
    id: 3,
    name: 'Hughie',
    main_power: 'Teleportation',
    employee: 'The Boys'
  },
]

app.get('/heroes', (_req, res) => res.status(200).json(heroes));
app.get('/heroes/q', (req, res) => {
  const { name, employee } = req.query;
  const heroesFiltered = heroes.filter((hero) => (
    hero.name === name
    && hero.employee === employee
  ))

  if (heroesFiltered.length === 0) return res.status(404).json({ message: 'Hero not found!' });

  res.status(200).json(heroesFiltered);
})
app.get('/heroes/:id', (req, res) => {
  const { id } = req.params;
  const hero = heroes.find((hero) => hero.id === Number(id));

  if (!hero) return res.status(404).json({ message: 'Hero not found!' });

  res. status(200).json(hero);
});
app.post('/heroes', (req, res) => {
  const { id, name, main_power, employee } = req.body;

  heroes.push({ id, name, main_power, employee });
  heroes.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  res.status(201).json({ message: 'Hero added successfully!' })
})
app.put('/heroes/:id', (req, res) => {
  const { id } = req.params;
  const { name, main_power, employee } = req.body;

  const heroIndex = heroes.findIndex((hero) => hero.id === Number(id));

  if (heroIndex === -1) return res.status(404).json({ message: 'Hero not found!' });

  heroes[heroIndex] = { ...heroes[heroIndex], name, main_power, employee };
  heroes.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  res.status(204).end();
})
app.delete('/heroes/:id', (req, res) => {
  const { id } = req.params;
  const heroIndex = heroes.findIndex((hero) => hero.id === Number(id));

  if (heroIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  heroes.splice(heroIndex, 1);
  heroes.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  res.status(204).end();
})

app.all('*', (req, res) => {
  return res.status(404).json({ message: `The Route [ ${req.path} ] doesn't exists` })
})

app.listen(3000, () => console.log('Escutando 3000'));
