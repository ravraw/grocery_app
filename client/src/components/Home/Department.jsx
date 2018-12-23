import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Department extends Component {
  render() {
    const { id, name, image } = this.props.department;

    return (
      <Link id={id} to={`/department/${id}/show`}>
        <h1>{name}</h1>
        <img src={image} alt="dummy" style={{ height: '200px' }} />
      </Link>
    );
  }
}

export default Department;
