import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers';

class App extends Component {
  constructor (){
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers') // pas besoin de noter http://localhost:5000/api/customers car on a définit le proxy ds la package.json
      .then(res => res.json()) 
      .then(customers => this.setState({customers}, console.log('Customers fetched: ', customers)))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Customers />
          <ul>
            {this.state.customers.map(customer => <li key={customer.id}>{customer.firstname} {customer.lastname}</li>)}

          </ul>
        </header>
      </div>
    );
  }
}

export default App;