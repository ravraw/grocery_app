import Order from "../OrderHistory/Order.jsx";
import React, { Component } from "react";
import NavigationBar from "../NavigationBar.jsx";
const userId = 12;
const email = "dongyingname@yahoo.com";
const orders = [
  {
    id: 1,
    distance: "15 miles",
    deliveryAddress: "1111 8st SE, Calgary, Alberta,Canada",
    deliveryTime: "10:00 - 11:00",
    total: "100",
    userId: "1",
    email: "hahaha@yahoo.com",
    orderTime: "Decemeber 12th,2018",
    storeAddress: "9999 8st SW,Calgary,Alberta,Canada",
    products: [
      {
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png",
        name: "banana",
        id: 1,
        price: 10,
        quantity: 5
      },
      {
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png",
        name: "apple",
        id: 2,
        price: 12,
        quantity: 9
      },
      {
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png",
        name: "orange",
        id: 1,
        price: 19,
        quantity: 3
      }
    ]
  },
  {
    id: 2,
    distance: "15 miles",
    deliveryAddress: "1111 8st SE, Calgary, Alberta,Canada",
    deliveryTime: "10:00 - 11:00",
    total: "100",
    userId: "1",
    email: "hahaha@yahoo.com",
    orderTime: "Decemeber 12th,2018",
    storeAddress: "9999 8st SW,Calgary,Alberta,Canada",
    products: [
      {
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png",
        name: "banana",
        id: 1,
        price: 10,
        quantity: 5
      },
      {
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png",
        name: "apple",
        id: 2,
        price: 12,
        quantity: 9
      },
      {
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cca2bb99-63de-4d38-9051-f49c09a14abd.png",
        name: "orange",
        id: 1,
        price: 19,
        quantity: 3
      }
    ]
  }
];
class OrderHistory extends Component {
  displayOrder() {
    return orders.map(order => {
      return <Order order={order} />;
    });
  }
  render() {
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

export default OrderHistory;
