import React, { Component } from 'react';
import Headline from './components/Headline';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import LoadPage from './components/LoadPage';

const DECIMETER_MULTIPLIER = 10;
const HECTOGRAMS_MULTIPLIER = 100;
const KILOGRAMS_DIVISOR = 100;
const POKEMONS_PAGE_LIMIT = 19;

class App extends Component {

  constructor() {
    super()

    this.state = {
      searchBox: '',
      pokemonsList: [],
    };
  }

  fetchPokemon = async (pokemonName) => {
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
    console.log('addpoke');
    this.setState(() => ({
      pokemonsList: [...this.state.pokemonsList, pokemonProfile],
    }))
  }

  fetchAllPokemons = async () => {
    const requestAllPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const allPokemonsObjectRequest = await requestAllPokemons.json();
    const pokemonsObjectList = await allPokemonsObjectRequest.results;
    await pokemonsObjectList.forEach((poke) => {
      const { name } = poke;
      this.fetchPokemon(name);
    })
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    console.log(value);
    this.setState = ({ searchBox: value }, this.fetchPokemon(value))
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.fetchAllPokemons();
  }
  
  shouldComponentUpdate() {
    const { pokemonsList } = this.state;
    const listDone = pokemonsList.length === POKEMONS_PAGE_LIMIT ? true : false;
    console.log(`Retorno será: ${listDone} - O tamanho da lista é ${pokemonsList.length}`);
    return listDone;
  }
  
  render () {
    console.log('render');
    const { pokemonsList, searchBox } = this.state;
    const renderPokemons = pokemonsList.map((pokemon) => {
    <Sidebar handleInputChange={ this.handleInputChange } searchBox={ searchBox } />

      return (
        <li key={pokemon.id}>
          <Headline type="subtitle3" text={pokemon.name} />
          <img src={pokemon.image} alt={pokemon.name} />
          <div className='status'>
            <div className='first-status'>
              <Headline type="pg" text={`Altura: ${pokemon.height}cm`} /> 
              <Headline type="pg" text={`Peso: ${pokemon.height}kg`} /> 
              <Headline type="pg" text={`Tipos: ${pokemon.types}`} />
            </div>
            <Headline type="subtitle3" text='Status' addClass="status-title" />
            <div className='second-status'>
              <Headline type="pg" text={`Attack: ${pokemon.stats.attack} Points`}  />
              <Headline type="pg" text={`Defense: ${pokemon.stats.defense} Points`}  />
              <Headline type="pg" text={`Special Attack: ${pokemon.stats.special_attack} Points`}  />
              <Headline type="pg" text={`Special Defense: ${pokemon.stats.special_defense} Points`}  />
              <Headline type="pg" text={`HP: ${pokemon.stats.speed} Points`}  />
            </div>
          </div>
        </li>
      )
    });

    return (
      <>
        <Header />
        <main>
           {pokemonsList.length === 0 ? <LoadPage /> : <Pokedex pokemonList={renderPokemons} />}
           <Sidebar />
        </main>
      </>
    );
  }
}

export default App;
