import React, { Component } from 'react';
import { Link } from 'react-router';

import SubTotal from '../text-components/SubTotal.jsx';
import { Texts } from '../../Constants.js';

export default class SkyStoreHead extends Component {
  render() {
    let data = this.props.data;

    return (
      <Link to="/details-skyStore">
        <div className="SkyStore--Head">
          <h2>{Texts.skyStore}</h2>
          <SubTotal amount={data.total} />
        </div>
      </Link>
    );
  }
}

SkyStoreHead.propTypes = {
  data: React.PropTypes.shape({
    rentals: React.PropTypes.array.isRequired,
    buyAndKeep: React.PropTypes.array.isRequired,
    total: React.PropTypes.number.isRequired
  })
};
