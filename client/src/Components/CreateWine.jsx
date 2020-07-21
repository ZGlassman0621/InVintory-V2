import React, { Component } from 'react'

export default class CreateWine extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { handleWineCreate, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleWineCreate(this.state);
        history.push('/Wine');
      }}>
        <h3>Create New Wine</h3>
        <label>
          Winery:
          <input
            type='text'
            value={this.state.winery}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Wine Name:
          <input
            type='text'
            value={this.state.wine_name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Vintage:
          <input
            type='text'
            value={this.state.vintage}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
