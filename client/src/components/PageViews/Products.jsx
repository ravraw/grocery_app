import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCategoriesQuery } from "../../queries/queries";
import Product from "../Product";

const products=[
  {
    id: 1,
    name: "apple",
    category: "fruit",
    price: 33,
    description: "This is delicious",
    image: ""
  },
  {
    id: 2,
    name: "orange",
    category: "fruit",
    price: 33,
    description: "This is delicious",
    image: ""
  },
  {
    id: 3,
    name: "apple",
    category: "fruit",
    price: 33,
    description: "This is delicious",
    image: ""
  },
  {
    id: 4,
    name: "apple",
    category: "fruit",
    price: 33,
    description: "This is delicious",
    image: ""
  },
  {
    id: 5,
    name: "apple",
    category: "fruit",
    price: 33,
    description: "This is delicious",
    image: ""
  }
]
//should take all categories that are available to that department

class Products extends Component {
  state = {
    id: this.props.match.params.searchPath
  };
  displayProducts() {
    // let data = this.props.data;
    
    return products.map(product => {
      return <Product product={product} />;
    });
    // console.log("data from category_show", data);
    // if (data.loading) {
    //   return <div>Loading Products...</div>;
    // } else {
      // return data.categories[0].products.map(product => {
      //   return <Product product={product} />;
      // });
    // }
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