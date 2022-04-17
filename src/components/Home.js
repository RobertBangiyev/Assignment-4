import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <nav className='navBar'>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/credits">Credits</Link>
        <br/>
        <Link to="/debits">Debits</Link>
        </nav>

        <img src="https://i.imgur.com/bihQenT.png" alt="bank" id='bank'/>
        <h1>Bank of React</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;