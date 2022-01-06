import React, { Component } from 'react';
import Print from './Print';

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      mensagem: "",
    }
  }

  handleClick(event) {
    const text = {
      PT: "Quando cortaram os meus braços eu chutei...",
      EN: "When they cut my legs I headbutted...",
      JP: "彼らが私の頭を切り落としたとき、私は頸静脈を噛み、何も手放さなかった...",
    }
    console.log(this);
    console.log(text[event.target.value]);
    this.setState((estadoAnterior, _props) => ({
      mensagem: estadoAnterior.mensagem = text[event.target.value],
    }))
  };

  render() {
    return(
      <>
        <button onClick={this.handleClick} value={"PT"}>Imprimir Texto PT</button>
        <button onClick={this.handleClick} value={"EN"}>Imprimir Texto EN</button>
        <button onClick={this.handleClick} value={"JP"}>Imprimir Texto JP</button>
        <Print text={this.state.mensagem} />
      </>
    )
  }
}

export default App;
