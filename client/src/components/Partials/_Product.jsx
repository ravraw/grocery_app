import React, { Component } from "react";

class _Product extends Component {
  render() {
    return (
      <tr>
        <th>
          <img src="https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png" />
        </th>
        <th>
          <ul>
            <li>Product Name: Carrot</li>
            <li>Unit Price: $99/pound</li>
            <li>Store: Walmart 99st</li>
            <li>Department: Vegetable</li>
          </ul>
        </th>
      </tr>
    );
  }
}

export default _Product;
