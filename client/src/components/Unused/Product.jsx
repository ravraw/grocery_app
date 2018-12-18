import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { id, image, name, price, quantity } = this.props.product;
    return (
      <div>
        <div>
          <img src={image} />
          <h3>Product Name: {name}</h3>
          <h3>Unit Price: {price}</h3>
        </div>
        <div>
          <input
            type="text"
            name="quantity"
            placeholder={quantity}
            onKeyPress={event =>
              this.props.onChangeQuantity(id, event.target.value)
            }
          />
          <button name="plus" onClick={() => this.props.onPlus(id)}>
            +
          </button>
          <button name="minus" onClick={() => this.props.onMinus(id)}>
            -
          </button>
          <button name="remove" onClick={() => this.props.onRemove(id)}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
