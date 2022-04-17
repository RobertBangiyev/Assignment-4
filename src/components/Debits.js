import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: '',
      amount: ''
    }
  }

  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}> ${debit.amount} {debit.description} {date}</li>
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
          <br/>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/credits">Credits</Link>
          </nav>
        <h1>Debits</h1>
        <div className='dcContainer'>
        {this.debitsView()}
        </div>
        <form onSubmit={(e) => this.props.addDebit(e, this.state.description, this.state.amount)}>
          <input className='textField' type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeDescription}/>
          <input className='textField' type="number" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.changeAmount}/>
          <button id='loginBtn' type="submit">Add Debit</button>
        </form>
        <p>Account Balance: {this.props.accountBalance}</p>
      </div>
    )
  }
}

export default Debits;