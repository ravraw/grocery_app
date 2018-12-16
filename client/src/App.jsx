import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.scss";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// componets
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      current_user: {
        //session['user_id']?
        //session['user_email']?
        id: 1,
        email: "imbirdy@yahoo.com"
      }
    };
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Main />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
