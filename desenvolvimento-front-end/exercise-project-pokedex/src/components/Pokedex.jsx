import React from 'react';
import './styles/Pokedex.css'

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <section className='section-pokedex'>
         <div className='pokemonCard'>

         </div>
         <ul className='list-of-pokemons'>
            {pokemonList}
         </ul>
      </section>
    )
  }
}

export default Pokedex;
