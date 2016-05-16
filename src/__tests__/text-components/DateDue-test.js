jest.unmock('../../app/components/text-components/DateDue.jsx');
jest.unmock('../../app/lib/UTCDateValidator.js');
jest.unmock('../../app/lib/createChainableTypeChecker.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import DateDue from '../../app/components/text-components/DateDue.jsx';
import { Texts } from '../../app/Constants.js';

describe('DateDue using valid date', () => {
  let comp, node;

  beforeEach(() => {
    comp = TestUtils.renderIntoDocument(
      <DateDue date="2016-05-13" />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should have the local date in it', () => {
    expect(node.textContent).toEqual(Texts.dueDate + '13/05/2016');
  });
});

describe('DateDue using invalid date', () => {
  let comp, node;

  beforeEach(() => {
    comp = TestUtils.renderIntoDocument(
      <DateDue date="2016-25-13" />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should have a div with passed string in it without any formatting', () => {
    expect(node.textContent).toEqual(Texts.dueDate + '2016-25-13');
  });
});

describe('DateDue not passing any date', () => {
  let comp, node;

  beforeEach(() => {
    comp = TestUtils.renderIntoDocument(
      <DateDue />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should only have the header in it', () => {
    expect(node.textContent).toEqual(Texts.dueDate);
  });
});
