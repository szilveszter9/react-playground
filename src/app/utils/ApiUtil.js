import { getJSON } from '../lib/http.js';
import { API, ActionTypes } from '../Constants.js';
import ServerActionCreators from '../actions/ServerActionCreators.js';

const ApiUtils = {
  loadBill () {
    getJSON(`${API}/bill.json`, (err, res) => {
      ServerActionCreators.loadedBill(res);
    });
  }
};

export default ApiUtils;
