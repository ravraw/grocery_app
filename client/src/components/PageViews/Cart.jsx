import React, { Component } from "react";
import Product from "../Cart/Product";

let cartProducts = [
  {
    id: 1,
    quantity: 6,
    name: "carrot",
    price: 99,
    store: "Walmart",
    department: "vegetable",
    image:
      "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
    category: "unpacked"
  },
  {
    id: 2,
    quantity: 12,
    name: "Pork",
    price: 20,
    store: "Superstore",
    department: "meat",
    image:
      "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
    category: "packaged"
  }
];
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: cartProducts
    };

    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  //Beside updating the state, it needs to change the quantity of the product in cart database
  handlePlus(id) {
    const productIndex = cartProducts.findIndex(cp => cp.id === id);
    const newCartProducts = cartProducts;
    newCartProducts[productIndex] = {
      ...newCartProducts[productIndex],
      quantity: newCartProducts[productIndex].quantity + 1
    };

    this.setState({ cartProducts: newCartProducts });
  }

  //Beside updating the state, it needs to change the quantity of the product in cart database
  handleMinus(id) {
    const productIndex = cartProducts.findIndex(cp => cp.id === id);

    const newCartProducts = cartProducts;
    newCartProducts[productIndex] = {
      ...newCartProducts[productIndex],
      quantity: newCartProducts[productIndex].quantity - 1
    };

    this.setState({ cartProducts: newCartProducts });
  }

  //Beside updating the state, it needs to change the quantity of the product in cart database
  handleRemove(id) {
    const productIndex = cartProducts.findIndex(cp => cp.id === id);
    const newCartProducts = cartProducts;

    newCartProducts.splice(productIndex, 1);
    this.setState({ cartProducts: newCartProducts });
  }

  //Beside updating the state, it needs to change the quantity of the product in cart database
  handleChangeQuantity = (id, quantity) => {
    const productIndex = cartProducts.findIndex(cp => cp.id === id);
    const newCartProducts = cartProducts;
    newCartProducts[productIndex] = {
      ...newCartProducts[productIndex],
      quantity
    };
    this.setState({ cartProducts: newCartProducts });
  };

  render() {
    const productsTotal = () => {
      const multiples = cartProducts.map(({ quantity, price }) => {
        return quantity * price;
      });
      return multiples.reduce((a, b) => a + b);
    };

    const deliveryFee = productsTotal() * 0.1;
    const gst = (productsTotal() + deliveryFee) * 0.05;
    const subtotal = productsTotal() + deliveryFee + gst;

    const products = cartProducts.map(product => {
      return (
        <Product
          product={product}
          onChangeQuantity={this.handleChangeQuantity}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
          onRemove={this.handleRemove}
        />
      );
    });
    return (
      <React.Fragment>
        <div>
          <h2>This Is Your Cart!</h2>
          {products}
        </div>
        <div>
          <div>Products Total:{productsTotal().toFixed(2)}</div>
          <div>Delivery Fee:{deliveryFee.toFixed(2)}</div>
          <div>GST:{gst.toFixed(2)}</div>
          <div>Subtotal:{subtotal.toFixed(2)}</div>
          <div>
            <input type="text" placeholder="Driver's Tips" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
