import Order from '../OrderHistory/Order.jsx';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import NavigationBar from '../NavigationBar.jsx';
import { getUserOrders } from '../../queries/queries';
const user_id = 1;
const email = 'dongyingname@yahoo.com';
const orders1 = [
  {
    id: 1,
    distance: '15 miles',
    deliveryAddress: '1111 8st SE, Calgary, Alberta,Canada',
    deliveryTime: '10:00 - 11:00',
    delieveryFee: '5',
    gst: '10',
    total: '100',
    subtotal: '90',
    userId: '1',
    email: 'hahaha@yahoo.com',
    orderTime: 'Decemeber 12th,2018',
    storeAddress: '9999 8st SW,Calgary,Alberta,Canada',
    products: [
      {
        image:
          'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png',
        name: 'banana',
        id: 1,
        price: 10,
        quantity: 5
      },
      {
        image:
          'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png',
        name: 'apple',
        id: 2,
        price: 12,
        quantity: 9
      },
      {
        image:
          'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png',
        name: 'orange',
        id: 1,
        price: 19,
        quantity: 3
      }
    ]
  },
  {
    id: 2,
    distance: '15 miles',
    deliveryAddress: '1111 8st SE, Calgary, Alberta,Canada',
    deliveryTime: '10:00 - 11:00',
    total: '100',
    subtotal: '90',
    userId: '1',
    gst: '10',

    email: 'hahaha@yahoo.com',
    orderTime: 'Decemeber 12th,2018',
    storeAddress: '9999 8st SW,Calgary,Alberta,Canada',
    products: [
      {
        image:
          'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png',
        name: 'banana',
        id: 1,
        price: 10,
        quantity: 5
      },
      {
        image:
          'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png',
        name: 'apple',
        id: 2,
        price: 12,
        quantity: 9
      },
      {
        image:
          'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png',
        name: 'orange',
        id: 1,
        price: 19,
        quantity: 3
      }
    ]
  }
];

class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {};
    this.displayOrder = this.displayOrder.bind(this);
  }
  displayOrder() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading History...</div>;
    } else {
      const orders = this.props.data.userOrders;
      return orders.map(order => {
        return <Order order={order} />;
      });
    }
  }
  render() {
    console.log('PROPS FROM ORDER_HISTORY', this.props.data.userOrders);
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <h2>Your Order History:</h2>
          <div>{this.displayOrder()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(getUserOrders, {
  options: props => {
    return { variables: { user_id: 1 } };
  }
})(OrderHistory);
