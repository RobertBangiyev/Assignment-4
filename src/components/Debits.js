import {Link} from 'react-router-dom';
const Debits = (props) => {
    let debitsView = () => {
    const { debits } = props;
    console.log(props);
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}> ${debit.amount} {debit.description} {date}</li>
    }) 
  }
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
      {debitsView()}
      </div>
      <form onSubmit={props.addDebit}>
        <input className='textField' type="text" name="description" />
        <input className='textField' type="number" name="amount" />
        <button id='loginBtn' type="submit">Add Debit</button>
      </form>
    </div>
  )
}

export default Debits;