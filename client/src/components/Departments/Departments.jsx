import React, { Component } from 'react';
import Department from './Department';
import { graphql } from 'react-apollo';
import { getDepartmentsQuery } from '../../queries/queries';

class Departments extends Component {
  constructor() {
    super();
    this.state = {};
  }
  displayDepartments() {
    let data = this.props.data;
    console.log('data', this.props);
    if (data.loading) {
      return <div>Loading Departments...</div>;
    } else {
      return data.departments.map(department => {
        return <Department department={department} />;
      });
    }
  }
  render() {
    return <div>{this.displayDepartments()}</div>;
  }
}

export default graphql(getDepartmentsQuery)(Departments);
