import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <body className="body error_body">
        <div>Error: No such page exists!</div>
      </body>
    );
  }
}

export default Error;