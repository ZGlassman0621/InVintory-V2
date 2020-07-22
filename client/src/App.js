// import React, { Component } from 'react'
// import { loginUser, registerUser, removeToken, verifyUser } from '../src/Services/auth.js'
// import Main from './Components/Main.jsx'
// import { withRouter } from 'react-router-dom';

// class App extends Component {
//   state = {
//     currentUser: null
//   }

//   componentDidMount() {
//     this.handleVerify();
//   }

//   handleLogin = async (userData) => {
//     const currentUser = await loginUser(userData);
//     this.setState({ currentUser })
//   }

//   handleRegister = async (userData) => {
//     const currentUser = await registerUser(userData);
//     this.setState({ currentUser })
//   }

//   handleLogout = () => {
//     this.setState({
//       currentUser: null
//     })
//     localStorage.removeItem('authToken');
//     removeToken();
//     this.props.history.push('/')
//   }

//   handleVerify = async () => {
//     const currentUser = await verifyUser();
//     this.setState({ currentUser });
//   }

//   render() {
//     return (
//       <div>
//         <Main
//           currentUser={this.state.currentUser}
//           handleLogin={this.handleLogin}
//           handleRegister={this.handleRegister}
//         />
//       </div>
//     )
//   }
// }

// export default withRouter(App);

import React, { Component } from "react";
import { getWines } from "./Services/apiHelper";
import './App.css'

export default class App extends Component {
  state = {
    wines: null,
  };

  componentDidMount = async () => {
    const wines = await getWines();
    this.setState({
      wines,
    });
  };

  render() {
    return (
      <div>
      {this.state.wines && this.state.wines.map
        (wine => (
          <div className='wine'>
            <h2>{wine.winery}</h2>
            <h3>{wine.wine_name}</h3>
            <h3>{wine.vintage}</h3>
        </div>
      ))}
      </div>
    )
  }
}
