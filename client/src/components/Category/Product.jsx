import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { id, name, description, price } = this.props.product;
    return (
      <div key={id}>
        <img src="http://fosterclark.com/wp-content/uploads/2016/06/Banana-150x150.png" />
        <h2>{name}</h2>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
      </div>
    );
  }
}

export default Product;
