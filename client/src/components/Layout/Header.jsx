import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { graphql, compose, Subscription } from "react-apollo";
import { getCartQuery, cartInfoSubscription } from "../../queries/queries";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.svg";
import loupe from "../../assets/images/loupe.png";
import microphone from "../../assets/images/microphone.png";
// import webkitSpeechRecognition from "webkitSpeechRecognition";
// var recognition = new webkitSpeechRecognition(); //get new instance

const id = 1;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchPath: "/",
      redirect: false,
      count: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartRecording = this.handleStartRecording.bind(this);
  }
  handleChange = event => {
    const path = event.target.value;
    // console.log('searchpath', path);
    this.setState({ searchPath: "/products/" + path });
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }
  displayCartCount() {
    let data = this.props.data;
    if (data.loading) {
      return <span>0</span>;
    } else {
      // this.setState({ count: data.shoppingCart.length });
      return <span>{data.shoppingCart.length || 0}</span>;
    }
  }

  handleStartRecording(event) {
    var SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;
    recognition.start();
    recognition.onstart = function() {
      console.log("Recieving search command!!!!!!");
    };

    recognition.onresult = e => {
      const transcript = e.results[0][0].transcript;
      // console.log("Result!!!", transcript);
      // console.log("event", event);
      this.setState({ searchPath: "/products/" + transcript, redirect: true });
    };
    recognition.onspeechend = function() {
      recognition.stop();
    };
  }
  // componentDidMount() {
  //   console.log('REFETCH----', this.props);
  //   this.props.data.refetch();
  //   this.displayCartCount();
  // }

  render() {
    let url = window.location.href;
    let lastUrl = url.substr(url.lastIndexOf("/") + 1);
    this.props.data.refetch();
    if (!("webkitSpeechRecognition" in window)) {
      throw new Error(
        "This browser doesn't support speech recognition. Try Google Chrome."
      );
    }

    // const recognition = new SpeechRecognition();
    // var recognition = new webkitSpeechRecognition();
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to={this.state.searchPath} />;
    }
    return (
      <header className="header">
        <div className="header__logo">
          <a href="/" className="home_link">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <form className="header__search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search Grocery"
            onChange={this.handleChange}
          />
          <button className="magnifier" type="submit">
            <img
              src={loupe}
              alt="search"
              style={{ height: "35px", width: "35px" }}
            />
          </button>
          <button
            className="speak"
            type="button"
            onClick={this.handleStartRecording}
          >
            <img
              src={microphone}
              alt="speak"
              style={{ height: "35px", width: "35px" }}
            />
          </button>
          {/* <button type="button">Start</button> */}
        </form>
        <div className="header__nav">
          <Link to="/">Home</Link>
          <Link to={`/login`} className="login_link">
            Login
          </Link>
          <Link to={`/user/new`} className="registration_link">
            Register
          </Link>
          <Link to={`/account`} className="account_link">
            Account
          </Link>

          <Link to={`/cart/${id}`} className="cart_link">
            <span className="cart_count">{this.displayCartCount()}</span>
            <img
              src={cart}
              alt="delete"
              style={{ height: "35px", width: "35px" }}
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default compose(
  graphql(getCartQuery, {
    options: props => {
      // console.log('from props:', props);
      return { variables: { id: 1 } };
    }
  }),
  graphql(cartInfoSubscription, {
    options: props => {
      // console.log('from props:', props);
      return { variables: { userId: 1 } };
    },
    name: "cartInfoSubscription"
  })
)(Header);
