import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getUsersQuery } from '../queries/queries';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayUsers() {
    var data = this.props.data;
    console.log(this.props);
    if (data.loading) {
      return <div>Loading Users...</div>;
    }
    return data.users.map(user => {
      return <li key={user.id}> {user.email} </li>;
    });
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayUsers()}</ul>
      </div>
    );
  }
}

export default graphql(getUsersQuery)(Users);
