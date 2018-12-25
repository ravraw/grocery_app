import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      //should use fetched Cart data from database; now uses hardcoded cartProducts
      // cartProducts: cartProducts
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      redirect: true
    });
    // event.preventDefault();
    // console.log('submitted!!adkasdk;naslkdn;askdnaksldn;ldnslkand;lkasndl;ksandsakl;nsakldns;aldnsklnasl;kdnsaldasd');
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login_container">
        <form className="login_form">
          <label>Login</label>
          <input type="text" name="email" placeholder="Email " />
          <input type="text" name="password" placeholder="Password" />
          <input
            className="form_btn"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;
