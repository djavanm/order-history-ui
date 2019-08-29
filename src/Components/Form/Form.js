import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      url: '',
      name: '',
      description: '',
      price: '',
    }
  }
  
  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  resetForm = () => {
    this.setState({
      url: '',
      name: '',
      description: '',
      price: '',
    })
  }

  createNewPurchase = (e) => {
    e.preventDefault();
    const { url, name, description, price } = this.state;
    const newPurchase = {
      id: Date.now(),
      img: url,
      name: name, 
      description: description,
      price: price
    }
    this.resetForm();
    this.props.postNewPurchase(newPurchase);
  }

  render() {
    const {url, name, description, price} = this.state;
    return ( 
      <form className="form">
        <input
        className="form-input"
        type="text"
        placeholder="Image URL"
        onChange={e => this.handleInput(e)}
        name="url"
        value={url}
        />
        <input
        className="form-input"
        type="text"
        placeholder="Name"
        onChange={e => this.handleInput(e)}
        name="name"
        value={name}
        />
        <input
        className="form-input"
        type="text"
        placeholder="Description"
        onChange={e => this.handleInput(e)}
        name="description"
        value={description}
        />
        <input
        className="form-input"
        type="number"
        placeholder="Price"
        onChange={e => this.handleInput(e)}
        name="price"
        value={price}
        />
        <button
        type="submit"
        className="form-button"
        onClick={e => this.createNewPurchase(e)}
        >
        Add Purchase
        </button>
      </form>
    )
  }
}

export default Form;