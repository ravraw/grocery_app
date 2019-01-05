import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";
import Order from "../OrderHistory/Order";

const userId = 12;
const email = "dongyingname@yahoo.com";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Account Detail</h2>
        <h2>Email: {email}</h2>
        <h2>Customer ID: {userId}</h2>

        <form>
          <h2>Personal Information</h2>
          <label>First Name: </label>
          <input type="text" />
          <label>Last Name: </label>

          <input type="text" />
          <label>Phone Number: </label>

          <input type="text" />
          <h2>Account Information: </h2>
          <label>Old Password: </label>

          <input type="password" />
          <label>New Password: </label>
          <input type="password" />
          <label>New Password Confirmation: </label>

          <input type="password" />
        </form>
      </div>
    );
  }
}
export default Account;
