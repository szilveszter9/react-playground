import React, { Component } from 'react';

import SubscriptionName from '../text-components/SubscriptionName.jsx';
import SubscriptionType from '../text-components/SubscriptionType.jsx';
import Cost from '../text-components/Cost.jsx';
import { Texts } from '../../Constants.js';

export default class Subscriptions extends Component {
  render() {
    let data = this.props.data;
    let records = data.map((record, index) => {
      let row = (index % 2 == 0 ? 'odd' : 'even')
      let rowClassName = "Package--Subscriptions-item " + row;
      return (
        <div className={rowClassName}>
          <SubscriptionType name={record.type} />
          <SubscriptionName name={record.name} />
          <Cost amount={record.cost} />
        </div>
      );
    });


    return (
      <div className="Package--Subscriptions">
        <h3>{Texts.packages_subscriptions}</h3>
        {records}
      </div>
    );
  }
}

Subscriptions.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired
    })
  )
};
