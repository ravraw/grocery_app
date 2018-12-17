import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "../PageViews/Home";
import Department_show from "../PageViews/Department_show";
import User_new from "../PageViews/User_new";
// import User_show from "./components/User_show";
// import Login from "./components/Login";
// import Cart from "./components/Cart";
// import Errors from "./components/Errors";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/new" component={User_new} />
          <Route
            path="/department/:department_name/show"
            component={Department_show}
          />
          {/* <Route path="/cart" component={Cart} />
          <Route component={Errors} />
          <Route path="/user/:user_id/show" component={User_show} />
          <Route path="/login" component={Login} /> */}

        </Switch>
      </main>
    );
  }
}

export default Main;
