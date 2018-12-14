import React, { Component } from "react";
import _Product from "./Partials/_Product";
class Home extends Component {
  render() {
    return (
      <body className="body home_body">
        <div>
          <h2>Our Suggestions Based On Your Recent Purchase</h2>
          <table>
            <_Product />
            <_Product />
          </table>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/World_Association_of_Girl_Guides_and_Girl_Scouts_map.png" />
          >
        </div>
      </body>
    );
  }
}

export default Home;
