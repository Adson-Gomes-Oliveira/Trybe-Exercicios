import React, { Component } from 'react'
import fetchHeroByName from '../services/heroesAPI';
import HeroesContext from './HeroesContext';

 class HeroesProvider extends Component {
  constructor () {
    super();
    this.state = {
      inputHero: '',
      heroSelected: '',
    };
  }

  handleClickHero = async () => {
    const { inputHero } = this.state;
    const heroChoosen = await fetchHeroByName(inputHero);
    console.log(heroChoosen);
    this.setState({heroSelected: heroChoosen});
  }

  handleChangeInput = ({ target }) => {
    const { value } = target;
    console.log(value);
    this.setState({ inputHero: value })
  }

  render() {
    const { children } = this.props;
    const PROVIDER_STATE = {
      ...this.state,
      handleChange: this.handleChangeInput,
      handleClick: this.handleClickHero,
    }
    return (
      <HeroesContext.Provider value={ PROVIDER_STATE }>
        {children}
      </HeroesContext.Provider>
    )
  }
}

export default HeroesProvider;
