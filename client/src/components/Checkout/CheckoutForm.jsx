import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { CardElement, injectStripe } from "react-stripe-elements";
import { graphql, compose } from "react-apollo";
import {
  addOrderMutation,
  addOrderItemMutation,
  emptyCartMutation
} from "../../queries/queries";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      products: this.props.products,
      redirect: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    const {
      sub_total,
      delivery_charge,
      gst_total,
      deliveryDate,
      deliveryTime,
      deliveryAddress,
      storeName,
      total
    } = this.props;
    if (deliveryDate && deliveryTime && deliveryAddress) {
      let response = await fetch("http://localhost:4000/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          description: "a new purchase!",
          token: "tok_visa",
          amount: parseInt(this.props.total),
          email: "ravinrawat.wd@gmail.com", //needs to be replaced with user's email who is logged in\
          deliveryAddress: deliveryAddress,
          deliveryDate: deliveryDate,
          deliveryTime: deliveryTime
        })
      });
      if (response.ok) {
        console.log("Purchase Complete!");
        //add order
        // hard coded user
        const user_id = 1;
        this.props
          .addOrderMutation({
            variables: {
              user_id,
              store: storeName,
              delivery_address: deliveryAddress,
              delivery_window: deliveryTime,
              sub_total,
              delivery_charge,
              gst_total,
              grand_total: total
            }
          })
          .then(order => {
            console.log("FROM CHECKOUT --- data", order.data.addOrder.id);
            this.props.products.map(product => {
              this.props.addOrderItemMutation({
                variables: {
                  product_id: product.id,
                  quantity: product.quantity,
                  price: product.price,
                  order_id: order.data.addOrder.id
                }
              });
            });
          })
          .then(result => {
            this.props.emptyCartMutation({ variables: { user_id } });
            this.setState({ redirect: true });
          });
      }
    } else if (!deliveryDate) {
      alert("Please choose a delivery Date!");
    } else if (!deliveryTime) {
      alert("Please choose a delivery Time!");
    } else if (!deliveryAddress) {
      alert("Please type a delivery Address!");
    }
  }

  render() {
    // console.log("PARAMS FOR THE CHECKOUTFORM", this.props);
    const {
      deliveryDate,
      deliveryTime,
      storeName,
      total,
      deliveryAddress,
      sub_total,
      delivery_charge,
      gst_total
    } = this.props;
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return (
        <Redirect
          to={{
            pathname: "/lastOrder",
            lastOrder: {
              deliveryDate,
              deliveryTime,
              storeName,
              sub_total,
              delivery_charge,
              gst_total,
              total,
              deliveryAddress
            }
          }}
        />
      );
    }

    return (
      <div className="checkout">
        <CardElement className="card_element" />

        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default injectStripe(
  compose(
    graphql(addOrderMutation, { name: "addOrderMutation" }),
    graphql(addOrderItemMutation, { name: "addOrderItemMutation" }),
    graphql(emptyCartMutation, { name: "emptyCartMutation" })
  )(CheckoutForm)
);
