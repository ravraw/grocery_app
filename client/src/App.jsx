import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//import react-router-dom

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.scss";

// componets
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Router from "./Router";

// Apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const products = [
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
];

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
      products: products
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
