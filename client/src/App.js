import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

// componets
import Users from './components/Users';

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1>Grocery App </h1>
            <Users />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
