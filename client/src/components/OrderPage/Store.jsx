import React, { Component } from "react";

import Product from "../Product";

class Store extends Component {
  constructor() {
    super();
    this.state = { fetchedProducts: [] };
    this.displayProducts = this.displayProducts.bind(this);
  }

  displayProducts() {
    //use storeId to fetch products for that store.
    const storeId = this.props.storeId;
    const comparedProducts = this.props.comparedProducts;

    //use the names or ids to fetch products from database
    const namesOfComparedProducts = comparedProducts.map(product => {
      return product.name;
    });
    const idsOfComparedProducts = comparedProducts.map(product => {
      return product.id;
    });
    console.log('names of compared products', namesOfComparedProducts);
    console.log('ids of compared products', idsOfComparedProducts);


    // const fetchedProducts = 'fetch, of store of id===storeId, products of names===namesOfComparedProducts'

    // this.setState({fetchedProducts:fetchedProducts});
    // return fetchedProducts.map(product => {
    //   return <Product product={product} />; //do we still need buttons?
    // });
  }
  render() {
    // const total = this.state.fetchedProducts.reduce((a,b)=>{
    //   return a+b;
    // })
    return (
      <div>
        <div>{this.displayProducts()}</div>
        <div>{/* <h2>Total: {total}</h2> */}</div>
      </div>
    );
  }
}

export default Store;
