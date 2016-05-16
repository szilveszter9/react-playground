import React, { Component } from 'react';

export default class MovieTitle extends Component {
  render() {
    return (
      <div className="text--MovieTitle">
        <div>{this.props.title}</div>
      </div>
    );
  }
}

MovieTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};
