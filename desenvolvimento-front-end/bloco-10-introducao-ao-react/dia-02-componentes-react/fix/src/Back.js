import React, { Component } from 'react';

class Back extends Component {
  render() {
    const { operation, number1, number2 } = this.props;
    const ops = {
      soma: number1 + number2,
      subtração: number1 - number2,
      multiplicação: number1 * number2,
      divisão: number1 / number2,
    }
    const result = ops[operation]
    return (
      <span>{result}</span>
    )
  }
}

export default Back;