import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { registerUserMutation } from '../../queries/queries';

class User_new extends Component {
  constructor() {
    super();
    this.state = {
      username: { value: '', error: false },
      email: { value: '', error: false },
      password: { value: '', error: false },
      confirmPassword: { value: '', error: false },
      loading: true,
      redirect: false
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
    const state = this.state;
    let usernameValue = state.username.value;
    let emailValue = state.email.value;
    let passwordValue = state.password.value;
    let confirmValue = state.confirmPassword.value;

    if (usernameValue.length < 9) {
      console.log(console.log('username Error!!!'));
      this.setState({ username: { value: '', error: true } });
    }

    if (!validEmail.test(emailValue)) {
      console.log(console.log('email Error!!!'));
      this.setState({ email: { value: '', error: true } });
    }
    if (!validPassword.test(passwordValue)) {
      console.log(console.log('Password Error!!!'));
      this.setState({ password: { value: '', error: true } });
    }
    const passwordMatch = passwordValue === confirmValue && passwordValue;
    if (passwordMatch) {
      console.log(console.log('Confirm-Password Error!!!'));
      this.setState({ confirmPassword: { value: '', error: true } });
    }
    const usernameError = state.username.error;
    const emailError = state.email.error;
    const passwordError = state.password.error;
    const confirmError = state.confirmPassword.error;

    const noError =
      !usernameError && !emailError && !passwordError && !confirmError;
    // console.log("state", this.state);
    // console.log("noErrror?", noError);
    if (noError) {
      // fetch('http://localhost:4000/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'text/plain' },
      //   body: JSON.stringify({
      //     username: usernameValue,
      //     email: emailValue,
      //     password: passwordValue
      //   })
      // }

      this.props
        .registerUserMutation({
          variables: {
            username: usernameValue,
            email: emailValue,
            password: passwordValue
          }
        })
        // .then(response => {
        //   console.log('response', response);
        //   if (response.ok) console.log('Registraiton Complete!');
        //   //then put user into session and redirect to home page
        // });
        .then(result => {
          console.log('USER REGISTRATION', result);
          this.props.history.push('/');
        });
    }
  }

  render() {
    return (
      <div className="register">
        <form className="register_form" onSubmit={this.handleSubmit}>
          <label>
            <strong>Register</strong>
          </label>
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
          {this.state.username.error ? <div>At least 8 characters!</div> : ''}
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          {this.state.password.error ? (
            <div>
              Need at least 10 characters, one digit, one lower-case letter, and
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

export default graphql(registerUserMutation, { name: 'registerUserMutation' })(
  User_new
);
