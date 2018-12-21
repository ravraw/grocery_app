import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

const id = 1;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchPath: '/',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    const path = event.target.value;
    console.log('searchpath', path);
    this.setState({ searchPath: path });
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to={`/products/${this.state.searchPath}`} />;
    }
    return (
      <header className="header">
        <div className="header__topleft">
          <a href="/" className="home_link">
            Grocery App
          </a>
        </div>
        <div className="header_middle">
          <img
            src="https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png"
            alt="Smiley face"
            height="42"
            width="42"
          />

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Search Grocery"
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="header_top_right">
          <Link to={`/login`} className="login_link">
            Login
          </Link> 
          <Link to={`/user/new`} className="registration_link">
            Register
          </Link>
          <Link to={`/cart/${id}`} className="cart_link">
            Cart
          </Link>
        </div>
        <div className="header_navigation">
          <Link to="/">Home</Link>
        </div>
      </header>
    );
  }
}

export default Header;
