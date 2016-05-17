import { getJSON } from '../lib/http.js';
import { API, ActionTypes } from '../Constants.js';
import ServerActionCreators from '../actions/ServerActionCreators.js';

let billCache;

const ApiUtils = {
  loadBill () {
    if(billCache)
      ServerActionCreators.loadedBill(billCache);
    else
      getJSON(`${API}/bill.json`, (err, res) => {
        if(!err)
          billCache = res;
        ServerActionCreators.loadedBill(res);
      });
  }
};

export default ApiUtils;
