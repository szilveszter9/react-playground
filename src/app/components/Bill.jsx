import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import { getJSON } from '../lib/http.js';
import BillStore from '../stores/BillStore.js';
import ViewActionCreators from '../actions/ViewActionCreators.js';
import { Texts } from '../Constants.js';

// Components
import Statement from './Statement.jsx';
import Total from './Total.jsx';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    BillStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadBill();
  }

  componentWillUnmount() {
    BillStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange() {
    this.setState(BillStore.getState());
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    let billData = this.state.data;

    if(this.state.data)
      return (
        <div>
          <Link to="/details">
            <div className="Bill">
              <h1>{Texts.billHead}</h1>
              <Total amount={billData.total} />
              <Statement data={billData.statement} />
            </div>
          </Link>
        </div>
      );
    else
      return (
        <div className="Error">{Texts.errorMessage}</div>
      );
  }
}

Bill.propTypes = {
  data: React.PropTypes.shape({
    statement: React.PropTypes.object.isRequired,
    total: React.PropTypes.number.isRequired
  })
};
