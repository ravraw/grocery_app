import React, { Component } from 'react';

class User_new extends Component {
  constructor() {
    super();
    this.state = {
      username: { value: '', error: false },
      email: { value: '', error: false },
      password: { value: '', error: false },
      confirmPassword: { value: '', error: false }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { value, name } = event.target;
    if (name !== 'confirmPassword') {
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
    //Regex validation: Correct email
    const validEmail = RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    for (let name in this.state) {
      let inputValue = this.state[name].value;
      let inputLength = inputValue.length;
      console.log('name', name);
      if (name === 'username' && inputLength < 9) {
        console.log('username Error!!!');
        this.setState({
          [name]: { value: '', error: true }
        });
        console.log('state after email error', this.state);
      }
      if (name === 'password' && !validPassword.test(inputValue)) {
        console.log('Password Error!!!');
        this.setState({
          [name]: { value: '', error: true }
        });
      }
      if (name === 'email' && !validEmail.test(inputValue)) {
        console.log('Email Error!!!');

        this.setState({
          [name]: { value: '', error: true }
        });
      }
      if (name === 'confirmPassword') {
        const passwordMatch =
          this.state.password.value === this.state.confirmPassword.value;
        console.log('passwordMatch? ', passwordMatch);
        console.log('this.state', this.state);
        if (!passwordMatch) {
          console.log('Confirm password Error!!!');
          this.setState({
            [name]: { value: '', error: true }
          });
        }
      }
    }
    const state = this.state;
    const usernameError = state.username.error;
    const emailError = state.email.error;
    const passwordError = state.password.error;
    const confirmError = state.confirmPassword.error;
    const noError =
      !usernameError && !emailError && !passwordError && !confirmError;
    console.log('state', this.state);
    console.log('noErrror?', noError);
    if (noError) {
      fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          username: state.username.value,
          email: state.email.value,
          password: state.password.value
        })
      }).then(response => {
        console.log('response', response);
        if (response.ok) console.log('Registraiton Complete!');
        //then put user into session and redirect to home page
      });
    }
  }

  render() {
    return (
      <div className="register">
        <form className="register_form" onSubmit={this.handleSubmit}>
          <label>Register</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
          {this.state.email.error ? <div>Incorrect Email</div> : ''}

          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="Username"
          />
          {this.state.username.error ? <div>At least 8 charactors!</div> : ''}

          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          {this.state.password.error ? (
            <div>
              Need at least 10 characters, one diget, one lower-case letter, and
              one upper-case letter!
            </div>
          ) : (
            ''
          )}

          <input
            type="text"
            name="confirmPassword"
            onChange={this.handleChange}
            placeholder="Confirm Password"
          />
          {this.state.confirmPassword.error ? (
            <div>Password and confirmPassword don't match!</div>
          ) : (
            ''
          )}

          <button className="form_btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default User_new;
