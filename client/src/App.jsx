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
import Error from "./components/Error";

// import Departments from "./components/Departments";

//

// Apollo client setup
// eslint-disable-next-line
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          product_name: "carot",
          unit_price: 99,
          store: "Walmart",
          department: "vegetable",
          image: './public/images/carrot',
          category: 'unpacked'
        },
        {
          product_name: "Pork",
          unit_price: 20,
          store: "Superstore",
          department: "Meat",
          image: './public/images/carrot',
          category: 'packaged'
        }
      ]
    };
  }
  render() {
    return (
      <BrowserRouter>
        <body>
          <Header />
          <Switch>
            <Route path="/" render={(props) => <Home {...props}  products={this.state.products} />} exact />
            <Route path="/departments" component={Departments} exact />
            <Route
              path="/departments/:department_id/show"
              component={Department_show}
            />
            <Route path="/users/new" component={User_new} />
            <Route path="/users/:user_id/show" component={User_show} />
            <Route path="/login" component={Login} />
            <Route path="/products/:product_id/show" component={Product_show} />
            <Route path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </body>
      </BrowserRouter>
    );
  }
}

export default App;
