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

    // this.displayProducts = this.displayProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {}
  // displayProducts() {
  //   const products = this.props.products;
  //   const userId = this.props.userId;
  //   const email = this.props.email;
  //   return products.map(product => {
  //     return (
  //       <div>
  //         <div>Name: {product.name}</div>
  //         <div>Unit Price: {product.price}</div>
  //         <div>Quantity: {product.quantity}</div>

  //         <div>name: {product.name}</div>
  //       </div>
  //     );
  //   });
  // }
  render() {
    const {
      id,
      distance,
      deliveryAddress,
      deliveryTime,
      total,
      userId,
      email,
      orderTime,
      products,
      storeAddress
    } = this.props.order;
    return (
      <div>
        <div>
          <h1>Order ID: {id}</h1>
          <h2>Time Ordered: {orderTime}</h2>
          <h3>Total Amount Paid: {total}</h3>
          <h3>Delivery Address: {deliveryAddress}</h3>

          <h3>Delivery Time: {deliveryTime}</h3>
          <h3>Delivery Distance: {distance}</h3>
          <h3>Delivery Coming From: {storeAddress}</h3>
        </div>
        <div>
          <button onClick={this.handleClick}>Details</button>
        </div>
      </div>
    );
  }
}
export default Order;
