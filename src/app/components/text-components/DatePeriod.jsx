import React, { Component } from 'react';
import UTCDateValidator from '../../lib/UTCDateValidator.js'
import dateFormatter from '../../lib/dateFormatter.js';
import { Texts } from '../../Constants.js';

export default class DatePeriod extends Component {
  render() {
    return (
      <div className="text--DatePeriod">
        <div className="text--DatePeriod-name">{Texts.datePeriod}</div>
        <div className="text--DatePeriod-dateFrom">{dateFormatter(this.props.dateFrom)}</div>
        <div className="text--DatePeriod-separator">{Texts.dateSeparator}</div>
        <div className="text--DatePeriod-dateTo">{dateFormatter(this.props.dateTo)}</div>
      </div>
    );
  }
}

DatePeriod.propTypes = {
  dateFrom: UTCDateValidator.isRequired,
  dateTo: UTCDateValidator.isRequired
};
