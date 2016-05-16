import React, { Component } from 'react';

export default class PhoneNumber extends Component {
  render() {
    return (
      <div className="text--PhoneNumber">
        {this.props.phoneNumber}
      </div>
    );
  }
}

PhoneNumber.propTypes = {
  phoneNumber: React.PropTypes.string.isRequired,
};
