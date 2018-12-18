import React, { Component } from "react";

class User_new extends Component {
  constructor() {
    super();
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
  };
  handleSubmit = event => {};

  render() {
    return (
      <React.Fragment>
        <div>Please Enter Your User Information</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirm-password"
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default User_new;
