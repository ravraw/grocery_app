import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//import react-router-dom
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.scss';

// componets
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';



// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (

      // <BrowserRouter>
      //   <Route path='/' component = 
      
      
      
      // </BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Main>
            <h1>Grocery App </h1>
        
          </Main>
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
