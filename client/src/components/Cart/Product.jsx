import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.product.image} />
          <h3>Product Name: {this.props.product.name}</h3>
          <h3>Unit Price: {this.props.product.price}</h3>
        </div>
        <div>
          
          <input type="text" name="quantity" placeholder={this.props.product.quantity}/>
          <button name="plus">+</button>
          <button name="minus">-</button>
          <button name="remove">Remove</button>
        </div>
      </div>
    );
  }
}

export default Product;
