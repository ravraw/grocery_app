import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoryProductsQuery } from "../../queries/queries";

import Product from "../Product";
import Sidebar from "../Sidebar";

class Category_show extends Component {
  displayProducts() {
    let data = this.props.data;
    // console.log("data from category_show", data);
    if (data.loading) {
      return <div>Loading Products...</div>;
    } else {
      return data.categories[0].products.map(product => {
        return <Product product={product} />;
      });
    }
  }
  render(props) {
    const categories = this.props.location.categories;
    return (
      <React.Fragment>
        <div>
          <Sidebar categories={categories} />
        </div>
        <div>{this.displayProducts()}</div>
      </React.Fragment>
    );
  }
}

// export default Category_show;
export default graphql(getCategoryProductsQuery, {
  options: props => {
    console.log("from props:", props);
    return { variables: { id: props.match.params.id } };
  }
})(Category_show);
