import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import Product from '../Product';

class Store extends Component {
  // constructor() {
  //   super();
  //   this.state = { fetchedProducts: [] };
  //   this.displayProducts = this.displayProducts.bind(this);
  // }

  render() {
    console.log('FROM STORE COMPONENT:', this.props);
    const productList = this.props.storeProducts.map(product => {
      return (
        <React.Fragment>
          <Product product={product} />
        </React.Fragment>
      );
    });
    return (
      <div>
        <hr />
        <h1>{this.props.storeProducts[0].store.name}</h1>
        {productList}
        <h1>Total Price : ${this.props.total.toFixed(2)}</h1>

        <Link
          to={{
            pathname: `/checkout/${this.props.total}`,
            products: this.props.storeProducts
          }}
        >
          <button>ORDER</button>
        </Link>
        <hr />
      </div>
    );
  }
}

export default Store;

//  <Link to={`/checkout/${this.props.total}`}>
