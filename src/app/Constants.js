import keyMirror from 'keymirror';

export const API = 'https://still-scrubland-9880.herokuapp.com/';

export const ActionTypes = keyMirror({
  BILL_LOADED: null,
  LOAD_BILL: null
});

export const PayloadSources = keyMirror({
  SERVER_ACTION: null,
  VIEW_ACTION: null
});

export const Texts = {
  billHead: 'Statement',
  callCharges: 'Call Charges',
  calls: 'Calls',
  currencySymbol: '£',
  dateGenerated: 'Date',
  datePeriod: 'Period',
  dateSeparator: '–',
  dueDate: 'Due Date',
  errorMessage: 'An error occured. Please try again later.',
  goBack: 'Go Back',
  loading: 'Loading...',
  package: 'Package',
  packages_subscriptions: 'Subscriptions',
  skyStore: 'Sky Store',
  skyStore_buyAndKeep: 'Buy and Keep',
  skyStore_rentals: 'Rentals',
};
