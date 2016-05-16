jest.unmock('../../app/components/text-components/MovieTitle.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import MovieTitle from '../../app/components/text-components/MovieTitle.jsx';

describe('MovieTitle', () => {
  let comp, node;

  beforeEach(() => {
    comp = TestUtils.renderIntoDocument(
      <MovieTitle title="some movie" />
    );

    node = ReactDOM.findDOMNode(comp);
  });

  it('should have a div with the proper title in it', () => {
    expect(node.textContent).toEqual('some movie');
  });
});
