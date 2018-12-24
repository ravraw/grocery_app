import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
        <div className="header__logo">
          <a href="/" className="home_link">
            Grocery App
          </a>
        </div>
        <div className="header__search">
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
        <div className="header__nav">
          <Link to="/">Home</Link>
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
      </header>
    );
  }
}

export default Header;
