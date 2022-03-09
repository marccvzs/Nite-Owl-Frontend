import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <NavLink to='/'></NavLink>
      <NavLink to='/restaurants'></NavLink>
      <NavLink to='/reservations'></NavLink>
    </header>
  )
}

export default NavBar