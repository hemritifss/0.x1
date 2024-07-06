import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-down">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Drone Management Platform by Telnet Technologies. All rights reserved.</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

