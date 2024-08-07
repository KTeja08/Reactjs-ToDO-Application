
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
       <h1><FaTasks /> My ToDo App</h1>
      <ul>
        <li><Link to="/home">Home</Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/app">App</Link></li> 
      
      </ul>
    </nav>
  );
};

export default Navbar;
