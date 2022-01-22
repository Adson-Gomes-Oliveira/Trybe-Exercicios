const DECIMETER_MULTIPLIER = 10;
const HECTOGRAMS_MULTIPLIER = 100;
const KILOGRAMS_DIVISOR = 100;


const fetchPokemon = async (pokemonName) => {
  const requestPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const requestPokemonObject = await requestPokemon.json();
  const { name, sprites: { front_default }, height, weight, stats, types, id } = await requestPokemonObject;
  const pokemonProfile = {
    id: id,
    name: name,
    image: front_default,
    height: height * DECIMETER_MULTIPLIER, 
    weight: (HECTOGRAMS_MULTIPLIER * weight) / KILOGRAMS_DIVISOR,
    types: types.map((type) => type.type.name),
    stats: {
      hp: stats.find((stat) => stat.stat.name === 'hp').base_stat,
      attack: stats.find((stat) => stat.stat.name === 'attack').base_stat,
      defense: stats.find((stat) => stat.stat.name === 'defense').base_stat,
      special_attack: stats.find((stat) => stat.stat.name === 'special-attack').base_stat,
      special_defense: stats.find((stat) => stat.stat.name === 'special-defense').base_stat,
      speed: stats.find((stat) => stat.stat.name === 'speed').base_stat,
    },
  }
  return pokemonProfile;
}

export const fetchAllPokemons = async () => {
  const requestAllPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const allPokemonsObjectRequest = await requestAllPokemons.json();
  const pokemonsObjectList = await allPokemonsObjectRequest.results;
  await pokemonsObjectList.forEach((poke) => {
    const { name } = poke;
    fetchPokemon(name);
  })
}