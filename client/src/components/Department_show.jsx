import React, { Component } from 'react';
import _Product from './Partials/_Product';

class Department_show extends Component {
  render() {
    // console.log(this.props)

    const id = this.props.match.params.department_id;
    console.log('id', id);
    const products = [];
    this.props.products.forEach(product => {
      if (product.department === id) {
        products.push(<_Product product={product} />);
      }
    });
    return (
      <main className="main home_main">
        <div>
          <h2>Products In Meat Department</h2>
          <table>
            <tbody>{products}</tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Department_show;
