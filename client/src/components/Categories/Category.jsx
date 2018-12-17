import React, { Component } from 'react';

import Product from './Product';

class Category extends Component {
  render() {
    const { id, name, products } = this.props.category;
    const Products = products.map(product => {
      return <Product key={product.id} product={product} />;
    });
    return (
      <div>
        <h2>Category Name: {name}</h2>
        {Products}
      </div>
    );
  }
}

export default Category;
