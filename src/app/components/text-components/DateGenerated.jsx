import React, { Component } from 'react';
import UTCDateValidator from '../../lib/UTCDateValidator.js'
import dateFormatter from '../../lib/dateFormatter.js';
import { Texts } from '../../Constants.js';

export default class DateGenerated extends Component {
  render() {
    return (
      <div className="text--DateGenerated">
        <div className="text--DateGenerated-name">{Texts.dateGenerated}</div>
        <div className="text--DateGenerated-date">{dateFormatter(this.props.date)}</div>
      </div>
    );
  }
}

DateGenerated.propTypes = {
  date: UTCDateValidator.isRequired
};
