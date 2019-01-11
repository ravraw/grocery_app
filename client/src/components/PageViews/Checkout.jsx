import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';

import CheckoutForm from '../Checkout/CheckoutForm';
class Checkout extends Component {
  constructor() {
    super();
    this.state = { date: '', time: '', address: '' };
    this.handleChange = this.handleDateChange.bind(this);
    this.displayTimeSelection = this.displayTimeSelection.bind(this);
  }
  handleDateChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  // componentDidMount() {
  displayTimeSelection() {
    const timeArr = [];
    for (let time = 9; time <= 21; time++) {
      timeArr.push(
        <option>
          {time}:00 - {time + 1}:00
        </option>
      );
    }
    return (
      <select name="time" onChange={this.handleChange}>
        {timeArr}
      </select>
    );
  }
  // }
  render(props) {
    if (!this.props.location.products) {
      return (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      );
    } else {
      console.log('PROPS FROM CHECKOUT ---', this.props.location.products);
      const storeName = this.props.location.storeName;
      const total = Number(this.props.match.params.total);
      const total1 = total.toFixed(2);
      const deliveryFee = 5.0;
      const deliveryFee1 = deliveryFee.toFixed(2);
      const gst = (total + deliveryFee) * 0.05;
      const gst1 = gst.toFixed(2);
      const allTotal = total + gst + deliveryFee;
      const allTotal1 = allTotal.toFixed(2);
      const currentDate = new Date();
      const currentDate1 = currentDate.toISOString().split('T')[0];

      return (
        <div className="checkout">
          <div className="checkout_info">
            <h2>Please fill the delivery details.</h2>
            <div className="delivery_details">
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  id="date"
                  min={currentDate1}
                  onChange={this.handleChange}
                />
              </label>
              <label> Time: {this.displayTimeSelection()} </label>
              <label>
                Address:
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Calgary Address Only"
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="payment_details">
              <label>
                Subtotal:<span> ${total1}</span>
              </label>
              <label>
                Delivery fee:<span> ${deliveryFee1}</span>
              </label>
              <label>
                Tax (5%):<span> ${gst1}</span>
              </label>
              <label>
                Total: <span>${allTotal1}</span>
              </label>
            </div>

            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
              <div className="example">
                <h3>Please complete the payment</h3>
                <Elements>
                  <CheckoutForm
                    products={this.props.location.products}
                    storeName={storeName}
                    deliveryTime={this.state.time}
                    deliveryDate={this.state.date}
                    deliveryAddress={this.state.address}
                    sub_total={total}
                    delivery_charge={deliveryFee}
                    gst_total={gst}
                    total={allTotal}
                  />
                </Elements>
              </div>
            </StripeProvider>
          </div>
        </div>
      );
    }
  }
}

export default Checkout;
// export default graphql(getCategoryProductsQuery, {
//   options: props => {
//     console.log('from props:', props);
//     return { variables: { id: props.match.params.id } };
//   }
// })(Checkout);
