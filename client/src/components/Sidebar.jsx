import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const categories = this.props.categories;
    console.log("categories props", categories);

    const links = this.props.categories.map(category => {
      return (
        <React.Fragment>
          <NavLink to={`/category/${category.id}/show`}>
            {category.name}
          </NavLink>
          <br />
        </React.Fragment>
      );
    });
    return (
      <div>
        <h4>Categories: </h4>
        {links}
      </div>
    );
  }
}
export default Sidebar;
