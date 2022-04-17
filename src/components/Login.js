import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
  constructor () {  // Create and initialize state
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  // When the user name input is changed, capture the input and update the state (user.userName)
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  render () {
    if (this.state.redirect) {  // Redirect to "User Profile" page when "Log In" button is clicked
      return (<Redirect to="/userProfile"/>)
    }
    // Render the login form
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName"/>
            <input className='textField' type="text" name="userName" placeholder='Username' onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password"/>
            <input className='textField' type="password" name="password" placeholder='Password' />
          </div>
          <button id='loginBtn'>Log In</button>
        </form>                  
      </div>
    )
  }
}

export default LogIn