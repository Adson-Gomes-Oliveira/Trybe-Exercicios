import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {
  render(){
    const { type, text, addClass } = this.props
    const presetOption = type.toLowerCase();
    const preset = {
      title: <h1 className={`title ${addClass}`}>{text}</h1>,
      subtitle: <h2 className={`subtitle ${addClass}`}>{text}</h2>,
      subtitle3: <h3 className={`subtitle3 ${addClass}`}>{text}</h3>,
      pg: <p className={`paragraph ${addClass}`}>{text}</p>
    };
    return <>{preset[presetOption]}</>
  }
}

Headline.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Headline;
