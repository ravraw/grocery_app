import React, { Component } from 'react';
import Category from '../Categories/Category';
import { graphql } from 'react-apollo';
import { getCategoryProductsQuery } from '../../queries/queries';
import Product from '../Category/Product';

//should take all categories that are available to that department

const productsOfCategory = [
  {
    id: 1,
    name: 'apple',
    category: 'fruit',
    price: 33,
    description: 'This is delicious',
    image: ''
  },
  {
    id: 2,
    name: 'orange',
    category: 'fruit',
    price: 33,
    description: 'This is delicious',
    image: ''
  },
  {
    id: 3,
    name: 'apple',
    category: 'fruit',
    price: 33,
    description: 'This is delicious',
    image: ''
  },
  {
    id: 4,
    name: 'apple',
    category: 'fruit',
    price: 33,
    description: 'This is delicious',
    image: ''
  },
  {
    id: 5,
    name: 'apple',
    category: 'fruit',
    price: 33,
    description: 'This is delicious',
    image: ''
  }
];

class Category_show extends Component {
  displayProducts() {
    let data = this.props.data;
    // const { id, name, products } = ;
    console.log('data from category_show', data);
    if (data.loading) {
      return <div>Loading Products...</div>;
    } else {
      return data.categories[0].products.map(product => {
        return <Product product={product} />;
      });
    }
  }
  render(props) {
    return <div>{this.displayProducts()}</div>;
  }
}

// export default Category_show;
export default graphql(getCategoryProductsQuery, {
  options: props => {
    console.log('from props:', props);
    return { variables: { id: props.match.params.id } };
  }
})(Category_show);
