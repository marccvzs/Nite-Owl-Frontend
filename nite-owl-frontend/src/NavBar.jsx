import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="navBar">
      <Link className="nav" to='/'>Home</Link>
      <Link className="nav" to='/restaurants'>Make a Date</Link>
      <Link className="nav" to='/reservations'>Your Reservations</Link>
    </header>
  )
}

export default NavBar