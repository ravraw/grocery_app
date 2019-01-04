import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

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

  async submit(ev) {
    const {
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
          email: "dongyingname@yahoo.com" //needs to be replaced with user's email who is logged in
        })
      });
      if (response.ok) {
        console.log("Purchase Complete!");
        //add order
        // hard coded user
        const user_id = 1;
        this.props
          .addOrderMutation({ variables: { user_id } })
          .then(data => {
            this.props.products.map(product => {
              console.log(typeof product.price);
              this.props.addOrderItemMutation({
                variables: {
                  product_id: product.id,
                  quantity: product.quantity,
                  price: product.price,
                  order_id: 1
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
    console.log("PARAMS FOR THE CHECKOUTFORM", this.props);
    const {
      deliveryDate,
      deliveryTime,
      storeName,
      total,
      deliveryAddress
    } = this.props;
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return (
        <Redirect
          to={{
            pathname: "/LastOrder",
            lastOrder: {
              deliveryDate,
              deliveryTime,
              storeName,
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
        <label>Name on Card</label>
        <input
          type="text"
          id="cname"
          name="cardname"
          placeholder="John More Doe"
        />
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
