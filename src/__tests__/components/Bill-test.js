// Would have been easier to jest.disableAutomock();
// but is nice to have all the jest.unmock(s) explicitly this once.

jest.unmock('../../app/components/Bill.jsx');
jest.unmock('../../app/lib/UTCDateValidator.js');
jest.unmock('../../app/actions/ViewActionCreators.js');
jest.unmock('../../app/Constants.js');
jest.unmock('../../app/utils/ApiUtil.js');
jest.unmock('../../app/lib/http.js');
jest.unmock('keymirror');
jest.unmock('../../app/lib/MockXMLHttpRequest.js');
jest.unmock('../../app/actions/ServerActionCreators.js');
jest.unmock('../../app/actions/ViewActionCreators.js');
jest.unmock('../../app/AppDispatcher.js');
jest.unmock('../../app/stores/BillStore.js');
jest.unmock('flux');

const billData = require('./billFixture.json');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Texts, API } from '../../app/Constants.js';

import Bill from '../../app/components/Bill.jsx';

describe('Bill on invalid request (404)', () => {
  let comp, node;

  beforeEach(() => {
    let { mockXMLHttpRequest, addMockRequest } = require('../../app/lib/MockXMLHttpRequest.js');
    mockXMLHttpRequest();

    comp = TestUtils.renderIntoDocument(
      <Bill />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should render an error message', () => {
    expect(node.textContent).toEqual(Texts.errorMessage);
  });
});

describe('Bill on valid request (200)', () => {
  let comp, node;

  beforeEach(() => {
    let { mockXMLHttpRequest, addMockRequest } = require('../../app/lib/MockXMLHttpRequest.js');
    mockXMLHttpRequest();
    addMockRequest('GET', `${API}/bill.json`, JSON.stringify(billData));
    comp = TestUtils.renderIntoDocument(
      <Bill />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should render the head of the bill', () => {
    expect(node.textContent).toEqual(Texts.billHead);
  });
});
