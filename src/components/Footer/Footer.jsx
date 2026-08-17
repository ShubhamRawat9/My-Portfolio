import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container container">
          <h1 className="footer-title">Shubham Rawat</h1>

          <ul className="footer-list">
            <li>
              <a href="#about" className="footer-link">About</a>
            </li>

            <li>
              <a href="#portfolio" className="footer-link">Portfolio</a>
            </li>

            <li>
              <a href="#services" className="footer-link">Services</a>
            </li>
          </ul>

          <div className="footer-social">
            <SocialLinks className="footer-social-link"/>
          </div>

          <span className="footer-copy">
            &#169; Crypticalcoder. All rights are reserved.
          </span>
        </div>
      </footer>
    </>
  )
}


