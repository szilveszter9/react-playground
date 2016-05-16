import React, { Component } from 'react';
import { Texts } from '../../Constants.js';

export default class SubTotal extends Component {
  render() {
    return (
      <div className="text--SubTotal">
        {Texts.currencySymbol}{this.props.amount.toFixed(2)}
      </div>
    );
  }
}

SubTotal.propTypes = {
  amount: React.PropTypes.number.isRequired,
};
