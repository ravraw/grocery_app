import React, { Component } from "react";
import _Product from "./Partials/_Product";

const cart_products = [
  {
    quantity: 6,
    product_name: "carot",
    unit_price: 99,
    store: "Walmart",
    department: "vegetable",
    image:
      "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
    category: "unpacked"
  },
  {
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
      //should use fethed Cart data from database; now uses hardcoded cart_products
      cart_products: cart_products
    };
  }
  render() {
    const products = [];
    this.state.cart_products.forEach(product => {
      products.push(<_Product product={product} />);
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
