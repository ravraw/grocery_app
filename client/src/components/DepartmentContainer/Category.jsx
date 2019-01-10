import React, { Component } from "react";

import Product from "../Product";

class Category extends Component {
  render() {
    const { name, products } = this.props.category;
    const Products = products.map(product => {
      return <Product key={product.id} product={product} />;
    });
    return (
      <div className="category_showcase">
        <h3 className="category_showcase__name">{name}</h3>
        <div className="category_showcase__products">{Products}</div>
      </div>
    );
  }
}

export default Category;
