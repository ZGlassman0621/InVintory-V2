import React from 'react'
import { Link } from 'react-router-dom'
import img from "https://i.imgur.com/6NaNMw0.png";

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <img src="https://i.imgur.com/6NaNMw0.png" alt="Logo" />
    </header>
  )
}