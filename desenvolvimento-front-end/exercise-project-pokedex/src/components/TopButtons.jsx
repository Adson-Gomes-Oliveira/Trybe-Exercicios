import React, { Component } from 'react';

class TopButtons extends Component {
  
  handleClickEvent(event, handler){
    handler(event.target.value);
  }
  
  render(){
    const { handler } = this.props;

    return(
     <div>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="">All</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Eletric">Eletric</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Fire">Fire</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Bug">Bug</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Psychic">Psychic</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Poison">Poison</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Normal">Normal</button>
        <button onClick={(event) => this.handleClickEvent(event, handler)} value="Dragon">Dragon</button>
      </div>
    )
  }
}

export default TopButtons;