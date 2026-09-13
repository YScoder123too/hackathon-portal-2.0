import React from 'react';
import './Footer.css';
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand-column">
          <div className="footer-brand-logo">
            <Logo size={32} />
            <span className="footer-brand-name">CODWAYS</span>
          </div>
          <p className="footer-description">
            Empowering innovators to build the future through collaboration, creativity, and code.
          </p>
          <div className="social-row">
            <a href="#" aria-label="X (Twitter)"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#hackathons">Hackathons</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links-column" id="resources">
          <h4>Resources</h4>
          <ul>
            <li><a href="#guide">Guidelines</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#docs">API Docs</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#support">Contact Support</a></li>
          </ul>
        </div>

        <div className="footer-newsletter-column">
          <h4>Subscribe to our newsletter</h4>
          <p>Stay updated with the latest hackathons and announcements.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Codways Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;