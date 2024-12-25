  import React from 'react';
  import './Footer.css';
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* About Info */}
          <div className="footer-section about-info">
            <h3>About Info</h3>
            <p>
              T and T Infra Limited was originally incorporated as a private
              limited company under the Companies Act, 1956 in the name of T and
              T Infra Private Limited vide Certificate of Incorporation dated on
              September 28, 2012 issued by the Registrar of Companies,
              Maharashtra, Pune.
            </p>
          </div>
  
          {/* Link of Our Project */}
          <div className="footer-section project-links">
            <h3>Link of Our Project</h3>
            <ul>
              <li>Landmark</li>
              <li>Bridge & Flyovers</li>
              <li>Roads</li>
              <li>Industrial Buildings</li>

            </ul>
          </div>
  
          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Leadership</li>
              <li>Clients</li>
              <li>Gallery</li>
              <li>Career</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h3>Contact Info</h3>
            <p>
              <strong>Office:</strong> No 1-5 A1, Vishunu Vihar, Bibvewadi-Kondhwa
              Road, Marketyard, Pune – 37 (Maharashtra)
            </p>
            <p>
              <strong>Phone:</strong> +91 20 24275945 / 24265080
            </p>
            <p>
              <strong>Email:</strong> info@tandtinfra.com /
              hr@tandtinfra.com
            </p>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>
            © Copyright 2021 <span>T AND T INFRA LIMITED</span>. All Rights
            Reserved.
          </p>
          <div className="bottom-links">
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#gallery">Gallery</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;