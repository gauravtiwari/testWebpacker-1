import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  render() {
    return (
      <div className="icon">
        <Child name='Fred'/>
        <p>Hi, from {this.props.name}!</p>
      </div>
    )
  }
}

export default Parent
