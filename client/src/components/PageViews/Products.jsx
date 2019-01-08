import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getSearchResults } from '../../queries/queries';
import Product from '../Product';
class Products extends Component {
  // componentDidMount() {
  //   this.props.refetch();
  // }
  displayProducts() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Products...</div>;
    } else {
      return data.products.map(product => {
        if (
          product.name
            .toLowerCase()
            .includes(this.props.match.params.searchPath.toLowerCase())
        ) {
          return <Product key={product.id} product={product} />;
        }
      });
    }
  }
  render(props) {
    console.log('FROM SEARCH RESULTS', this.props.data.products);
    // const categories = this.props.location.categories;
    return <div className="search_results">{this.displayProducts()}</div>;
  }
}

export default graphql(getSearchResults, {
  options: props => {
    // console.log(
    //   'this gets called from props:',
    //   JSON.stringify(props.match.params.searchPath)
    // );
    return { variables: { query: props.match.params.searchPath } };
  }
})(Products);
