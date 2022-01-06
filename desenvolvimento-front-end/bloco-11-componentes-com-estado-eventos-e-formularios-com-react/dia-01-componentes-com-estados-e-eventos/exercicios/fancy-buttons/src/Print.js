import React, { Component } from 'react';

class Print extends Component {
  render() {
    const { text } = this.props
    return <p>{text}</p>;
  }
}

export default Print