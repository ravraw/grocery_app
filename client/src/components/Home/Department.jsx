import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Department extends Component {
  render() {
    const { id, name, image } = this.props.department;

    return (
      <Link className="department" to={`/department/${id}/show`}>
        <h2>{name}</h2>
        <img src={image} alt="dummy" style={{ height: '150px' }} />
      </Link>
    );
  }
}

export default Department;
