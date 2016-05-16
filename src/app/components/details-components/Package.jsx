import React, { Component } from 'react';
import Bill from '../Bill.jsx';

import Subscriptions from '../list-components/Subscriptions.jsx';
import SubTotal from '../text-components/SubTotal.jsx';
import GoBack from '../GoBack.jsx';
import { Texts } from '../../Constants.js';

export default class Package extends Bill {
  render() {
    if (!this.state.loaded) {
      return <div>{Texts.loading}</div>;
    }

    let packageData = this.state.data.package;

    return (
      <div className="Package">
        <GoBack />
        <h2>{Texts.package}</h2>
        <SubTotal amount={packageData.total} />
        <Subscriptions data={packageData.subscriptions} />
      </div>
    );
  }
}

Package.propTypes = {
  data: React.PropTypes.shape({
    subscriptions: React.PropTypes.array.isRequired,
    total: React.PropTypes.number.isRequired
  })
};
