import React, { Component } from 'react';
import Headline from './Headline';
import './styles/PokemonCard.css';

class PokemonCard extends Component {
  render() {

    const { named, image, type, weight } = this.props;

    return(

      <li className="card-pokemon">
        <img src={image} alt={`Pokemon - ${named}`}/>
        <div>
          <Headline type="subtitle3" text={named} />
          <p>{type}</p>
          <p>Average Weight: {weight.value}{weight.measurementUnit}</p>
        </div>
      </li>

    )
  }
}

export default PokemonCard;
