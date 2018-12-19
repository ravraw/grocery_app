import React, { Component } from "react";

class User_new extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      showUsernameError: false,
      showEmailError: false,
      showPasswordError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    const { value, name } = event.target;
    if (name !== "confirmPassword") {
      //ignores confirm password
      this.setState({
        [name]: value
      });
    }

    console.log("userInfo", this.state);
  };
  handleSubmit = event => {
    event.preventDefault();

    for (let target in event.target) {
      if (target.name) {
        //making sure target is not a non <input> element
        const name = target.name;
        const value = target.value;

        if (value.length < 7) {
          this.setState({ username: "At least chars"})
        }
      }
    }

    console.log("submited event", event.target);
    console.log("type", typeof event.target);
    const userInfo = this.state;

    //Insert userInfo into Users table
  };

  render() {
    console.log("STATE", this.state);
    return (
      <React.Fragment>
        <div>Please Enter Your User Information</div>
        <form onSubmit={this.handleSubmit}>
          <lable>Username:</lable>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          {this.state.showUsernameError?<div>At least 6 charactors</div>:""}

          <br />
          <lable>Email:</lable>
          <input type="text" name="email" onChange={this.handleChange} />
          {this.state.showEmailError?<div>At least 6 charactors</div>:""}
          
          <br />
          <lable>Password:</lable>
          <input type="password" name="password" onChange={this.handleChange} />
          {this.state.showPasswordError?<div>At least 6 charactors</div>:""}

          <br />
          <lable>Confirm Password:</lable>
          <input type="password" name="confirmPassword" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default User_new;
