jest.unmock('../../app/components/text-components/Cost.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Cost from '../../app/components/text-components/Cost.jsx';
import { Texts } from '../../app/Constants.js';

describe('Cost', () => {
  let comp, node;

  beforeEach(() => {
    comp = TestUtils.renderIntoDocument(
      <Cost amount={12} />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should have a div with the proper amount text in it, with fixed decimal places', () => {
    let firstDiv = node.querySelector('div');
    expect(firstDiv.textContent).toEqual(Texts.currencySymbol + '12.00');
  });
});
