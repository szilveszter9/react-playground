import React, { Component } from 'react';
import UTCDateValidator from '../../lib/UTCDateValidator.js';
import dateFormatter from '../../lib/dateFormatter.js';
import { Texts } from '../../Constants.js';

export default class DateDue extends Component {
  render() {
    return (
      <div className="text--DateDue">
        <div className="text--DateDue-name">{Texts.dueDate}</div>
        <div className="text--DateDue-date">{dateFormatter(this.props.date)}</div>
      </div>
    );
  }
}

DateDue.propTypes = {
  date: UTCDateValidator.isRequired
};
