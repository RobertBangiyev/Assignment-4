import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      amount: ''
    }
  }

  creditsView = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
      let date = credit.date.slice(0, 10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    })
  }

  changeDescription = (e) => {
    const descriptionText = e.target.value;
    this.setState({ description: descriptionText });
  }

  changeAmount = (e) => {
    const amountNum = e.target.value;
    this.setState({ amount: amountNum });
  }

  render() {
    return (
      <div>
        <nav className='navBar'>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/">Home</Link>
          <br />
          <Link to="/userProfile">User Profile</Link>
          <br />
          <Link to="/debits">Debits</Link>
        </nav>
          <h1>Credits</h1>
          <div className='dcContainer'>
          {this.creditsView()}
          </div>
          <form onSubmit={(e) => this.props.addCredit(e, this.state.description, this.state.amount)}>
            <input className='textField' type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeDescription} />
            <input className='textField' type="number" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.changeAmount} />
            <button id='loginBtn' type="submit">Add Credit</button>
          </form>
          <p>Account Balance: {this.props.accountBalance}</p>
        </div>
        )
  }
}

        export default Credits;