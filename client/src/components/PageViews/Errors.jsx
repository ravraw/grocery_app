import React, { Component } from 'react';
import notFound from '../../assets/images/7VE.gif';
class Errors extends Component {
  render() {
    console.log('ERROR PAGE PROPS', this.props);
    return (
      <div className="notFound">
        <h1>404 - PAGE NOT FOUND</h1>
        <img
          src={notFound}
          alt="search"
          style={{ height: '300px', width: '300px' }}
        />
        <button className="btn-2" onClick={this.props.history.goBack}>
          back
        </button>
      </div>
    );
  }
}

export default Errors;
