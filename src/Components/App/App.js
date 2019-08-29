import React, { Component } from 'react';
import './App.css';
import { getPurchases, postPurchase } from '../apiCalls/apiCalls.js';
import Container from '../Container/Container.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super() 
    
    this.state = {
      purchases: []
    }
  }

  componentDidMount() {
    getPurchases()
      .then(purchases => this.setState({ purchases }))
      .catch(error => console.log(error))
  }

  postNewPurchase = (newPurchase) => {
    postPurchase(newPurchase)
      .then(purchase => this.setState({
        purchases: [...this.state.purchases, purchase]
      }))
      .catch(error => console.log(error))
  } 
  
  render() {
    const { purchases } = this.state;
    console.log(purchases)

    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <Form postNewPurchase={this.postNewPurchase} />
          </div>
        </header>
        <Container purchases={purchases} />
    
      </div>
    );
  }
}

export default App;
