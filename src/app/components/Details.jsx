import React from 'react';

// to extend
import Bill from './Bill.jsx';

// Components (rendered from this class)
import PackageHead from './subtotal-components/PackageHead.jsx';
import CallChargesHead from './subtotal-components/CallChargesHead.jsx' ;
import SkyStoreHead from './subtotal-components/SkyStoreHead.jsx';
import GoBack from './GoBack.jsx';

export default class Details extends Bill {
  render() {
    if(!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let billData = this.state.data;

    return (
      <div className="Bill--Details">
        <GoBack />
        <PackageHead data={billData.package} />
        <CallChargesHead data={billData.callCharges} />
        <SkyStoreHead data={billData.skyStore} />
      </div>
    );
  }
}

Details.propTypes = {
  data: React.PropTypes.shape({
    package: React.PropTypes.object.isRequired,
    callCharges: React.PropTypes.object.isRequired,
    skyStore: React.PropTypes.object.isRequired
  })
};
