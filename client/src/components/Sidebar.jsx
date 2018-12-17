import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const links=this.props.categories
    return (
      <div>
        <NavLink to="/about"></NavLink>
      </div>
    );
  }
}
export default Sidebar;
