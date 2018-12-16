import React, { Component } from "react";
import _Product from "./Partials/_Product";

const cartProducts = [
  {
    id: 1,
    quantity: 6,
    productName: "carrot",
    unitPrice: 99,
    store: "Walmart",
    department: "vegetable",
    image:
      "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
    category: "unpacked"
  },
  {
    id: 2,
    quantity: 12,
    productName: "Pork",
    unitPrice: 20,
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
      //should use fetched Cart data from database; now uses hardcoded cartProducts
      cartProducts: cartProducts
    };
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlePlus(id) {
    const productIndex = this.state.cartProducts.findIndex(cp => cp.id === id);

    const newCartProducts = this.state.cartProducts;
    newCartProducts[productIndex] = {
      ...newCartProducts[productIndex],
      quantity: newCartProducts[productIndex].quantity + 1
    };
    this.setState({
      cartProducts: newCartProducts
    });
  }
  

  handleMinus(id) {
    const productIndex = this.state.cartProducts.findIndex(cp => cp.id === id);

    const newCartProducts = this.state.cartProducts;
    newCartProducts[productIndex] = {
      ...newCartProducts[productIndex],
      quantity: newCartProducts[productIndex].quantity - 1
    };
    this.setState({
      cartProducts: newCartProducts
    });
  }

  handleDelete(id) {
    const productIndex = this.state.cartProducts.findIndex(cp => cp.id === id);
    const newCartProducts = this.state.cartProducts;

    newCartProducts.splice(productIndex, 1);
    this.setState({ cartProducts: newCartProducts });
  }

  handleChangeQuantity = (id, quantity) => {
    const productIndex = this.state.cartProducts.findIndex(cp => cp.id === id);
    const newCartProducts = this.state.cartProducts;
    newCartProducts[productIndex] = {
      ...newCartProducts[productIndex],
      quantity
    };
    this.setState({
      cartProducts: newCartProducts
    });
  };

  render() {
    const productsTotal = () => {
      const multiples = this.state.cartProducts.map(
        ({ quantity, unitPrice }) => {
          return quantity * unitPrice;
        }
      );
      return multiples.reduce((a, b) => a + b);
    };

    const deliveryFee = productsTotal() * 0.1;
    const gst = (productsTotal() + deliveryFee) * 0.05;
    const subtotal = productsTotal() + deliveryFee + gst;

    const products = this.state.cartProducts.map(product => {
      return (
        <_Product
          product={product}
          url="cart"
          onChangeQuantity={this.handleChangeQuantity}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
          onDelete={this.handleDelete}
        />
      );
    });
    return (
      <main className="main cart_main">
        <div>
          <h2>This Is Your Cart!</h2>
          <table>
            <tbody>{products}</tbody>
          </table>
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
      </main>
    );
  }
}

export default Cart;
