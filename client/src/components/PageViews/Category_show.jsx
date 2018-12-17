import React, { Component } from "react";
import Category from "../Categories/Category";
import { graphql } from "react-apollo";
import { getCategoriesQuery } from "../../queries/queries";
import { applyEach } from "async";
import Product from "../Category/Product";

//should take all categories that are available to that department

const productsOfCategory = [
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
];

class Category_show extends Component {
  // state = {
  //   id: this.props.match.params.department_name
  // };
  // displayProducts() {
  //   let data = this.props.data;
  //   // const { id, name, categories } = data.departments;
  //   // const D = data.departments;
  //   console.log('this is data:', data);
  //   if (data.loading) {
  //     return <div>Loading Categories...</div>;
  //   } else {
  //     return data.departments[0].categories.map(category => {
  //       return <Category category={category} />;
  //     });
  //   }
  // }
  // render(props) {
  //   console.log('this props:', this.props.data.variables.id);
  //   return <div>{this.displayCategories()}</div>;
  // }
  render() {
    const Products = productsOfCategory.map(product => {
      return <Product product={product} />;
    });
    return <React.Fragment>{Products}</React.Fragment>;
  }
}

export default Category_show;
// export default graphql(getCategoriesQuery, {
//   options: props => {
//     console.log('from props:', props);
//     return { variables: { id: props.match.params.id } };
//   }
// })(Department_show);
