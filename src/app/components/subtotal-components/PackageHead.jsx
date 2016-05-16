import React, { Component } from 'react';
import { Link } from 'react-router';

import SubTotal from '../text-components/SubTotal.jsx';
import { Texts } from '../../Constants.js';

export default class PackageHead extends Component {
  render() {
    let data = this.props.data;

    return (
      <Link to="/details-package">
        <div className="Package--Head">
          <h2>{Texts.package}</h2>
          <SubTotal amount={data.total} />
        </div>
      </Link>
    );
  }
}

PackageHead.propTypes = {
  data: React.PropTypes.shape({
    total: React.PropTypes.number.isRequired
  })
};
