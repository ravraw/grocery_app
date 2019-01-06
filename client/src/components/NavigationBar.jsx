import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Link to={`/account`}>Account Details</Link>
        <Link to={`/orderHistory`}>Order History</Link>
      </div>
    );
  }
}

export default NavigationBar;
