import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getProductQuery, addCartItemMutation } from "../../queries/queries";

class Product_show extends Component {
  constructor() {
    super();
    this.state = {};
  }

  displayProducts() {
    let data = this.props.data;
    // console.log('data from category_show', data);
    if (data.loading) {
      return <div>Loading Products...</div>;
    } else {
      return data.products[0];
    }
  }
  render(props) {
    const currentProduct = this.displayProducts();
    // return <div>{this.displayProducts()}</div>;
    return (
      <section>
        <img
          src={currentProduct.image}
          alt="dummy"
          style={{ height: "35rem" }}
        />
        <h2>{currentProduct.name}</h2>
        <h2>Price: ${currentProduct.price}</h2>
        <h2>{currentProduct.description}</h2>
        <button className="btn">Add</button>
        <button className="btn" onClick={this.props.history.goBack}>
          back
        </button>
      </section>
    );
  }
}

// export default Product_show;
export default compose(
  graphql(getProductQuery, {
    options: props => {
      // console.log('from props:', props);
      return { variables: { id: props.match.params.id } };
    }
  }),
  graphql(addCartItemMutation, { name: "addCartItemMutation" })
)(Product_show);
