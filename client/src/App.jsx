import React, { Component } from "react";
// apollo client
import { ApolloProvider } from "react-apollo";
//import ApolloClient from 'apollo-boost';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";

// Create an http link:
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    };
    this.getCurrentUserHandler = this.getCurrentUserHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  getCurrentUserHandler(user) {
    console.log("USER FROM APP", user);
    this.setState({
      currentUser: user
    });
  }
  logoutHandler() {
    this.setState({
      currentUser: ""
    });
    window.localStorage.setItem("token", "");
    console.log("USER loggedout", this.state.currentUser);
  }

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div className="app">
            <Header user={this.state.currentUser} logout={this.logoutHandler} />
            <Main getCurrentUser={this.getCurrentUserHandler} />
            <Footer />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
