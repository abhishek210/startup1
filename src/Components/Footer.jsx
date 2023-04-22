// import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-icons">
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>
        <p>&copy; 2023 My Website</p>
      </div>
    </footer>
  );
}

export default Footer;
