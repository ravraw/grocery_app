import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCategoryProductsQuery } from '../../queries/queries';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../Checkout/CheckoutForm';

<<<<<<< HEAD
import Product from '../Product';
import Sidebar from '../Sidebar';
=======
import Product from "../Product";
import Sidebar from "../Sidebar";
>>>>>>> 9bdf0ad8faf0bd16c29b6aa05ced64f3006af7bf

class Checkout extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(props) {
    console.log('PROPS FROM CHECKOUT ---', this.props.location.products);
    const total = this.props.match.params.total;
    return (
      <div className="checkout">
        <h3>Thank you for shopping with us.</h3>
        <p>Please complete the payment</p>{' '}
        <h4>Your total:${(+this.props.match.params.total).toFixed(2)}</h4>
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
              <CheckoutForm
                total={total}
                products={this.props.location.products}
              />
            </Elements>
          </div>
        </StripeProvider>
      </div>
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
