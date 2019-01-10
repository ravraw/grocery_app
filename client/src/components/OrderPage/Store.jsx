import React, { Component } from "react";
import { Link } from "react-router-dom";

import CompareItem from "../CompareItem";

class Store extends Component {
  // constructor() {
  //   super();
  //   this.state = { fetchedProducts: [] };
  //   this.displayProducts = this.displayProducts.bind(this);
  // }

  render() {
    // console.log("FROM STORE COMPONENT:", this.props);
    const productList = this.props.storeProducts.map(product => {
      // console.log("Product", product);
      return <CompareItem key={product.id} product={product} />;
    });
    return (
      <div className="store_wrapper">
        <div className="store">
          <h2>{this.props.storeProducts[0].store.name || "Items"}</h2>
          {productList}
          <h2>${this.props.total.toFixed(2)}</h2>
        </div>
        <hr />
        <Link
          to={{
            pathname: `/checkout/${this.props.total}`,
            products: this.props.storeProducts,
            storeName: this.props.storeProducts[0].store.name
          }}
        >
          <div className="order_btn">ORDER</div>
        </Link>
      </div>
    );
  }
}

export default Store;

//  <Link to={`/checkout/${this.props.total}`}>
