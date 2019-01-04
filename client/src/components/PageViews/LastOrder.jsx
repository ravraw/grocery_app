import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";

class LastOrder extends Component {
  componentDidMount() {}
  render() {
    console.log("lastOrder", this.props.location.lastOrder);
    const {
      deliveryDate,
      deliveryTime,
      deliveryAddress,
      storeName,
      total
    } = this.props.location.lastOrder;

    return (
      <div>
        <h1>Thank You For Your Purchase!</h1>

        <h2>DELIVERY DATE: {deliveryDate}</h2>
        <h2>DELIVERY TIME: {deliveryTime}</h2>
        <h2>DELIVERY ADDRESS: {deliveryAddress}</h2>
        <h2>STORE: {storeName}</h2>
        <h2>TOTAL: ${total}</h2>
      </div>
    );
  }
}

export default LastOrder;
