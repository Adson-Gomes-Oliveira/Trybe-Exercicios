import React, { Component } from 'react'
import HeroesContext from '../context/HeroesContext';

class Home extends Component {
  render() {
    return (
      <section>
        <h1>Escolha um heroi</h1>
        <HeroesContext.Consumer>
          {({ inputHero, handleChange, handleClick }) => (
            <form>
            <label htmlFor="hero">
              <input 
                type="text"
                id="heroe"
                onChange={ handleChange }
                value={inputHero}
              />
            </label>
            <button 
              type="button"
              onClick={ handleClick }
            >
              Procurar
            </button>
            </form>
          )}
        </HeroesContext.Consumer>
      </section>
    )
  }
}

export default Home;
