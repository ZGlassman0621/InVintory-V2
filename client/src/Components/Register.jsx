import React, { Component } from "react";

export default class Register extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(this.state);
          history.push("/");
        }}
      >
        <h3>Register</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    );
  }
}

// To prevent plagiarism, please note: This is copied nearly word for word from register.jsx in Tasteville with changes to suit my project. Since this is pretty standard code for what I need, I hope this will be acceptable.