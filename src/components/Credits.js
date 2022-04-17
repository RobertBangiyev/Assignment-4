import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    }) 
  }

  changeDescription = (e) => {
    const descriptionText = e.target.value;
    this.setState({description: descriptionText});
  }

  changeAmount = (e) => {
    const amountNum = e.target.value;
    this.setState({amount: amountNum});
  }

  render() {
    return (
      <div>
        <h1>Credits</h1>
        {this.creditsView()}
        <form onSubmit={(e) => this.props.addCredit(e, this.state.description, this.state.amount)}>
          <input type="text" name="description" value={this.state.description} onChange={this.changeDescription}/>
          <input type="number" name="amount" value={this.state.amount} onChange={this.changeAmount}/>
          <button type="submit">Add Credit</button>
        </form>
        <p>Account Balance: {this.props.accountBalance}</p>
        <Link to="/">Return to Home</Link>
      </div>
    )
  }
}

export default Credits;