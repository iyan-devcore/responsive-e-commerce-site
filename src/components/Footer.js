import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand Section */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <div className="footer-logo-icon">T</div>
                        <span className="footer-logo-text">TechStore</span>
                    </Link>
                    <p className="footer-desc">
                        Your one-stop shop for premium tech products. Quality gadgets, competitive prices, exceptional service.
                    </p>
                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" className="subscribe-input" />
                        <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </button>
                    </form>
                </div>

                {/* Links Sections */}
                <div className="footer-links-container">
                    <div className="footer-column">
                        <h4 className="footer-heading">Shop</h4>
                        <Link to="/shop" className="footer-link">All Products</Link>
                        <Link to="/smartphones" className="footer-link">Smartphones</Link>
                        <Link to="/laptops" className="footer-link">Laptops</Link>
                        <Link to="/audio" className="footer-link">Audio</Link>
                        <Link to="/wearables" className="footer-link">Wearables</Link>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Support</h4>
                        <Link to="/contact" className="footer-link">Contact Us</Link>
                        <Link to="/faqs" className="footer-link">FAQs</Link>
                        <Link to="/shipping" className="footer-link">Shipping Info</Link>
                        <Link to="/returns" className="footer-link">Returns</Link>
                        <Link to="/track" className="footer-link">Track Order</Link>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Company</h4>
                        <Link to="/about" className="footer-link">About Us</Link>
                        <Link to="/careers" className="footer-link">Careers</Link>
                        <Link to="/press" className="footer-link">Press</Link>
                        <Link to="/blog" className="footer-link">Blog</Link>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Legal</h4>
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                        <Link to="/terms" className="footer-link">Terms of Service</Link>
                        <Link to="/cookie" className="footer-link">Cookie Policy</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p className="copyright">© 2024 TechStore. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="social-icon" aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="YouTube">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
