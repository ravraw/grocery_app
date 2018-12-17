import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../PageViews/Home';
import Department_show from '../PageViews/Department_show';
import User_new from '../PageViews/User_new';
// import User_show from "./components/User_show";
// import Login from "./components/Login";
import Cart from "../PageViews/Cart";
import Errors from "../PageViews/Errors";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/new" component={User_new} />
<<<<<<< HEAD
          <Route
            path="/department/:department_name/show"
            component={Department_show}
          />
          <Route path="/cart" component={Cart} />
          <Route component={Errors} />
          {/* <Route path="/user/:user_id/show" component={User_show} /> */}
          {/* <Route path="/login" component={Login} /> */}

=======
          <Route path="/department/:id/show" component={Department_show} />
          {/* <Route path="/cart" component={Cart} />
          <Route component={Errors} />
          <Route path="/user/:user_id/show" component={User_show} />
          <Route path="/login" component={Login} /> */}
>>>>>>> 517bed3e985c7edd01ac3df54063e942357692bc
        </Switch>
      </main>
    );
  }
}

export default Main;
