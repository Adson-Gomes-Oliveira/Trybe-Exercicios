import React from 'react';
import './App.css';
import ShowText from './ShowText';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      textP: 'Nada',
      inputBox: '',
      textToSend: 'Nenhum nome existe',
    }
  }

  clickC = (event) => {
    const { value } = event.target;
    const { inputBox } = this.state;
    this.setState({textP: value});
    this.setState({textToSend: inputBox});
  }

  changeS = (event) => {
    const { value } = event.target;
    this.setState({inputBox: value});
  }

  render() {
    const { textP, inputBox, textToSend } = this.state;
    return (
      <>
        <h1>App de Teste</h1>
        <form>
          <label>
            Nome
            <input type="text" onChange={this.changeS} value={inputBox} />
          </label>
          <label>
            email
            <input type="email" value="pad@pad.com" />
          </label>
          <label>
            <button
            type="button"
            data-testid="button-send"
            value="enviar"
            onClick={this.clickC}
            >
            Enviar 
            </button>
          </label>
          <label>
            <button 
            type="button" 
            data-testid="button-back" 
            value="voltar"
            onClick={this.clickC}
            > 
            Voltar 
            </button>
          </label>
        </form>
        <p data-testid="render">{textP}</p>
        <ShowText textReceived={textToSend} />
      </>
    );
  }
}

export default App;
