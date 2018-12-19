import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCategoryProductsQuery } from '../../queries/queries';

import Product from '../Product';
import Sidebar from '../Sidebar';

class Checkout extends Component {
 constructor(){
   super();
   this.state={};
   
 }
  render(props) {
    return (
      <React.Fragment>
        
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
