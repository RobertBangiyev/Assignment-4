import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
    
    class App extends Component {  
      constructor() {  // Create and initialize state
      super();
      this.state = {
        accountBalance: 0.00,
        currentUser: {
          userName: 'Joe Smith',
          memberSince: '07/23/96',
        },
        credits: [],
        debits: []
      }
    }

    mockLogIn = (logInInfo) => {  // Update state's currentUser (userName) after "Log In" button is clicked
      const newUser = {...this.state.currentUser}
      newUser.userName = logInInfo.userName
      this.setState({currentUser: newUser})
    }

    async componentDidMount() {
      try {
        const creditResponse = await fetch("https://moj-api.herokuapp.com/credits");
        const debitResponse = await fetch("https://moj-api.herokuapp.com/debits");
        let credits = await creditResponse.json();
        let debits = await debitResponse.json();
        console.log(credits);
        console.log(debits);
        this.setState({credits: credits});
        this.setState({debits: debits});
        this.initializeBalance();
      }
      catch(err) {
        console.log(err);
      }
    }

    initializeBalance() {
      let balance = 0;
      for(let i = 0; i < this.state.credits.length; i++) {
        balance+=this.state.credits[i].amount;
      }
      for(let i = 0; i < this.state.debits.length; i++) {
        balance-=this.state.debits[i].amount;
      }
      balance = Math.round(balance * 100) / 100;
      this.setState({
        accountBalance: balance
      });
    }
      

      addCredit = (e, description, amount) => {
        e.preventDefault();
        const date = new Date();
        const month = date.getUTCMonth() + 1; //months from 1-12
        let day = date.getUTCDate();
        if(date.getHours() >= 20) {
          day--;
        }
        const year = date.getUTCFullYear();
        const fullDate = year + '-'  + month + '-' + day;
        const newCredit = {
          id: this.state.credits.length,
          description: description,
          amount: amount,
          date: fullDate
        };
        let oldCredits = [...this.state.credits];
        oldCredits.push(newCredit);
        this.setState({
          accountBalance: parseFloat(this.state.accountBalance) + parseFloat(amount),
          credits: oldCredits
        });
      }

      addDebit = () => {

      }


      // Create Routes and React elements to be rendered using React components
      render() {   
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
        const UserProfileComponent = () => (
          <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />) 
        const DebitsComponent = () => (<Debits debits={this.state.debits} addCredit={this.addDebit} accountBalance={this.state.accountBalance}/>)
        const CreditsComponent = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} accountBalance={this.state.accountBalance}/>)
    
        return (
            <Router>
              <div>
                <Route exact path="/" render={HomeComponent}/>
                <Route exact path="/userProfile" render={UserProfileComponent}/>
                <Route exact path="/login" render={LogInComponent}/>
                <Route exact path="/debits" render={DebitsComponent}/>
                <Route exact path="/credits" render={CreditsComponent}/>
              </div>
            </Router>
        );
      }
    
    }
    
    export default App;