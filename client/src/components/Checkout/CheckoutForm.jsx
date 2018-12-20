import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("http://localhost:4000/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        description: "a new purchase!",
        token: "tok_visa",
        orderId: 11,
        amount: 99999,
        // customer: "Ying Dong"
      })
    });

    if (response.ok) console.log("Purchase Complete!");
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
