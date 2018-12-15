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
      //should use fethed Cart data from database; now uses hardcoded cartProducts
      cartProducts: cartProducts
    };
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  // checkout() {}

  handleChangeQuantity = (id, quantity) => {
    console.log('id',id,'quantity',quantity)
    const cartProductIndex = this.state.cartProducts.findIndex(
      cp => cp.id === id
    );
    console.log("cartProductIndex",cartProductIndex)
    const newCartProducts = this.state.cartProducts;
    newCartProducts[cartProductIndex] = {
      ...newCartProducts[cartProductIndex],
      quantity
    };
    this.setState({
      CartProducts: newCartProducts
    });
    console.log("state product", this.state.cartProducts[cartProductIndex]);
  };

  render() {
    // id = this.props.match.params.cart;

    const products = [];
    this.state.cartProducts.forEach(product => {
      products.push(
        <_Product
          product={product}
          url="cart"
          onChangeQuantity={this.handleChangeQuantity}
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
