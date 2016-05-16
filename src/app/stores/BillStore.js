import AppDispatcher from '../AppDispatcher.js';
import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants.js';

const events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

const state = {
  data: {},
  loaded: false
};

const setState = (newState) => {
  Object.assign(state, newState);
  events.emit(CHANGE_EVENT);
};

const BillStore = {
  addChangeListener (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState () {
    return state;
  }
};

BillStore.dispatchToken = AppDispatcher.register((payload) => {
  let { action } = payload;
  if (action.type === ActionTypes.BILL_LOADED) {
    setState({
      loaded: true,
      data: action.data
    });
  }
});

export default BillStore;
