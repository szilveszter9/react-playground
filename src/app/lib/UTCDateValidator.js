import createChainableTypeChecker from '../lib/createChainableTypeChecker.js';

function UTCDateValidator(props, propName, componentName) {
  let prop = props[propName];
  if(typeof prop !== 'string')
    return new Error(
      'Invalid prop `' +
      propName + '` of type `' +
      (typeof props[propName]) + '`supplied to `' +
      componentName + '`, expected a valid UTC date `string`.'
    );
  let strMatch = /^\d{4}-\d{2}-\d{2}$/.test(prop);
  if(!strMatch || isNaN((new Date(prop)).getDate()))
    return new Error(
      'Invalid prop `' +
      propName + '` supplied to `' +
      componentName + '`, "' +
      props[propName] + '" is not a valid Date.'
    );
}

export default createChainableTypeChecker(UTCDateValidator);
