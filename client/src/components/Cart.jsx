import React, { Component } from "react";
import _Product from "./Partials/_Product";

const cartProducts = [
  {
    id: 1,
    quantity: 6,
    product_name: "carrot",
    unit_price: 99,
    store: "Walmart",
    department: "vegetable",
    image:
      "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
    category: "unpacked"
  },
  {
    id: 2,
    quantity: 12,
    product_name: "Pork",
    unit_price: 20,
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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleAdd(id) {
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
    const products = this.state.cartProducts.map(product => {
      return (
        <_Product
          product={product}
          url="cart"
          onChangeQuantity={this.handleChangeQuantity}
          onAdd={this.handleAdd}
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
      </main>
    );
  }
}

export default Cart;
