import Home from "./components/PageViews/Home";
import Departments from "./components/Departments";
import Department_show from "./components/Department_show";
import User_new from "./components/User_new";
import User_show from "./components/User_show";
import Login from "./components/Login";
import Product_show from "./components/Product_show";
import Cart from "./components/Cart";
import Errors from "./components/Errors";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";


const routes = [
  { path: '/', component: Home },
  { path: '/departments', component: Departments },
  { path: '/department/:department_id/show', component: Department_show },
  { path: '/user/new', component: User_new },
  { path: '/user/:user_id/show', component: User_show },
  { path: '/login', component: Login },
  { path: '/product/:product_id/show', component: Product_show },
  { path: '/cart', component: Cart },
  { component: Errors }
];

const Router = props => {
  const arr = routes.map(({ path, component: C }) => {
    if (path === '/') {
      return (
        <Route
          exact
          path={path}
          render={() => <C products={props.products} />}
        />
      );
      
    } else {
      return (
        <Route path={path} render={() => <C products={props.products} />} />
      );
    }
  });
  return <Switch>{arr}</Switch>;
};

export default Router;
