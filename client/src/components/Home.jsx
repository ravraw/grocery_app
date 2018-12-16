import React, { Component } from 'react';
import _Product from './Partials/_Product';
import Department_show from './Department_show';
import Departments from './Departments';
class Home extends Component {
  render() {
    // console.log("this.props----HOME",this.props)
    const products = [];
    this.props.products.forEach(product => {
      products.push(<_Product product={product} />);
    });
    return (
      <main className="main home_main">
        <div>
          <h2>Our Suggestions Based On Your Recent Purchase</h2>
          <table>
            <tbody>{products}</tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Home;
