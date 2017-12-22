import React, { Component } from 'react';

class Child extends Component {
  render () {
    return (
      <div>
      Greetings {this.props.name}!</div>
    );
  }
}

export default Child
