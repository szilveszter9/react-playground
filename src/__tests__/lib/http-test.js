jest.disableAutomock();

import { get, getJSON } from '../../app/lib/http.js';

let propName = 'date';
let componentName = 'someComponent';

describe('http get', () => {
  beforeEach(() => {
    let { mockXMLHttpRequest, addMockRequest } = require('../../app/lib/MockXMLHttpRequest.js');
    mockXMLHttpRequest();
    addMockRequest('GET', 'someUrl', 'someResponse');
  });

  it('should get the response and no errors if url is fine', done => {
    get('someUrl', (err, res) => {
      expect(err).toBeFalsy();
      expect(res).toEqual('someResponse');
      done();
    });
  });

  it('should get an error and no response if url is not ok', done => {
    get('someBADUrl', (err, res) => {
      expect(err).toBeTruthy();
      expect(res).toEqual(undefined);
      done();
    });
  });
});

describe('http getJSON', () => {
  beforeEach(() => {
    let { mockXMLHttpRequest, addMockRequest } = require('../../app/lib/MockXMLHttpRequest.js');
    mockXMLHttpRequest();
    addMockRequest('GET', 'someUrl', '{"someResponse": 1234}');
    addMockRequest('GET', 'someUnparseableTextUrl', '{someBadResponse: 1234}');
  });

  it('should get the parsed text as an object ', done => {
    getJSON('someUrl', (err, res) => {
      expect(err).toBeFalsy();
      expect(res).toEqual({someResponse: 1234});
      done();
    });
  });

  it('should get an error and no response if responseText is not parseable', done => {
    getJSON('someUnparseableTextUrl', (err, res) => {
      expect(err).toBeTruthy();
      expect(res).toEqual(undefined);
      done();
    });
  });
});
