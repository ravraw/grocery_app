import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.product.image} />
        <h3>Product Name: {this.props.product.name}</h3>
        <h3>Unit Price: {this.props.product.price}</h3>
        

      </div>
    );
  }
}

export default Product;
