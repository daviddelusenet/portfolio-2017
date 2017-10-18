import React      from 'react';
import PropTypes  from 'prop-types';
import './List.scss';

const List = (props) => {
  const ListItems = props.items.map((item, index) => {
    if (item.url) {
      return <li styleName="List__item" key={index}><a styleName="List__item__link" href={item.url} target="_blank">{item.text}</a></li>;
    } else {
      return <li styleName="List__item" key={index}>{item.text}</li>;
    }
  });

  return(
    <ul styleName="List">
      {ListItems}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
