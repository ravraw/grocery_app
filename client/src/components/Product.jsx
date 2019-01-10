import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import {
  addCartItemMutation,
  deleteCartItemMutation
} from "../queries/queries";

class Product extends Component {
  onAdd() {
    console.log("FROM ADD IN PRODUCTS ___", this.props.product);
    this.props
      .addCartItemMutation({
        variables: {
          quantity: 1,
          user_id: 1, // hardcoded
          product_id: this.props.product.product_id || this.props.product.id
        }
      })
      .then(data => this.props.refetch())
      .catch(err => console.log(err));
  }

  onDecrease() {
    console.log("FROM UPDATE IN PRODUCTS ___", this.props);
    this.props
      .addCartItemMutation({
        variables: {
          quantity: -1,
          user_id: 1, // hardcoded
          product_id: this.props.product.product_id
        }
        //refetchQueries: [{ query: getCartQuery, variables: { id: 1 } }]
      })
      .then(data => this.props.refetch())
      .catch(err => console.log(err));
  }

  onDelete() {
    this.props
      .deleteCartItemMutation({
        variables: {
          user_id: 1, // hardcoded
          product_id: this.props.product.product_id
        } //,
        // refetchQueries: [{ query: getCartQuery, variables: { id: 1 } }]
      })
      .then(data => this.props.refetch())
      .catch(err => console.log(err));
  }
  render() {
    const {
      id,
      name,
      description,
      price,
      quantity,
      image,
      store
    } = this.props.product;
    return (
      <div key={id} className="product">
        <Link to={`/product/${id}/show`}>
          <img
            src={image}
            alt="dummy"
            style={{ height: "150px", width: "150px" }}
          />
        </Link>
        <h4>{name}</h4>
        <p> {description || "each"}</p>
        <p>$ {price}</p>
        <p>#{id}</p>
        {store ? <p>Store: {store.name}</p> : ""}
        {quantity ? <p>Quantity: {quantity}</p> : ""}
        {price ? <button onClick={this.onAdd.bind(this)}>Add</button> : ""}
        {quantity ? (
          <button onClick={this.onDecrease.bind(this)}>-</button>
        ) : (
          ""
        )}
        {quantity ? (
          <button onClick={this.onDelete.bind(this)}>DELETE</button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default compose(
  graphql(addCartItemMutation, { name: "addCartItemMutation" }),
  graphql(deleteCartItemMutation, { name: "deleteCartItemMutation" })
)(Product);
