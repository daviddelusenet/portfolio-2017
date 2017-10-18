import React      from 'react';
import PropTypes  from 'prop-types';
import './Subtitle.scss';

const Subtitle = (props) => {
  return(
    <p styleName="Subtitle">{props.text}</p>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default Subtitle;
