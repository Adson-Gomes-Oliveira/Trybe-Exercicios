import React from 'react';
import Headline from './Headline';

class Header extends React.Component {
  render() {
    return (
      <header className='main-header'>
        <Headline type='title' text='Pokedex Library' addClass='main-title' />
        <Headline type='subtitle' text='Revolution in the pokemons world!' addClass='main-subtitle' />
      </header>
    )
  }
}

export default Header;
