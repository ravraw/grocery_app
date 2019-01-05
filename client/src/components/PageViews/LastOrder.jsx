import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";

class LastOrder extends Component {
  constructor() {
    super();
    this.state = { shortestAddress: "", shortestDistance: "" };
    super();
    this.getDistances = this.getDistances.bind(this);
  }
  getDistances() {
    const { deliveryAddress, storeName } = this.props.location.lastOrder;
    // let myLocation = "";
    // navigator.geolocation.getCurrentPosition(position => {
    //   var latitude = position.coords.latitude;
    //   var longitude = position.coords.longitude;
    //   console.log("latitude", latitude);
    //   console.log("longitude", longitude);
    //   myLocation = latitude + "," + longitude;
    fetch("http://localhost:4000/distances", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        deliveryAddress: deliveryAddress,
        storeName: storeName
      })
    }).then(res => {
      res.json().then(data => {
        console.log("data", data);
        const { shortestDistance, shortestAddress } = data;
        // console.log("shortestDistance", shortestDistance);
        // console.log("shortestAddress", shortestAddress);
        // const shortest = { shortestAddress, shortestDistance };
        this.setState({ shortestAddress, shortestDistance });

        // return shortest;
      });
    });
  }
  componentDidMount() {
    // console.log("ahahahahahah", this.getDistances());
    this.getDistances();
  }
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

        <h3>DELIVERY DATE: {deliveryDate}</h3>
        <h3>DELIVERY TIME: {deliveryTime}</h3>
        <h3>DELIVERY ADDRESS: {deliveryAddress}</h3>
        <h3>STORE: {storeName}</h3>
        <h3>TOTAL: ${total}</h3>
        <h3>
          The groceries will be delivered from {this.state.shortestAddress}
        </h3>
        <h3>
          The distance from your shipping address is{" "}
          {this.state.shortestDistance} miles.
        </h3>
      </div>
    );
  }
}

export default LastOrder;
