import React, { Component } from 'react';
import Product from '../Product';
import CartItem from '../CartItem';
import { graphql } from 'react-apollo';
import { getCartQuery } from '../../queries/queries';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

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
    const {
      id,
      orderItems,
      sub_total,
      gst_total,
      grand_total
    } = this.props.order;
    const productArr = orderItems.map(product => {
      const { id, name, price, quantity, image, store } = product;
      return (
        <div key={id} className="cart_item">
          <Link to={`/product/${id}/show`}>
            <img
              src={image}
              alt="dummy"
              style={{ height: '150px', width: '150px' }}
            />
          </Link>
          <div className="cart_item__details">
            <h4>{name}</h4>
            <p>
              Unit Price:$ {price} Quantity: {quantity} Total Amount:{' '}
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
        <h2>Subtotal: ${sub_total} </h2>
        <h2>GST: ${gst_total} </h2>
        <h2>Total: ${grand_total}</h2>
      </div>
    );
  }
  render() {
    const {
      id,
      delivery_address,
      delivery_window,
      grand_total,
      created_at,
      store
    } = this.props.order;
    return (
      <div>
        <div>
          <h1>Order#: {id}</h1>
          <h2>date: {created_at}</h2>
          <h3>Bill amount: ${grand_total}</h3>
          <h3>Delivery Address: {delivery_address}</h3>
          <h3>delivery time: {delivery_window}</h3>
          <h3>Store: {store}</h3>
        </div>
        <div>
          <button onClick={this.onOpenModal}>Details</button>{' '}
          <Modal open={this.state.open} onClose={this.onCloseModal} center>
            {this.displayOrderDetails()}
          </Modal>
        </div>
      </div>
    );
  }
}
export default Order;
