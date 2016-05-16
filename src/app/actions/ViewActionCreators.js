import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';
import ApiUtil from '../utils/ApiUtil.js';

const ViewActionCreators = {
  loadBill() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_BILL
    });
    ApiUtil.loadBill();
  }
};

export default ViewActionCreators;
