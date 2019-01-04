import React, { Component } from "react";
import Product from "../Product";
import CartItem from "../CartItem";
import { graphql } from "react-apollo";
import { getCartQuery } from "../../queries/queries";
import { NavLink, Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: this.props.data.shoppingCart
    };

    // this.getDistances = this.getDistances.bind(this);
    this.getMyLocation = this.getMyLocation.bind(this);
  }

  getMyLocation() {}

  componentDidMount() {
    console.log("REFETCH----", this.props);
    this.props.data.refetch();
    // this.getDistances();
    // this.getMyLocation();
  }

  displayCart() {
    let data = this.props.data;
    console.log("PROPS FROM CART --", this.props.data.shoppingCart);

    if (data.loading) {
      return <div>Loading Cart items...</div>;
    } else {
      return data.shoppingCart.map(product => {
        console.log("PRODUCT FROM CART", product);
        return (
          <CartItem
            refetch={data.refetch}
            key={product.id}
            onDelete={this.onDelete}
            product={product}
          />
        );
      });
    }
  }

  displayOrderLink() {
    let data = this.props.data;
    if (!data.loading) {
      const productsProps = data.shoppingCart;
      console.log("productsProps", productsProps);
      return (
        <Link to={{ pathname: `/order`, products: productsProps }}>
          Compare Prices
        </Link>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="cart">{this.displayCart()}</div>
        <div className="compare_price">{this.displayOrderLink()}</div>
      </React.Fragment>
    );
  }
}

// export default Cart;l;lkjk
export default graphql(getCartQuery, {
  options: props => {
    // console.log('from props:', props);
    return { variables: { id: props.match.params.id } };
  }
})(Cart);
