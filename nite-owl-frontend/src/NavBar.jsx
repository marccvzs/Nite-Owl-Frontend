import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/restaurants'>restaurants</NavLink>
      <NavLink to='/reservations'>reservations</NavLink>
    </header>
  )
}

export default NavBar