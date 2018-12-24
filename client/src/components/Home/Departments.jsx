import React, { Component } from 'react';
import Department from './Department';
import { graphql } from 'react-apollo';
import { getDepartmentsQuery } from '../../queries/queries';

class Departments extends Component {
  constructor() {
    super();
    this.state = {
      selected: null
    };
  }
  displayDepartments() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Departments...</div>;
    } else {
      return data.departments.map(department => {
        return (
          <Department
            key={department.id}
            department={department}
            onClick={e => this.setState({ selected: department.id })}
          />
        );
      });
    }
  }
  render() {
    return <div className="departments">{this.displayDepartments()}</div>;
  }
}

export default graphql(getDepartmentsQuery)(Departments);
