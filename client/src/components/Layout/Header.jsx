import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getCartQuery } from '../../queries/queries';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.svg';

const id = 1;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchPath: '/',
      redirect: false,
      count: null
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
  displayCartCount() {
    let data = this.props.data;
    if (data.loading) {
      return <span>0</span>;
    } else {
      // this.setState({ count: data.shoppingCart.length });
      return <span>{data.shoppingCart.length}</span>;
    }
  }
  // componentDidMount() {
  //   console.log('REFETCH----', this.props);
  //   this.props.data.refetch();
  //   this.displayCartCount();
  // }

  render() {
    console.log('FROM HEADER', this.props);
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to={`/products/${this.state.searchPath}`} />;
    }
    return (
      <header className="header">
        <div className="header__logo">
          <a href="/" className="home_link">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <form className="header__search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search Grocery"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <div className="header__nav">
          <Link to="/">Home</Link>
          <Link to={`/login`} className="login_link">
            Login
          </Link>
          <Link to={`/user/new`} className="registration_link">
            Register
          </Link>
          <Link to={`/cart/${id}`} className="cart_link">
            <span className="cart_count">{this.displayCartCount()}</span>
            <img
              src={cart}
              alt="delete"
              style={{ height: '35px', width: '35px' }}
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default graphql(getCartQuery, {
  options: props => {
    // console.log('from props:', props);
    return { variables: { id: 1 } };
  }
})(Header);
