import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteHeroes extends Component {
  render() {
    const { heroesList } = this.props;
    return (
      <ul>
       {heroesList.map((hero) => {
         return (
          <li>{hero}</li>
         )
       })}
      </ul>
    )
  }
}


const mapStateToProps = (state) => ({
  heroesList: state.heroReducer.heroSaved,
})

export default connect(mapStateToProps, null)(FavoriteHeroes);
