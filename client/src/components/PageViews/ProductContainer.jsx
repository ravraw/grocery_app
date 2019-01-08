import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getProductQuery, addCartItemMutation } from '../../queries/queries';
import nutriLabel from '../../assets/images/tnutritional-label.png';

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
  onAdd() {
    console.log('FROM ADD IN PRODUCTS ___', this.props.product);
    this.props
      .addCartItemMutation({
        variables: {
          quantity: 1,
          user_id: 1, // hardcoded
          product_id: this.props.data.products[0].id
        }
      })
      .then(data => this.props.refetch())
      .catch(err => console.log(err));
  }
  render(props) {
    console.log('FROM PRODUCT_SHOW', this.props);
    const currentProduct = this.displayProducts();
    // return <div>{this.displayProducts()}</div>;
    return (
      <section className="product_show">
        <div className="product_show__img">
          <img
            src={currentProduct.image}
            alt="dummy"
            style={{ height: '30rem' }}
          />
          <img src={nutriLabel} alt="delete" style={{ height: '30rem' }} />
        </div>
        <div className="product_show__detail">
          <h2>{currentProduct.name}</h2>
          <h2>Price: ${currentProduct.price}</h2>
          <h2>{currentProduct.description}</h2>
          <button className="btn-1" onClick={this.onAdd.bind(this)}>
            Add
          </button>
          <button className="btn-2" onClick={this.props.history.goBack}>
            back
          </button>
        </div>
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
  graphql(addCartItemMutation, { name: 'addCartItemMutation' })
)(Product_show);
