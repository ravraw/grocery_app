import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/about">This is a side bar!!!!!!!!!!!!!!!!!!!!!!!!!!</NavLink>
      </div>
    );
  }
}
export default Sidebar;
