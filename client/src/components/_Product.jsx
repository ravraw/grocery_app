import React, { Component } from 'react';

class _Product extends Component {
  render() {
    const url = this.props.url;

    
    const {
      image,
      product_name,
      unit_price,
      store,
      department,
      category,
      id
    } = this.props.product;
    const renders =
      url === 'cart' ? (
        <th>
          <div>Quantity</div>
          <input
            type="text"
            placeholder={this.props.product.quantity}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.props.onChangeQuantity(id, event.target.value);
              }
            }}
          />
          <div>
            <button onClick={() => this.props.onPlus(id)}>+</button>
          </div>
          <div>
            <button onClick={() => this.props.onMinus(id)}>-</button>
          </div>
          <button onClick={() => this.props.onDelete(id)}>Delete</button>
        </th>
      ) : (
        <button onClick={() => this.props.onAdd(id)}>Add</button>
      );

    return (
      <tr>
        <th>
          <img src={image} />
        </th>
        <th>
          <ul>
            <li>Product Name: {product_name}</li>
            <li>Unit Price: {unit_price}</li>
            <li>Store: {store}</li>
            <li>Department: {department}</li>
            <li>Category: {category}</li>
          </ul>
        </th>
        {renders}
      </tr>
    );
  }
}

export default _Product;
