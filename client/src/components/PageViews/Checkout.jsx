import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoryProductsQuery } from "../../queries/queries";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../Checkout/CheckoutForm";

import Product from "../Product";
import Sidebar from "../Sidebar";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name", name);
    console.log("value", value);
  };
  // componentDidMount() {

  // }
  render(props) {
    console.log("PROPS FROM CHECKOUT ---", this.props.location.products);
    const storeName = this.props.location.storeName;
    const total = Number(this.props.match.params.total);
    const total1 = total.toFixed(2);
    const deliveryFee = 5.0;
    const deliveryFee1 = deliveryFee.toFixed(2);
    const gst = (total + deliveryFee) * 0.05;
    const gst1 = gst.toFixed(2);
    const allTotal = total + gst + deliveryFee;
    const allTotal1 = allTotal.toFixed(2);
    // let month = document.getElementById("month");
    // let day = document.getElementById("day");
    // let address = document.getElementById("address");
    return (
      <div className="checkout">
        <h3>Thank you for shopping with us.</h3>
        <h4>DELIVER DATE: </h4>

        {/* <textarea
          id="month"
          name="month"
          placeholder="Month"
          onChange={this.handleChange}
        />
        <textarea
          id="day"
          name="day"
          placeholder="Day"
          onChange={this.handleChange}
        /> */}
        <h4>BILLING ADDRESS: </h4>
        {/* <textarea
          id="address"
          name="address"
          placeholder="Calgary Address Only"
          onChange={this.handleChange}
        /> */}

        <p>Please complete the payment</p>
        <h4>SUBTOTAL: ${total1}</h4>
        <h4>DELIVERY FEE: ${deliveryFee1}</h4>
        <h4>GST (5%): ${gst1}</h4>
        <h4>TOTAL: ${allTotal1}</h4>
        <h4> </h4>

        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
              <CheckoutForm
                total={allTotal}
                products={this.props.location.products}
                storeName={storeName}
                // month={month}
                // day={day}
                // address={address}
                // onSubmit={this.handleSubmit}
              />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default Checkout;
// export default graphql(getCategoryProductsQuery, {
//   options: props => {
//     console.log('from props:', props);
//     return { variables: { id: props.match.params.id } };
//   }
// })(Checkout);
