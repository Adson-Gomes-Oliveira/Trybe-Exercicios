import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveHero } from '../actions/saveHero';
import { Link } from 'react-router-dom';

class Home extends Component {
 
  constructor () {
    super();
    this.state = {
      inputValue: '',
    }
  }
  
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputValue: value });
  }

  handleClick = () => {
    const { inputValue } = this.state;
    const { saveHero } = this.props;

    saveHero(inputValue);
  }

  handleClickPush
  
  render() {
    const { inputValue } = this.state;
    return (
      <section className="home-page">
        <h1>Heroespedia</h1>
        <input 
         type='text' 
         onChange={this.handleChange}
         value={inputValue}
        />
        <button 
         type="button"
         onClick={this.handleClick}
        >
        Salvar como favorito
        </button>
        <Link to="/favoriteheroes">
          <button 
          type="button"
          >
          Ir para página de favoritos
          </button>
        </Link>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveHero: (hero) => dispatch(saveHero(hero)),
});

export default connect(null, mapDispatchToProps)(Home);
