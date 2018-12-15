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
import Login from "./components/Login";
import Product_show from "./components/Product_show";
import Cart from "./components/Cart";
import Errors from "./components/Errors";

// import Departments from "./components/Departments";

//

// Apollo client setup
// eslint-disable-next-line
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const routes = [
  { path: "/", component: Home },
  { path: "/departments", component: Departments },
  { path: "//departments/:department_id/show", component: Department_show },
  { path: "/users/new", component: User_new },
  { path: "/users/:user_id/show", component: User_show },
  { path: "/login", component: Login },
  { path: "/products/:product_id/show", component: Product_show },
  { path: "/cart", component: Cart },
  { component: Errors }
];

const Router = props => {
  const arr = routes.map(({ path, component: C }) => {
    if (path === "/") {
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      current_user: {
        //session['user_id']?
        //session['user_email']?
        id: 1,
        email: "imbirdy@yahoo.com"
      },
      products: [
        {
          product_name: "carot",
          unit_price: 99,
          store: "Walmart",
          department: "vegetable",
          image:
            "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
          category: "unpacked"
        },
        {
          product_name: "Pork",
          unit_price: 20,
          store: "Superstore",
          department: "meat",
          image:
            "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/317/7eec43fd-6aca-489a-8070-08c18b12c4b1.png",
          category: "packaged"
        }
      ]
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Router products={this.state.products} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
