import React, { Component } from "react";

class Product_show extends Component {
  constructor() {
    super();
    this.state = {
      id: this.props.match.params.id,
      productOfId: {
        //fetch that product of id.
        name: "PAPY",
        price: 30,
        description: "it is super delicious"
      }
    };
  }

  handleAdd() {
    // Add this.state.productOfId to Cart in database.
  }
  render() {
    const { name, price, description } = this.state.productOfId;
    // console.log("product_id",this.props.match.params.id)
    return (
      <React.Fragment>
        <div>This is Product_show Page</div>
        <img src="http://fosterclark.com/wp-content/uploads/2016/06/Banana-150x150.png" />
        <h2>Name: {name}</h2>
        <h2>Unit_Price: {price}</h2>
        <h2>Description: {description}</h2>
        <button onClick={this.handleAdd}>Add To Cart</button>
      </React.Fragment>
    );
  }
}

export default Product_show;
