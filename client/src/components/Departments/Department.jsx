import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Department extends Component {
  render() {
    const { id, name } = this.props.department;
    
    return (
      <Link id={id} to={`/department/${id}/show`}>
        <h1>{name}</h1>
        <img src="https://i1.wp.com/www.toodlehub.com/wp-content/uploads/2018/03/2018-03-28_01h21_39.png?resize=150%2C150&ssl=1" />
      </Link>
    );
  }
}

export default Department;
