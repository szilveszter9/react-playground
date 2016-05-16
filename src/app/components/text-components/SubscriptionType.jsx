import React, { Component } from 'react';

export default class SubscriptionType extends Component {
  render() {
    return (
      <div className="text--SubscriptionType">
        {this.props.name}
      </div>
    );
  }
}

SubscriptionType.propTypes = {
  name: React.PropTypes.string.isRequired,
};
