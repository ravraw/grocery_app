import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.displayProducts = this.displayProducts.bind(this);
  }
  displayProducts() {
    const products = this.props.products;
    const userId = this.props.userId;
    const email = this.props.email;
    return products.map(product => {
      return (
        <div>
          <div>Name: {product.name}</div>
          <div>Unit Price: {product.price}</div>
          <div>Quantity: {product.quantity}</div>

          <div>name: {product.name}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Order ID: {this.props.id}</h1>
        <div>{this.displayProducts()}</div>
      </div>
    );
  }
}
export default Order;
