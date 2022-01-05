import React, { Component } from 'react';
import Back from './Back';
import PropTypes from 'prop-types';

class Calculadora extends Component {
  render() {
    const { op, number1, number2, repeat } = this.props;
    const result = <Back operation={op} number1={number1} number2={number2} />
    return (
      <>
        <h3>Calculadora Props React || Operação: {repeat}</h3>
        <p>O numero {number1} quando operado {op} ao numero {number2}, retorna: {result}</p>
      </>
    )
  }
}

Calculadora.propTypes = {
  number1: PropTypes.number.isRequired,
  op: PropTypes.string.isRequired,
  number2: PropTypes.number.isRequired,
}

Calculadora.defaultProps = {
  op: "multiplicação",
}

export default Calculadora;