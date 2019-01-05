import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-responsive-modal";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.displayOrderDetails = this.displayOrderDetails.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  // handleClick(event) {}
  displayOrderDetails() {
    const { id, products, subtotal, gst, total } = this.props.order;
    const productArr = products.map(product => {
      const { id, name, price, quantity, image, store } = product;
      return (
        <div key={id} className="cart_item">
          <Link to={`/product/${id}/show`}>
            <img
              src={image}
              alt="dummy"
              style={{ height: "150px", width: "150px" }}
            />
          </Link>
          <div className="cart_item__details">
            <h4>{name}</h4>
            <p>
              Unit Price:$ {price} Quantity: {quantity} Total Amount:{" "}
              {price * quantity}
            </p>
            <p />
            <p />
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>Order ID: {id}</h2>
        {productArr}
        <h2>Subtotal: {subtotal} </h2>
        <h2>GST: {gst} </h2>
        <h2>Total: {total}</h2>
      </div>
    );
  }
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
          <button onClick={this.onOpenModal}>Details</button>{" "}
          <Modal open={this.state.open} onClose={this.onCloseModal} center>
            {this.displayOrderDetails()}
          </Modal>
        </div>
      </div>
    );
  }
}
export default Order;
