import React, { Component } from "react";

class _Product extends Component {
  render() {
    const url = this.props.url;
    const {
      image,
      product_name,
      unit_price,
      store,
      department,
      category
    } = this.props.product;

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
        {url === "cart"&& (
          <th>
            <div>Quantity</div>
            <form>
              <input type="text" placeholder={this.props.product.quantity} />
            </form>
            <div>
              <button>+</button>
            </div>
            <div>
              <button>-</button>
            </div>
            <div>Delete</div>
          </th>
        )}
      </tr>
    );
  }
}

export default _Product;
