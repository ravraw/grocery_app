import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoryProductsQuery } from "../../queries/queries";

import Product from "../Product";
// import Sidebar from "../Sidebar";
import Store from "../OrderPage/Store";

const storesId = [1, 2, 3, 4, 5];

class OrderPage extends Component {
  constructor() {
    super();
    this.state = {};
    this.displayStores = this.displayStores.bind(this);
  }
  displayStores() {
    const products = this.props.location.products; //products from cart, which are compared of.
    return storesId.map(storeId => {
      return <Store comparedProducts={products} storeId={storeId} />;
    });
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
    console.log("props from cart", this.props.location.products);

    return (
      <React.Fragment>
        <div>{this.displayStores()}</div>
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
