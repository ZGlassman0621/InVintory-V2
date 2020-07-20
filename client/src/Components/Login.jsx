import logo from "https://i.imgur.com/6NaNMw0.png";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '/Header.jsx';
import Buttons from '/Buttons.jsx'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    const { username, password } = this.state;
    const { handleLogin, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(this.state);
        history.push('/')
      }}>
        <div>
          <label class="userField">Username:</label>
          <input type="text" placeholder="Enter Username" name="username" required value={username} onChange={this.handleChange}></input>
          <br />
          <label class="passField">Password:</label>
          <input type="text" placeholder="Enter Password" name="password" required value={password} onChange={this.handleChange}></input>
          <br />
          <button class="loginButton">LOGIN</button>
          <button class="newUser">CREATE NEW USER</button>
        </div>
        )
      </form>
    )
  }
}