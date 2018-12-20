import React, { Component } from "react";

class User_new extends Component {
  constructor() {
    super();
    this.state = {
      username: { value: "", error: false },
      email: { value: "", error: false },
      password: { value: "", error: false },
      confirm_password: { value: "", error: false }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayInputs = this.displayInputs.bind(this);
  }
  handleChange(event) {
    const { value, name } = event.target;
    if (name !== "confirmPassword") {
      this.setState({
        [name]: { value: value, error: false }
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    //Regex validation: contains diget,lowercass and uppercase letter, no space, at least 10 characters.
    const validPassword = RegExp(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{10,}$/
    );
    for (let name in this.state) {
      const inputValue = this.state[name].value;
      const inputLength = inputValue.length;

      if (inputLength < 9) {
        this.setState({
          [name]: { value: "", error: true }
        });
      } else if (name === "password" && !validPassword.test(inputValue)) {
        this.setState({
          [name]: { value: "", error: true }
        });
      } else if (name === "confirm_password") {
        const passwordMatch =
          this.state.password.value === this.state.confirm_password.value;
        console.log('passwordMatch? ',passwordMatch)
        console.log("this.state",this.state)
        if (!passwordMatch) {
          this.setState({
            [name]: { value: "", error: true }
          });
        }
      }
    }
  }

  displayInputs() {
    const inputs = [];

    for (let state in this.state) {
      if (state !== "password" && state !== "confirm_password") {
        inputs.push(
          <React.Fragment>
            <label>{state} :</label>
            <input type="text" name={state} onChange={this.handleChange} />
            {this.state[state].error ? <div>At least 8 charactors!</div> : ""}
            <br />
          </React.Fragment>
        );
      } else if (state === "password") {
        inputs.push(
          <React.Fragment>
            <label>{state} :</label>
            <input type="text" name={state} onChange={this.handleChange} />
            {this.state[state].error ? (
              <div>
                Need at least 10 characters, one diget, one lower-case letter,
                and one upper-case letter!
              </div>
            ) : (
              ""
            )}
            <br />
          </React.Fragment>
        );
      } else if (state === "confirm_password") {
        inputs.push(
          <React.Fragment>
            <label>{state} :</label>
            <input type="text" name={state} onChange={this.handleChange} />
            {this.state[state].error ? (
              <div>Password and confirm_password don't match!</div>
            ) : (
              ""
            )}
            <br />
          </React.Fragment>
        );
      }
    }
    return inputs;
  }

  render() {
    return (
      <React.Fragment>
        <div>Please Enter Your User Information</div>
        <form onSubmit={this.handleSubmit}>
          {this.displayInputs()}
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default User_new;
