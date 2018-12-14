import React, { Component } from "react";
import ApolloClient from "apollo-boost";
// eslint-disable-next-line
import { ApolloProvider } from "react-apollo";

//import react-router-dom
// eslint-disable-next-line
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.scss";

// componets
import Header from "./components/Layout/Header";
// eslint-disable-next-line
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home";
import Departments from "./components/Departments";
import Department_show from "./components/Department_show";
import User_new from "./components/User_new";
import User_show from "./components/User_show";

import Product_show from "./components/Product_show";
import Error from "./components/Error"

// import Departments from "./components/Departments";

//

// Apollo client setup
// eslint-disable-next-line
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/departments" component={Departments} />
          <Route path="/users/new" component={User_new} />
          <Route path="/users/:user_id/show" component={User_show} />
          <Route path="/departments/:department_id/show" component={Department_show} />
          <Route path="/products/:product_id/show" component={Product_show} />
          <Route component={Error} />

        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
