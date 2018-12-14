import React, { Component } from "react";

class _Product extends Component {
  render() {
    console.log("_props for _product", this.props);
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
      </tr>
    );
  }
}

export default _Product;
