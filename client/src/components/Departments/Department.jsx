import React, { Component } from 'react';


class Department extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Department: {this.props.department.departmentName}</div>
        <div>DepartmentId: {this.props.department.departmentName}</div>
        <img src={this.props.department.image} />
      </React.Fragment>
      
    );
  }
}

export default Department;
