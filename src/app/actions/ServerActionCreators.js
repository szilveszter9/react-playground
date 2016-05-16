import { ActionTypes } from '../Constants.js';
import AppDispatcher from '../AppDispatcher.js';

const ServerActionCreators = {
  loadedBill(data) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.BILL_LOADED,
      data: data
    });
  }
};

export default ServerActionCreators;
