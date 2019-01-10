import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <div className="user_nav">
        <Link to={`/account`}>Profile</Link>
        <Link to={`/orderHistory`}>History</Link>
      </div>
    );
  }
}

export default NavigationBar;
