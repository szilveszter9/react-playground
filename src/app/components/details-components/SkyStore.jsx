import React, { Component } from 'react';
import Bill from '../Bill.jsx';

import BuyAndKeep from '../list-components/BuyAndKeep.jsx';
import Rentals from '../list-components/Rentals.jsx';
import SubTotal from '../text-components/SubTotal.jsx';
import GoBack from '../GoBack.jsx';
import { Texts } from '../../Constants.js';

export default class SkyStore extends Bill {
  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let skyStoreData = this.state.data.skyStore;

    return (
      <div className="SkyStore">
        <GoBack />
        <h2>{Texts.skyStore}</h2>
        <SubTotal amount={skyStoreData.total} />
        <Rentals data={skyStoreData.rentals} />
        <BuyAndKeep data={skyStoreData.buyAndKeep} />
      </div>
    );
  }
}

SkyStore.propTypes = {
  data: React.PropTypes.shape({
    rentals: React.PropTypes.array.isRequired,
    buyAndKeep: React.PropTypes.array.isRequired,
    total: React.PropTypes.number.isRequired
  })
};
