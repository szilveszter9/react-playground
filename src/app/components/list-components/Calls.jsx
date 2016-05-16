import React, { Component } from 'react';

import PhoneNumber from '../text-components/PhoneNumber.jsx';
import TimeDuration from '../text-components/TimeDuration.jsx';
import Cost from '../text-components/Cost.jsx';
import { Texts } from '../../Constants.js';

export default class Calls extends Component {
  render() {
    let data = this.props.data;
    let records = data.map((record, index) => {
      let row = (index % 2 == 0 ? 'odd' : 'even')
      let rowClassName = "CallCharges--Calls-item " + row;
      return (
        <div className={rowClassName}>
          <PhoneNumber phoneNumber={record.called} />
          <TimeDuration timeDuration={record.duration} />
          <Cost amount={record.cost} />
        </div>
      );
    });


    return (
      <div className="CallCharges--Calls">
        <h3>{Texts.calls}</h3>
        {records}
      </div>
    );
  }
}

Calls.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      called: React.PropTypes.string.isRequired,
      duration: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired
    })
  )
};
