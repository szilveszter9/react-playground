import React, { Component } from 'react';
import { Texts } from '../Constants.js';

export default class Total extends Component {
  render() {
    let data = this.props.data;

    return (
      <div className="Total">
        {Texts.currencySymbol}{this.props.amount.toFixed(2)}
      </div>
    );
  }
}

Total.propTypes = {
  amount: React.PropTypes.number.isRequired
};
