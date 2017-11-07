import React      from 'react';
import PropTypes  from 'prop-types';
import './Subtitle.scss';

const Subtitle = (props) => {
  return(
    <p styleName="Subtitle"><span styleName="Subtitle__date">{props.date}</span> {props.text}</p>
  );
};

Subtitle.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Subtitle;
