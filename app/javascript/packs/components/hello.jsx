import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div className="icon">
        Hello, I you ares {this.props.name}!
      </div>
    )
  }
}

export default Hello;
