// These tests also cover the Flux data flow
// the actual Bill here is getting it's data
// from the store by adding a change listener
// (in componentDidMount at Bill class)
// Only the XMLHttpRequest is being mocked here.

jest.disableAutomock();

import { createMemoryHistory, RouterContext, Router, Route, IndexRoute, Link } from 'react-router';
const billData = require('./billFixture.json');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {App, AppRouter} from '../../app/components/App.jsx';
import { Texts, API } from '../../app/Constants.js';

describe('App on valid request (200), click on... based on router settings', () => {
  let comp, node, history;

  beforeEach(() => {
    let { mockXMLHttpRequest, addMockRequest } = require('../../app/lib//MockXMLHttpRequest.js');
    mockXMLHttpRequest();
    addMockRequest('GET', `${API}/bill.json`, JSON.stringify(billData));

    history = createMemoryHistory(location);
    comp = TestUtils.renderIntoDocument((
      <AppRouter history={history} />
    ));
    node = ReactDOM.findDOMNode(comp);

  });

  it('should render the bill data by default', () => {
    let expectNTTC = c => expect(node.textContent).toContain(c);

    expectNTTC(Texts.currencySymbol + '136.03');
    expectNTTC(Texts.dateGenerated + '11/01/2015');
    expectNTTC(Texts.dueDate + '25/01/2015');
    expectNTTC(Texts.datePeriod + '26/01/2015' + Texts.dateSeparator + '25/02/2015');
  });

  it('should load details page...', () => {
    let details = TestUtils.scryRenderedDOMComponentsWithClass(comp, 'Bill--Details');
    expect(details.length).toBe(0);

    let button = TestUtils.findRenderedDOMComponentWithTag(comp, 'a');
    let buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    // Link is tested in router package,
    // this is a workaround until find a better solution
    // to handle those synthetic events and simulate clicks with Router's Link
    let href = buttonNode.href;
    history.push(href);

    details = TestUtils.findRenderedDOMComponentWithClass(comp, 'Bill--Details');
    let expectNTTC = c => expect(node.textContent).toContain(c);

    expectNTTC(Texts.goBack);
    expectNTTC(Texts.package + Texts.currencySymbol + '71.40');
    expectNTTC(Texts.callCharges + Texts.currencySymbol + '59.64');
    expectNTTC(Texts.skyStore + Texts.currencySymbol + '24.97');
  });

  it('should load Sky Store details page...', () => {
    history.push('/details-skyStore');

    let skyStore = TestUtils.findRenderedDOMComponentWithClass(comp, 'SkyStore');
    let expectNTTC = c => expect(node.textContent).toContain(c);

    expectNTTC(Texts.goBack);
    expectNTTC(Texts.skyStore + Texts.currencySymbol + '24.97');
    expectNTTC(Texts.skyStore_rentals + '50 Shades of Grey' + Texts.currencySymbol + '4.99');
    expectNTTC(Texts.skyStore_buyAndKeep + 'That\'s what she said' + Texts.currencySymbol + '9.99');
    expectNTTC('Brokeback mountain' + Texts.currencySymbol + '9.99');
  });

  it('should load Package details page...', () => {
    history.push('/details-package');

    let packageComp = TestUtils.findRenderedDOMComponentWithClass(comp, 'Package');
    let expectNTTC = c => expect(node.textContent).toContain(c);

    expectNTTC(Texts.goBack);
    expectNTTC(Texts.package + Texts.currencySymbol + '71.40');
    expectNTTC(Texts.packages_subscriptions + 'tv' + 'Variety with Movies HD' + Texts.currencySymbol + '50.00');
    expectNTTC('talk' + 'Sky Talk Anytime' + Texts.currencySymbol + '5.00');
    expectNTTC('broadband' + 'Fibre Unlimited' + Texts.currencySymbol + '16.40');
  });

  it('should load Call Charges details...', () => {
    history.push('/details-callCharges');

    let callCharges = TestUtils.findRenderedDOMComponentWithClass(comp, 'CallCharges');
    let expectNTTC = c => expect(node.textContent).toContain(c);

    expectNTTC(Texts.goBack);
    expectNTTC(Texts.callCharges + Texts.currencySymbol + '59.64');
    expectNTTC(Texts.calls + '07716393769' + '00:23:03' + Texts.currencySymbol + '2.13');
  });
});
