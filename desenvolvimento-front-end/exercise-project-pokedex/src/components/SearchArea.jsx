import React, { Component } from 'react';

class SearchArea extends Component {

  handleInput(event, handleState){
    handleState(event.target.value);
  }

  handleButton(handleState){
    handleState();
  }
  
  handleSubmit(event) {
    event.preventDefault();
  }
  
  render(){

    const { handleInput, handleButton } = this.props;
    console.log(handleInput);
    console.log(handleButton);

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        id="search-box" 
        name="searcher" 
        onChange={(event) => this.handleInput(event, handleInput)} 
        placeholder="  Digite o pokemon que deseja encontrar!  ">
        </input>

        <button type="submit" onClick={(event) => this.handleButton(handleButton)}> Poke Pesquisa </button>
      </form>
    )
  }
}

export default SearchArea;
