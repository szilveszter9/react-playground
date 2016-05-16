import React, { Component } from 'react';

export default class SubscriptionName extends Component {
  render() {
    return (
      <div className="text--SubscriptionName">
        {this.props.name}
      </div>
    );
  }
}

SubscriptionName.propTypes = {
  name: React.PropTypes.string.isRequired,
};
