import React, { Component } from "react";
import Category from "../Categories/Category";

//should take all categories that are available to that department
const categories =  [
  {
    "id": "2",
    "name": "fresh fruits",
    "products": [
      {
        "id": "1",
        "name": "banana",
        "price": 0.2
      },
      {
        "id": "2",
        "name": "Orange",
        "price": 0.38
      },
      {
        "id": "3",
        "name": "watermelon",
        "price": 5.38
      }
    ]
  },
  {
    "id": "3",
    "name": "fresh herbs",
    "products": [
      {
        "id": "4",
        "name": "white Onion",
        "price": 0.39
      },
      {
        "id": "5",
        "name": "yellow onion",
        "price": 2.98
      },
      {
        "id": "6",
        "name": "roma tomatos",
        "price": 2.98
      },
      {
        "id": "7",
        "name": "roma tomatos",
        "price": 2.98
      }
    ]
  },
  {
    "id": "4",
    "name": "fresh vegetables",
    "products": []
  }
]
;

class Department_show extends Component {
 
  render() {
    const Categories = categories.map(category => {
      return <Category name={category.name} products={category.products} />;
    });
    // console.log(this.props)

    const id = this.props.match.params.department_name;
    // console.log("id", id);

    return (
      <React.Fragment>
        <h2>Categories In {id} Department</h2>
        {Categories}
      </React.Fragment>
    );
  }
}

export default Department_show;
