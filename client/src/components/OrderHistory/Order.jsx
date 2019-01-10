import React, { Component } from "react";

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
    const {
      id,
      orderItems,
      sub_total,
      gst_total,
      grand_total
    } = this.props.order;
    const productArr = orderItems.map(product => {
      const { id, name, price, quantity, image } = product;
      return (
        <div key={id} className="pastOrder_item">
          <img
            src={image}
            alt="dummy"
            style={{ height: "75px", width: "75px" }}
          />
          <div className="pastOrder_detail">
            <span>{name}</span>
            <span>Price:$ {price}</span>
            <span>Qty: {quantity}</span>
            <span>Amount:{price * quantity}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="pastOrder_display">
        <span>Order # {id}</span>
        {productArr}
        <span>Subtotal: ${sub_total} </span>
        <span>GST: ${gst_total} </span>
        <span>Total: ${grand_total}</span>
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

    const date = new Date(Number(created_at)).toLocaleDateString();

    console.log(date);
    return (
      <div className="order_info">
        <span className="order_info__id">{id}</span>
        <span className="order_info__date">{date}</span>
        <span className="order_info__total">${grand_total}</span>
        <span className="order_info__add">{delivery_address}</span>
        <span className="order_info__window">{delivery_window}</span>
        <span className="order_info__store">{store}</span>

        <button
          onClick={this.onOpenModal}
          className="order_info__detail order_info__btn"
        >
          Details
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          {this.displayOrderDetails()}
        </Modal>
      </div>
    );
  }
}
export default Order;
