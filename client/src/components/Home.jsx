import React, { Component } from "react";
import _Product from "./Partials/_Product";
class Home extends Component {
  render() {
    console.log(this.props)
    const products = [];
    this.props.products.forEach((product)=>{
      products.push( <_Product product={product} />);
    })
    return (
      <main className="main home_main">
        <div>
          <h2>Our Suggestions Based On Your Recent Purchase</h2>
          <table>
            {products}
          </table>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/World_Association_of_Girl_Guides_and_Girl_Scouts_map.png" />
          >
        </div>
      </main>
    );
  }
}

export default Home;
