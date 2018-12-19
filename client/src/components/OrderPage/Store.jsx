import React, { Component } from "react";

import Product from "../Product";

class Store extends Component {
  constructor() {
    super();
    this.state = { fetchedProducts: [] };
    // this.displayProducts = this.displayProducts.bind(this);
  }

  // displayProducts() {
    //use storeId to fetch products for that store.
    // const storeId = this.props.storeId;
    // const comparedProducts = this.props.comparedProducts;
    // console.log("storeId", storeId);
    // console.log("comparedProducts", comparedProducts);

    // use the names or ids to fetch products from database
    // const namesOfComparedProducts = comparedProducts.map(product => {
    //   return product.name;
    // });
    // const idsOfComparedProducts = comparedProducts.map(product => {
    //   return product.id;
    // });
    // console.log("names of compared products", namesOfComparedProducts);
    // console.log("ids of compared products", idsOfComparedProducts);

    // const fetchedProducts = 'fetch, of store of id===storeId, products of names===namesOfComparedProducts'

    // return fetchedProducts.map(product => {
    //   return <Product product={product} />; //do we still need buttons?
    // });
  // }
  render() {
    const total = 10000;
    // const total = fetchedProducts.reduce((a,b)=>{
    //   return a+b;
    // })
    return (
      <div>
        <div>Store!!!!!</div>
        {/* <div>{this.displayProducts()}</div> */}
        <div>{/* <h2>Total: {total}</h2> */}</div>
        <div>
          <button onClick={()=>this.props.onCheckout(total)}>
            Select This Store & Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default Store;
