jest.disableAutomock();

import dateFormatter from '../../app/lib/dateFormatter.js';

describe('dateFormatter', () => {
  it('should return with an empty string if the input is invalid', () => {
    expect(dateFormatter('2016-51-01')).toEqual('2016-51-01');
    expect(dateFormatter(undefined)).toEqual('');
    expect(dateFormatter(null)).toEqual('');
  });

  it('should return with formatted date if the input is a valid date string', () => {
    expect(dateFormatter('2016-12-23')).toEqual('23/12/2016');
  });
});

