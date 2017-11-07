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
        <h1 styleName="DemographicInformation__title">{this.props.title}</h1>
        <h2 styleName="DemographicInformation__subtitle">{this.props.occupation}</h2>
        <div styleName="DemographicInformation__inner">
          <ul styleName="DemographicInformation__list">
            {DemographicInformationInfoContent}
          </ul>
          <figure styleName="DemographicInformation__avatar">
            <img styleName="DemographicInformation__avatar__image" src={this.props.avatar} />
          </figure>
        </div>
      </div>
    );
  }

}

DemographicInformation.propTypes = {
};

export default DemographicInformation;
