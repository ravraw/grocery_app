import React, { Component } from 'react';

class Department extends Component {
  render() {
    const { id, name } = this.props.department;
    return (
      <div id={id}>
        <h1>{this.props.department.name}</h1>
        <img src="https://i1.wp.com/www.toodlehub.com/wp-content/uploads/2018/03/2018-03-28_01h21_39.png?resize=150%2C150&ssl=1" />
      </div>
    );
  }
}

export default Department;
