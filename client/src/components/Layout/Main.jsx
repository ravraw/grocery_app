import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../PageViews/Home';
import Department_show from '../PageViews/DepartmentContainer';
import Product_show from '../PageViews/ProductContainer';

import Category_show from '../PageViews/CategoryContainer';
import User_new from '../PageViews/User_new';

// import User_show from "./components/User_show";
// import Login from "./components/Login";
import Cart from '../PageViews/Cart';
import Errors from '../PageViews/Errors';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/new" component={User_new} />
          <Route path="/cart/:id" component={Cart} />
          <Route path="/category/:id/show" component={Category_show} />
          {/* <Route path="/user/:user_id/show" component={User_show} /> */}
          {/* <Route path="/login" component={Login} /> */}
          
          <Route path="/product/:id/show"  component={Product_show} />

          <Route path="/department/:id/show" component={Department_show} />
         
          {/* <Route path="/user/:user_id/show" component={User_show} />
          <Route path="/login" component={Login} /> */}
          <Route component={Errors} />
        </Switch>
      </main>
    );
  }
}

export default Main;
