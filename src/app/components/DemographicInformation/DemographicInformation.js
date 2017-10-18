import React       from 'react';
import PropTypes   from 'prop-types';
import ClassNames  from 'classnames';
import Styles      from './DemographicInformation.scss';

// Import components
import DemographicInformationListItem from './DemographicInformationListItem/DemographicInformationListItem';

class DemographicInformation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const DemographicInformationInfoContent = this.props.info.map((data, index) => {
      return <DemographicInformationListItem {...data} key={index} />;
    });

    return(
      <div styleName="DemographicInformation">
        <div styleName="DemographicInformation__text">
          <h1 styleName="DemographicInformation__title">{this.props.title}</h1>
          <ul styleName="DemographicInformation__list">
            {DemographicInformationInfoContent}
          </ul>
        </div>
        <figure styleName="DemographicInformation__avatar">
          <img styleName="DemographicInformation__avatar__image" src={this.props.avatar} />
        </figure>
      </div>
    );
  }

}

DemographicInformation.propTypes = {
};

export default DemographicInformation;
