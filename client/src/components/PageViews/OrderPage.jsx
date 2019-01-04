import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProductQuery } from "../../queries/queries";
import Store from "../OrderPage/Store";

class OrderPage extends Component {
  constructor() {
    super();
    this.state = { redirect: false, total: 0, email: "useremail@yahoo.com" };
    this.displayStores = this.displayStores.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
  handleCheckout(total) {
    // console.log("totalamount", total);
    this.setState({ total: total });
    this.setState({ redirect: true });

    //Takes subtotal and Redirect to checkout page
  }

  displayStores() {
    const data = this.props.data;
    // console.log("DATA FROM ORDER PAGE", this.props);
    const products = this.props.location.products; //products from cart, which are cd of.
    const quantities = [];
    const namesOfComparedProducts = products.map(product => {
      quantities.push(product.quantity);
      return (
        <div key={product.id.toString()}>
          <img
            src={`${product.image}`}
            alt="some"
            style={{ height: "50px", width: "50px" }}
          />
          <p>{product.name}</p>
          <p>{product.quantity}</p>
          <p>{product.description}</p>
        </div>
      );
    });
    const storeWiseProducts = { store1: [], store2: [] };
    if (data.loading) {
      return <div>Loading store Products...</div>;
    } else {
      data.products.map((product, index) => {
        let quantityIndex = Math.floor(index / 2);
        if (product.store.id === "1") {
          // console.log("store1");
          storeWiseProducts.store1.push({
            ...product,
            quantity: quantities[quantityIndex]
          });
        }

        if (product.store.id === "2") {
          // console.log("store2");
          storeWiseProducts.store2.push({
            ...product,
            quantity: quantities[quantityIndex]
          });
        }
      });
    }
    const arr = [];
    for (let store in storeWiseProducts) {
      const total = storeWiseProducts[store].reduce((acc, cur, index) => {
        return acc + cur.price * quantities[index];
      }, 0);
      arr.push(
        <Store
          key={storeWiseProducts[store][0].store.id}
          storeProducts={storeWiseProducts[store]}
          total={total}
        />
      );
    }
    return [
      <div key="1" className="store_wrapper">
        <div className="compaired_products">
          <h2>Items</h2>
          {namesOfComparedProducts}
          <h2>Total</h2>
        </div>
        <div className="place_order">Place order</div>
      </div>,
      arr
    ];
  }

  render() {
    return <div className="compare_stores">{this.displayStores()}</div>;
  }
}

export default graphql(getProductQuery, {
  options: props => {
    console.log("FROM PROPS IN ORDERPAGE QUERY:", props);
    return {
      variables: {
        selected: [
          ...props.location.products.map(product => {
            return { name: product.name };
          })
        ]
      }
    };
  }
})(OrderPage);
