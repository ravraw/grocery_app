import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_top_left">
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
          {/* still need action */}
          <form>
            <input type="text" placeholder="Search Grocery" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="header_top_right">
          <a href="/login" className="login_link">
            Login
          </a>
          <a href="/users/new" className="register_link">
            Register
          </a>
          <a href="/cart" className="cart_link">
            Cart
          </a>
        </div>
        <div className="header_navigation">
          <tr className="navigation_table">
            <th className="navigation_link">
              <Link to="/">Home</Link>
            </th>
            <th className="navigation_link">
              <Link to="/Departments">Departments</Link>
            </th>
            <th className="navigation_link">
              <Link to="/stores">Stores</Link>
            </th>
          </tr>
        </div>
      </header>
    );
  }
}

export default Header;
