// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';


// export default class Login extends Component {
//   state = {
//     username: "",
//     password: ""
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     const { username, password } = this.state;
//     const { handleLogin, history } = this.props;

//     return (
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         handleLogin(this.state);
//         history.push('/')
//       }}>
//         <h3>Login</h3>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <button Link to='/Register'>CREATE NEW USER</button>
//         <button Link to='/Main'>Submit</button>
//       </form>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
