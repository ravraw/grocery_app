import React, { Component } from "react";

class User_new extends Component {
  constructor() {
    super();
    this.state = {
      username: { value: "", error: false },
      email: { value: "", error: false },
      password: { value: "", error: false }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    const { value, name } = event.target;
    if (name !== "confirmPassword") {
      //ignores confirm password
      this.setState({
        [name]: { value: value, error: false }
      });
    }

    console.log("userInfo", this.state);
  };
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log("STATE", this.state);
    return (
      <React.Fragment>
        <div>Please Enter Your User Information</div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
          />
          {this.state.showUsernameError ? <div>At least 6 charactors</div> : ""}

          <br />
          <label>Email:</label>
          <input type="text" name="email" onChange={this.handleChange} />
          {this.state.showEmailError ? <div>At least 6 charactors</div> : ""}

          <br />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleChange} />
          {this.state.showPasswordError ? <div>At least 6 charactors</div> : ""}

          <br />
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default User_new;
