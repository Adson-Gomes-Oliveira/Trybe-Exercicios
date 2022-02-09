import React, { Component } from 'react';

class ShowText extends Component {
  render() {
    const { textReceived } = this.props;
    return <h2>{textReceived}</h2>
  }
}

export default ShowText;
