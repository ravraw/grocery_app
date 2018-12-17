import React, { Component } from "react";
import Product from "./Product";



class Category extends Component {
  
  render() {
    const Products = this.props.products.map(product => {
      return <Product product={product} />;
    });
    return (
      <div>
        <h2>Category Name: {this.props.name}</h2>
        {Products}
      </div>
    );
  }
}

export default Category;
