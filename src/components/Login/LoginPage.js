import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../index.css';

export default function LoginPage() {
  return (
    <div className='admin'>
      <nav className='navbar'>
        <NavLink to="register" className='nav-link'>Register</NavLink>
        <NavLink to="login" className='nav-link'>Login</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
