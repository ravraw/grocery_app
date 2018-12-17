import React, { Component } from "react";

const productOfId = {
  name: "PAPY",
  price: 30,
  description: "it is super delicious"
};

class Product_show extends Component {
  render() {
    const { name, price, description } = productOfId;
    // console.log("product_id",this.props.match.params.id)
 console.log("passed ID", this.props.id)
    return (
      <React.Fragment>
        <div>This is Product_show Page</div>
        <img src="http://fosterclark.com/wp-content/uploads/2016/06/Banana-150x150.png" />
        <h2>Name: {name}</h2>
        <h2>Unit_Price: {price}</h2>
        <h2>Description: {description}</h2>
      </React.Fragment>
    );
  }
}

export default Product_show;
