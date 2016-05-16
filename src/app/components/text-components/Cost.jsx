import React, { Component } from 'react';
import { Texts } from '../../Constants.js';

export default class Cost extends Component {
  render() {
    return (
      <div className="text--Cost">
        <div>{Texts.currencySymbol}{this.props.amount.toFixed(2)}</div>
      </div>
    );
  }
}

Cost.propTypes = {
  amount: React.PropTypes.number.isRequired,
};
