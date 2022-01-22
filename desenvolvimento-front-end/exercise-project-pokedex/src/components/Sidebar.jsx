import React from 'react';
import Headline from './Headline';
import './styles/Sidebar.css';

class Sidebar extends React.Component {
  render() {
    const { handleInputChange, searchBox } = this.props;
    return (
      <section className='section-side-controller'>
        <Headline type='subtitle' text='POKEDEX CONTROLLER' />
        <input type='text' name='search-pokedex' onChange={ handleInputChange } value={ searchBox } />
        <Headline type='subtitle3' text='Search by Categories:' addClass='title-buttons' />
        <div className='buttons-categories'>
           <button type='button' name='fire-categorie'> Fire </button>
           <button type='button' name='water-categorie'> water </button>
           <button type='button' name='grass-categorie'> grass </button>
           <button type='button' name='poison-categorie'> poison </button>
           <button type='button' name='eletric-categorie'> eletric </button>
           <button type='button' name='bug-categorie'> bug </button>
        </div>

        <Headline type='subtitle3' text='Search by Weight:' addClass='title-buttons' />
        <div className='buttons-weight'>
           <button type='button' name='>50'> More then 50 Kg </button>
           <button type='button' name='<50'> Less then 50 Kg </button>
           <button type='button' name='=50'> Exactly 50 Kg </button>
        </div>

        <Headline type='subtitle3' text='Search by Height:' addClass='title-buttons' />
        <div className='buttons-height'>
           <button type='button' name='>50'> More then 50 Cm </button>
           <button type='button' name='<50'> Less then 50 Cm </button>
           <button type='button' name='=50'> Exactly 50 Cm </button>
        </div>
      </section>
    )
  }
}

export default Sidebar;
