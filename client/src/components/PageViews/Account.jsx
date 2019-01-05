import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";
import Order from "../Account/Order";

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
      </div>
    );
  }
}
export default Account;
