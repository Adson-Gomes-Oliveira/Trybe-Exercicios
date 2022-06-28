const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', (_req, res) => res.status(200).json(recipes));
app.get('/drinks', (_req, res) => res.status(200).json(drinks));
app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const queryRecipe = recipes.filter((rec) => (
    rec.name.toLowerCase().includes(name.toLowerCase())
    && rec.price < Number(maxPrice)
    && rec.price >=Number(minPrice)
  ));

  if (queryRecipe.length === 0) return res.status(404).json({ message: 'No results' });

  res.status(200).json(queryRecipe);
})
app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const queryDrinks = drinks.filter((dri) => dri.name.toLowerCase().includes(name.toLowerCase()));

  if (queryDrinks.length === 0) return res.status(404).json({ message: 'No results' });

  res.status(200).json(queryDrinks);
})
app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((rec) => rec.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  res.status(200).json(recipe);
});
app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((dri) => dri.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found' });

  res.status(200).json(drink);
});

app.listen(3002, () => console.log('Aplicação ouvindo na porta 3001'));
