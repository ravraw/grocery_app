import React, { Component } from "react";
import { Link } from "react-router-dom";

const id = 1;
class Header extends Component {
  handleSearch(event){
    event.preventDefault();
    
  }
  render() {
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

          <form>
            <input type="text" placeholder="Search Grocery" />
            <button type="submit" onClick={this.handleSearch}>Search</button>
          </form>
        </div>
        <div className="header_top_right">
          <a href="/login" className="login_link">
            Login
          </a>
          <a href="/user/new" className="register_link">
            Register
          </a>
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
