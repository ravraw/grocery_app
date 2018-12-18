import Departments from "../Home/Departments";
import React, { Component } from "react";
class Home extends Component {
  render() {

    return (
      <React.Fragment>
        <div>Main Page</div>
        <Departments />
      </React.Fragment>
    );
  }
}

export default Home;
