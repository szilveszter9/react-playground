import React, { Component } from 'react';

// Components
import DateGenerated from './text-components/DateGenerated.jsx';
import DateDue from './text-components/DateDue.jsx';
import DatePeriod from './text-components/DatePeriod.jsx';

export default class Statement extends Component {
  render() {
    let data = this.props.data;

    return (
      <div className="Statement">
        <DateGenerated date={data.generated} />
        <DateDue date={data.due} />
        <DatePeriod dateFrom={data.period.from} dateTo={data.period.to} />
      </div>
    );
  }
}

Statement.propTypes = {
  data: React.PropTypes.shape({
    generated: React.PropTypes.string.isRequired,
    due: React.PropTypes.string.isRequired,
    period: React.PropTypes.object.isRequired
  })
};
