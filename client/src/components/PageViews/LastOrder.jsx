import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link, Redirect } from "react-router-dom";

class LastOrder extends Component {
  constructor() {
    super();
    this.state = { shortestAddress: "", shortestDistance: "" };
    this.getDistances = this.getDistances.bind(this);
  }
  getDistances() {
    const { deliveryAddress, storeName } = this.props.location.lastOrder;

    fetch("http://localhost:4000/distances", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        deliveryAddress: deliveryAddress,
        storeName: storeName
      })
    }).then(res => {
      res.json().then(data => {
        const { shortestDistance, shortestAddress } = data;

        this.setState({ shortestAddress, shortestDistance });

        // return shortest;
      });
    });
  }
  componentDidMount() {
    if (this.props.location.lastOrder) {
      // console.log("ahahahahahah", this.getDistances());
      this.getDistances();
    }
  }
  render() {
    if (!this.props.location.lastOrder) {
      return (
        <Redirect
          to={{
            pathname: "/orderHistory"
          }}
        />
      );
    } else {
      const {
        deliveryAddress,
        deliveryDate,
        deliveryTime,
        delivery_charge,
        gst_total,
        storeName,
        sub_total,
        total
      } = this.props.location.lastOrder;

      return (
        <div>
          <h1>Thank You For Your Purchase!</h1>
          <h3>
            Your groceries will be delivered from {storeName}{" "}
            {this.state.shortestAddress}.
          </h3>
          <h3>TO: {deliveryAddress}</h3>

          <h3>ON: {deliveryDate} </h3>
          <h3>BETWEEN: {deliveryTime}</h3>

          <h3>Here is the details of your order.</h3>
          <h3>SUBTOTAL: {sub_total.toFixed(2)}</h3>
          <h3>DELIVERY FEE: {delivery_charge.toFixed(2)}</h3>
          <h3>GST: {gst_total.toFixed(2)}</h3>
          <h3>TOTAL: ${total.toFixed(2)}</h3>

          <h3>FYI: We selected the closest {storeName}.</h3>
          <h3>
            The distance from your shipping address is{" "}
            {this.state.shortestDistance} miles.
          </h3>
        </div>
      );
    }
  }
}

export default LastOrder;
