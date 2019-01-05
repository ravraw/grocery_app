import React, { Component } from "react";
import Category from "../DepartmentContainer/Category";
import { graphql } from "react-apollo";
import { getCategoriesQuery } from "../../queries/queries";
import Sidebar from "../Sidebar";

//should take all categories that are available to that department

class DepartmentContainer extends Component {
  state = {
    id: this.props.match.params.department_id
  };
  displayCategories() {
    let data = this.props.data;
    // console.log("data", data);
    if (data.loading) {
      return <div>Loading Categories...</div>;
    } else {
      return data.departments[0].categories.map(category => {
        return <Category key={category.id} category={category} />;
      });
    }
  }
  displaySidebar() {
    let data = this.props.data;
    if (!data.loading) {
      return <Sidebar categories={data.departments[0].categories} />;
    }
  }

  render(props) {
    // console.log("this props:", this.props.data.variables.id);

    return (
      <div className="single_department">
        <aside className="sidebar">{this.displaySidebar()}</aside>
        <div className="single_department__products">
          {this.displayCategories()}
        </div>
      </div>
    );
  }
}

export default graphql(getCategoriesQuery, {
  options: props => {
    // console.log("from props:", props);
    return { variables: { id: props.match.params.id } };
  }
})(DepartmentContainer);
