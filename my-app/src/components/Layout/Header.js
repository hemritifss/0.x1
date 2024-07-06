import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();
const Header = () => {
  return (
    <header className="header" data-aos="fade-down">
      <h1>TelNet Drones</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

