import React      from 'react';
import PropTypes  from 'prop-types';
import './Paragraph.scss';

const Paragraph = (props) => {
  return(
    <p styleName="Paragraph">{props.text}</p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string
};

export default Paragraph;
