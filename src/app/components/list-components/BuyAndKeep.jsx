import React, { Component } from 'react';

import MovieTitle from '../text-components/MovieTitle.jsx';
import Cost from '../text-components/Cost.jsx';
import { Texts } from '../../Constants.js';

export default class BuyAndKeep extends Component {
  render() {
    let data = this.props.data;
    let records = data.map((record, index) => {
      let row = (index % 2 == 0 ? 'odd' : 'even')
      let rowClassName = "SkyStore--BuyAndKeep-item " + row;
      return (
        <div className={rowClassName}>
          <MovieTitle title={record.title} />
          <Cost amount={record.cost} />
        </div>
      );
    });


    return (
      <div className="SkyStore--BuyAndKeep">
        <h3>{Texts.skyStore_buyAndKeep}</h3>
        {records}
      </div>
    );
  }
}

BuyAndKeep.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired
    })
  )
};
