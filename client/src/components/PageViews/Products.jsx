import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoriesQuery } from "../../queries/queries";

//should take all categories that are available to that department

class Products extends Component {
  state = {
    id: this.props.match.params.searchPath
  };
  displayProducts() {
    return<div>Products</div>
  }

  render(props) {
    console.log("this searchPath", this.state.id);

    return (
      <React.Fragment>
        <div>{this.displayProducts()}</div>
      </React.Fragment>
    );
  }
}

export default Products