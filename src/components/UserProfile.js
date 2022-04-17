// src/components/UserProfile.js
// The UserProfile component is used to demonstrate the use of Route and Link.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
      <div>
      <nav className='navBar'>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/credits">Credits</Link>
    <br/>
    <Link to="/debits">Debits</Link>
    </nav>
      <div id='userProfileContainer'><h1>Welcome back, {this.props.userName}</h1></div>
      <div id='est'>Member Since: {this.props.memberSince}</div>
    </div>
    );
  }
}

export default UserProfile;