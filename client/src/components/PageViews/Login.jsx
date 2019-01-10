import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { graphql } from "react-apollo";
import { loginUserMutation } from "../../queries/queries";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      //should use fetched Cart data from database; now uses hardcoded cartProducts
      // cartProducts: cartProducts
      loading: true,
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    // console.log('FROM LOGIN ', { email, password })
    // this.props.history.push('/');
    this.props
      .loginUserMutation({
        variables: {
          email,
          password
        }
      })
      .then(res => {
        console.log("FROM RES", res.data.login);

        if (res.data.login) {
          window.localStorage.setItem("token", res.data.login);
          this.setState({ redirect: true });
          const tokenParts = res.data.login.split(".");
          const encodedPayload = tokenParts[1];
          const rawPayload = atob(encodedPayload);
          const user = JSON.parse(rawPayload);
          console.log("DECODED USER", user);
          this.props.getCurrentUser(user);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login_container">
        <form className="login_form" onSubmit={this.handleSubmit}>
          <label>
            <strong>Login</strong>
          </label>
          <input type="email" name="email" placeholder="Email " />
          <input type="password" name="password" placeholder="Password" />
          <input
            className="form_btn"
            type="submit"
            value="Submit"
            // onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default graphql(loginUserMutation, { name: "loginUserMutation" })(Login);
