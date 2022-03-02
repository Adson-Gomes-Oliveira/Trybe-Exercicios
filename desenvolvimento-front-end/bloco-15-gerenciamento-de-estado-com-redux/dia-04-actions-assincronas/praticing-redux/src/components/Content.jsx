import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import FavoriteHeroes from '../pages/FavoriteHeroes';

class Content extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/favoriteheroes' component={ FavoriteHeroes } />
      </Switch>
    )
  }
}

export default Content;
