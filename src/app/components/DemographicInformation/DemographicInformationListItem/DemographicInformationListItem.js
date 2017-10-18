import React      from 'react';
import PropTypes  from 'prop-types';
import './DemographicInformationListItem.scss';

const DemographicInformationListItem = (props) => {
  return(
    <div styleName="DemographicInformationListItem">
      <p styleName="DemographicInformationListItem__label">{props.label}</p>
      <p styleName="DemographicInformationListItem__value">
        {props.url ? (
          <a styleName="DemographicInformationListItem__link" href={props.url} target="_blank">{props.value}</a>
        ) : (props.value)}
      </p>
    </div>
  );
};

DemographicInformationListItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  url: PropTypes.string
};

export default DemographicInformationListItem;
