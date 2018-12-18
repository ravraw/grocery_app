import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, name, description, price } = this.props.product;
    console.log('from product -----', id, name, description, price);
    return (
      <Link to={`/product/${id}/show`}>
        <div key={id}>
          <img
            src="http://fosterclark.com/wp-content/uploads/2016/06/Banana-150x150.png"
            alt="dummy"
          />
          <h2>{name}</h2>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
        </div>
      </Link>
    );
  }
}

export default Product;
