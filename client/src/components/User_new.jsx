import React, { Component } from 'react';

class User_new extends Component {
  render() {
    return (
      <main className="main user_new_main">
        <div>Please Enter Your User Information</div>
        <form>
            <input type="text" placeholder="Username" name='username' />
            
            <input type="text" placeholder="Email" name='email' />
            <input type="text" placeholder="Password" name='password' />
            <input type="text" placeholder="Confirm Password" name='confirm-password' />
            <button type="submit">Submit</button>
          </form>
      </main>
    );
  }
}

export default User_new;
