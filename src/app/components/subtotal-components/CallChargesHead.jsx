import React, { Component } from 'react';
import { Link } from 'react-router';

import SubTotal from '../text-components/SubTotal.jsx';
import { Texts } from '../../Constants.js';

export default class CallChargesHead extends Component {
  render() {
    let data = this.props.data;

    return (
      <Link to="/details-callCharges">
        <div className="CallCharges--Head">
          <h2>{Texts.callCharges}</h2>
          <SubTotal amount={data.total} />
        </div>
      </Link>
    );
  }
}

CallChargesHead.propTypes = {
  data: React.PropTypes.shape({
    total: React.PropTypes.number.isRequired
  })
};
