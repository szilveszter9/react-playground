jest.disableAutomock();

import UTCDateValidator from '../../app/lib/UTCDateValidator.js';

let propName = 'date';
let componentName = 'someComponent';

describe('UTCDateValidator is not required', () => {
  it('should return with an error if date is invalid', () => {
    let props = {date: '2016-51-01'};
    let valid = UTCDateValidator(props, propName, componentName);
    let expected = 'Error: Invalid prop `date` supplied to `someComponent`, "2016-51-01" is not a valid Date.';
    expect(valid.toString()).toEqual(expected);
  });

  it('should return with falsy if date is undefined', () => {
    let props = {date: undefined};
    let valid = UTCDateValidator(props, propName, componentName);
    expect(valid).toBeFalsy();
  });

  it('should return with an error if date is a object', () => {
    let props = {date: function(){}};
    let valid = UTCDateValidator(props, propName, componentName);
    let expected = 'Error: Invalid prop `date` of type `function`supplied to `someComponent`, expected a valid UTC date `string`.';
    expect(valid.toString()).toEqual(expected);
  });

  it('should return with an error if date is a number', () => {
    let props = {date: 1234};
    let valid = UTCDateValidator(props, propName, componentName);
    let expected = 'Error: Invalid prop `date` of type `number`supplied to `someComponent`, expected a valid UTC date `string`.';
    expect(valid.toString()).toEqual(expected);
  });
});

describe('UTCDateValidator isRequired', () => {
  it('should return with an error if date is invalid', () => {
    let props = {date: '2016-51-01'};
    let valid = UTCDateValidator.isRequired(props, propName, componentName);
    let expected = 'Error: Invalid prop `date` supplied to `someComponent`, "2016-51-01" is not a valid Date.';
    expect(valid.toString()).toEqual(expected);
  });

  it('should return with an error if date is empty', () => {
    let props = {date: undefined};
    let valid = UTCDateValidator.isRequired(props, propName, componentName);
    let expected = 'Error: Required undefined `date` was not specified in `someComponent`.';
    expect(valid.toString()).toEqual(expected);
  });

  it('should return with falsy if date fine', () => {
    let props = {date: '2016-01-01'};
    let valid = UTCDateValidator.isRequired(props, propName, componentName);
    expect(valid).toBeFalsy();
  });
});

