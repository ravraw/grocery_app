import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const categories = this.props.categories;
    const links = categories.map(category => {
      return (
        <li key={category.id}>
          <NavLink
            to={{
              pathname: `/category/${category.id}/show`,
              categories: this.props.categories
            }}
          >
            {category.name}
          </NavLink>
        </li>
      );
    });
    return (
      <nav className="sidebar_nav">
        <h4>Categories</h4>
        <ul>{links}</ul>
      </nav>
    );
  }
}
export default Sidebar;
