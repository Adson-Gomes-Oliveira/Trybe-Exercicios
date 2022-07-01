const actor = [
  {
    id: 1,
    name: 'Hugh Michael Jackman',
    age: 53,
    last_movie: 'Logan' 
  },
  {
    id: 2,
    name: 'Chris Hemsworth',
    age: 38,
    last_movie: 'Avengers: ENDGAME'
  }
];

const getAll = (_req, res, _next) => res.status(200).json(actor);
const getSearch = (req, res, next) => {
  const { name } = req.query;

  if (!name) return next();

  const findAllActors = actor.filter((act) => act.name.toLowerCase().includes(name.toLowerCase()));
  if (findAllActors.length === 0) return next({ message: 'No actors found', code: 404, status: 404});

  res.status(200).json(findAllActors);
};
const getById = (req, res, next) => {
  const { id } = req.params;

  const findActor = actor.find((act) => act.id === Number(id));
  if (!findActor) return next({ message: 'Actor not found', status: 404, code: 404});

  res.status(200).json(findActor);
};
const addActor = (req, res, next) => {
  const { name, age, last_movie } = req.body;
  const id = (actor.length + 1);

  if (!name || !age || !last_movie) return next({ message: 'Bad Request', status: 404, code: 404});
  actor.push({ id, name, age, last_movie });

  res.status(201).json(actor);
};
const editActor = (req, res, next) => {
  const { name, age, last_movie } = req.body;
  const { id } = req.params;

  const actorIndex = actor.findIndex((act) => act.id === Number(id));
  if (actorIndex === -1) return next({ message: 'Actor not found to edit', status: 404, code: 404});

  actor[actorIndex] = { ...actor[actorIndex], name, age, last_movie };

  res.status(204).json({ message: 'Successfully Edited', actor_id: `${id}` });
};
const deleteActor = (req, res, next) => {
  const { id } = req.params;

  const actorIndex = actor.findIndex((act) => act.id === Number(id));
  if (actorIndex === -1) return next({ message: 'Actor not found to delete', status: 404, code: 404});

  actor.splice(actorIndex, 1);

  res.status(204).end();
};

module.exports = {
  addActor,
  getById,
  getAll,
  getSearch,
  editActor,
  deleteActor
}
