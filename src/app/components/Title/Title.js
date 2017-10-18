import React      from 'react';
import PropTypes  from 'prop-types';
import './Title.scss';

const Title = (props) => {
  return(
    <p styleName="Title">{props.text}</p>
  );
};

Title.propTypes = {
  text: PropTypes.string
};

export default Title;
