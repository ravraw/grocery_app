import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Home from "../PageViews/Home";
import Department_show from "../PageViews/DepartmentContainer";
import Product_show from "../PageViews/ProductContainer";
import Products from "../PageViews/Products";
import OrderPage from "../PageViews/OrderPage";

import Category_show from "../PageViews/CategoryContainer";
import User_new from "../PageViews/User_new";
import Checkout from "../PageViews/Checkout";
// import User_show from "./components/User_show";
import Login from "../PageViews/Login";
import Cart from "../PageViews/Cart";
import Errors from "../PageViews/Errors";
import LastOrder from "../PageViews/LastOrder";
import Account from "../PageViews/Account";
import OrderHistory from "../PageViews/OrderHistory";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/products/:searchPath" component={Products} />
          <Route path="/" exact component={Home} />
          <Route path="/user/new" component={User_new} />
          <Route path="/cart/:id" exact component={Cart} />
          <Route path="/category/:id/show" component={Category_show} />
          <Route path="/checkout/:total" component={Checkout} />
          <Route path="/lastOrder" component={LastOrder} />

          {/* <Route path="/user/:user_id/show" component={User_show} /> */}

          <Route path="/order" component={OrderPage} />

          {/* <Route path="/login" component={Login} />*/}
          <Route
            path="/login"
            render={() => <Login getCurrentUser={this.props.getCurrentUser} />}
          />

          <Route path="/product/:id/show" component={Product_show} />

          <Route path="/department/:id/show" component={Department_show} />
          <Route path="/account" component={Account} />
          <Route path="/orderHistory" component={OrderHistory} />

          {/* <Route path="/user/:user_id/show" component={User_show} />
          <Route path="/login" component={Login} /> */}
          <Route component={Errors} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(Main);
