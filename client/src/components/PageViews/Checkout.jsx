import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCategoryProductsQuery } from '../../queries/queries';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../Checkout/CheckoutForm';

import Product from '../Product';
import Sidebar from '../Sidebar';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(props) {
    console.log('PROPS FROM CHECKOUT ---', this.props.location.products);
    const total = this.props.match.params.total;
    return (
      <React.Fragment>
        <p>Your total:${this.props.match.params.total}</p>
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm
                total={total}
                products={this.props.location.products}
              />
            </Elements>
          </div>
        </StripeProvider>
      </React.Fragment>
    );
  }
}

export default Checkout;
// export default graphql(getCategoryProductsQuery, {
//   options: props => {
//     console.log('from props:', props);
//     return { variables: { id: props.match.params.id } };
//   }
// })(Checkout);
