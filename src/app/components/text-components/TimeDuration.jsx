import React, { Component } from 'react';

export default class TimeDuration extends Component {
  render() {
    return (
      <div className="text--TimeDuration">
        {this.props.timeDuration}
      </div>
    );
  }
}

TimeDuration.propTypes = {
  timeDuration: React.PropTypes.string.isRequired,
};
