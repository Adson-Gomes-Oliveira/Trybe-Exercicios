import React, { Component } from 'react';
import Headline from './components/Headline';
import PokemonCard from './components/PokemonCard';
import pokemons from './data/DataPokemons';
import './App.css';
import TopButtons from './components/TopButtons';
import SearchArea from './components/SearchArea';

class App extends Component {

  constructor() {
    super()

    this.handleClickType = this.handleClickType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);

    this.state = {
      pokemonType: "Alakazam",
      inputValue: "",
      filterArgument: "name",
    }
  }

  handleClickType(pokemonType) {
    this.setState({ filterArgument: 'type' })
    this.setState({ pokemonType })
  } 

  handleClickSearch(pokemonType) {
    const newType = this.state.inputValue;
    this.setState({ filterArgument: 'name' })
    this.setState({ pokemonType: newType })
  }

  handleChange(inputValue) {
    this.setState({ inputValue })
  }
  
  render(){

    const { pokemonType, filterArgument } = this.state;

    let pokedex = pokemons.filter((poke) => poke[filterArgument].includes(pokemonType))
    .map((poke) => <PokemonCard key={poke.id} named={poke.name} image={poke.image} type={poke.type} weight={poke.averageWeight} />
    )

    return(
      <>
        <header>
          <Headline type="title" text="Pokedex" addClass=" " />
          <Headline type="subtitle" text="Pokemon Center" />
        </header>
        <main>
          <section>
          <div className="divisor"></div>
          <TopButtons handler={this.handleClickType} />
          <SearchArea handleInput={this.handleChange} handleButton={this.handleClickSearch} />
          <ul className="filter-box">
            <Headline type="subtitle3" text="Filtrar Pesquisa:" />
            <div>
             <li>NOME</li>
             <li>TIPO</li>
             <li>PESO</li>
            </div>
          </ul>
          
            

            <ul>
              {pokedex}
            </ul>
          </section>
        </main>
      </>
    );
  }
}

export default App;
