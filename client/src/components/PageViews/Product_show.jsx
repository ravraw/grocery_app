import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../../queries/queries';

class Product_show extends Component {
  constructor() {
    super();
    this.state = {
      // id: this.props.match.params.id,
      // productOfId: {
      //   //fetch that product of id.
      //   name: 'PAPY',
      //   price: 30,
      //   description: 'it is super delicious'
      // }
    };
  }

  handleAdd() {
    // Add this.state.productOfId to Cart in database.
  }
  displayProducts() {
    let data = this.props.data;
    console.log('data from category_show', data);
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
      <React.Fragment>
        <div>This is Product_show Page</div>
        <img
          src="http://fosterclark.com/wp-content/uploads/2016/06/Banana-150x150.png"
          alt="dummy"
        />
        <h2>Name: {currentProduct.name}</h2>
        <h2>Unit_Price: {currentProduct.price}</h2>
        <h2>Description: {currentProduct.description}</h2>
        <button onClick={this.handleAdd}>Add To Cart</button>
      </React.Fragment>
    );
  }
}

// export default Product_show;
export default graphql(getProductQuery, {
  options: props => {
    console.log('from props:', props);
    return { variables: { id: props.match.params.id } };
  }
})(Product_show);
