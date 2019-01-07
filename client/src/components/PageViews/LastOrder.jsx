import React, { Component } from 'react';

class LastOrder extends Component {
  constructor() {
    super();
    this.state = { shortestAddress: '', shortestDistance: '' };
    super();
    this.getDistances = this.getDistances.bind(this);
  }
  getDistances() {
    const { deliveryAddress, storeName } = this.props.location.lastOrder;

    fetch('http://localhost:4000/distances', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        deliveryAddress: deliveryAddress,
        storeName: storeName
      })
    }).then(res => {
      res.json().then(data => {
        const { shortestDistance, shortestAddress } = data;

        this.setState({ shortestAddress, shortestDistance });
      });
    });
  }
  componentDidMount() {
    // console.log("ahahahahahah", this.getDistances());
    this.getDistances();
  }
  render() {
    console.log('lastOrder', this.props.location.lastOrder);
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
      <div className="lastOrder">
        <h1>Thank You For Your Purchase!</h1>
        <div className="lastOrder_details">
          <label>
            delivered from{' '}
            <span>
              {storeName}
              {this.state.shortestAddress}.
            </span>
          </label>
          <label>
            delivery Address <span>{deliveryAddress}</span>
          </label>
          <label>
            distance <span>{this.state.shortestDistance} miles.</span>
          </label>

          <label>
            delivery Date <span>{deliveryDate}</span>{' '}
          </label>
          <label>
            delivery Time <span> {deliveryTime}</span>
          </label>

          <label>
            Subtotal <span>${sub_total.toFixed(2)}</span>
          </label>
          <label>
            Delivery Fee <span>${delivery_charge.toFixed(2)}</span>
          </label>
          <label>
            Tax(Gst)<span> ${gst_total.toFixed(2)}</span>
          </label>
          <label>
            Total Amount <span>${total.toFixed(2)}</span>
          </label>
        </div>
      </div>
    );
  }
}

export default LastOrder;
