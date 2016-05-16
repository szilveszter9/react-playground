import React, { Component } from 'react';
import Bill from '../Bill.jsx';

import Calls from '../list-components/Calls.jsx';
import SubTotal from '../text-components/SubTotal.jsx';
import GoBack from '../GoBack.jsx';
import { Texts } from '../../Constants.js';

export default class CallCharges extends Bill {
  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let callChargesData = this.state.data.callCharges;

    return (
      <div className="CallCharges">
        <GoBack />
        <h2>{Texts.callCharges}</h2>
        <SubTotal amount={callChargesData.total} />
        <Calls data={callChargesData.calls} />
      </div>
    );
  }
}

CallCharges.propTypes = {
  data: React.PropTypes.shape({
    calls: React.PropTypes.array.isRequired,
    total: React.PropTypes.number.isRequired
  })
};
