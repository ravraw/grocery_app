import React, { Component } from "react";

import NavigationBar from "../NavigationBar.jsx";

const userId = 12;
const email = "rav@rav.com";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="account">
        <NavigationBar />
        <div className="user_display">
          <form className="user_profile">
            <div className="account_info">
              <h2>Account information</h2>
              <label>
                Account # <span>{userId}</span>
              </label>
              <label>
                Email: <input type="text" placeholder={email} />
              </label>

              <label>
                Password: <input type="password" value={123456789} />
              </label>
            </div>
            <div className="personal_info">
              <h2>Personal information</h2>
              <label>
                First Name: <input type="text" value="ravindra" />
              </label>

              <label>
                Last Name:
                <input type="text" value="rawat" />{" "}
              </label>

              <label>
                Phone : <input type="text" value={4039039057} />
              </label>
              <label>
                Address :{" "}
                <input
                  type="text"
                  value={"30 Somerglen Cove SW, Calgary,Alberta"}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Account;
