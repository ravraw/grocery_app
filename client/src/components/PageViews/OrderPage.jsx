import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoryProductsQuery } from "../../queries/queries";

import Product from "../Product";
import Sidebar from "../Sidebar";

class OrderPage extends Component {
  displayProducts() {
    // let products = this.props.products;
    // console.log("data from OrderPage", products[0]);
    // if (data.loading) {
    //   return <div>Loading Products...</div>;
    // } else {
    //   return data.categories[0].products.map(product => {
    //     return <Product product={product} />;
    //   });
    // }
  }
  render() {
    console.log("props from cart", this.props.products);

    return (
      <React.Fragment>
        {/* <div>{this.displayProducts()}</div> */}
        <div>{this.displayProducts()}</div>
      </React.Fragment>
    );
  }
}

export default OrderPage;
// export default graphql(getCategoryProductsQuery, {
//   options: props => {
//     console.log("from props:", props);
//     return { variables: { id: props.match.params.id } };
//   }
// })(OrderPage);
