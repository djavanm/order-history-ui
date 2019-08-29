import React, { Componenet } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      url: '',
      name: '',
      description: '',
      price: '',
    }

    handleInput = (e) => {
      e.preventDefault()
      this.setState({
        [e.target.name]: [e.target.value]
      })
    }
  }

  render() {
    const {url, name, description, price} = this.state;
    <form>
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
      placeholder="Image URL"
      onChange={e => this.handleInput(e)}
      name="name"
      value={name}
      />
      <input
      className="form-input"
      type="text"
      placeholder="Image URL"
      onChange={e => this.handleInput(e)}
      name="description"
      value={description}
      />
      <input
      className="form-input"
      type="number"
      placeholder="Image URL"
      onChange={e => this.handleInput(e)}
      name="price"
      value={price}
      />
      <button
      type="submit"
      className="form-button"
      onClick={() => console.log('hi')}
      >
      Add Purchase
      </button>
    </form>
  }
}