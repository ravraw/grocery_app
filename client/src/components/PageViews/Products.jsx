import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getSearchResults } from '../../queries/queries';
import Product from '../Product';
class Products extends Component {
  displayProducts() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Products...</div>;
    } else {
      return data.products.map(product => {
        if (product.name.includes(this.props.match.params.searchPath)) {
          return <Product key={product.id} product={product} />;
        }
      });
    }
  }
  render(props) {
    // const categories = this.props.location.categories;
    return <div>{this.displayProducts()}</div>;
  }
}

export default graphql(getSearchResults, {
  options: props => {
    console.log(
      'this gets called from props:',
      JSON.stringify(props.match.params.searchPath)
    );
    return { variables: { query: props.match.params.searchPath } };
  }
})(Products);