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
    console.log(this.props.deliveryDate);
    console.log(this.props.deliveryTime);

    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("http://localhost:4000/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        description: "a new purchase!",
        token: "tok_visa",
        orderId: 11,
        // amount: parseInt(this.props.total),
        amount: 1111,
        customer: "Ying Dong"
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
  }

  render() {
    console.log("PARAMS FROM THE CHECKOUTFORM", this.props);
    // if (this.state.complete) return <h1>Purchase Complete</h1>;

    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to="/" />;
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
