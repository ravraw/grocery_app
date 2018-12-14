import React, { Component } from "react";

class _Product extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <th>
            <img src={this.props.image} />
          </th>
          <th>
            <ul>
              <li>Product Name: {this.props.product_name}</li>
              <li>Unit Price: {this.props.unit_price}</li>
              <li>Store: {this.props.store}</li>
              <li>Department: {this.props.department}</li>
              <li>Category: {this.props.category}</li>
            </ul>
          </th>
        </tr>
      </tbody>
    );
  }
}

export default _Product;
