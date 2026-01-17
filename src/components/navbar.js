import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-container">
            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isMenuOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>

            {/* Logo Section */}
            <Link to="/" className="navbar-logo">
                <div className="logo-icon">T</div>
                <span className="logo-text">TechStore</span>
            </Link>

            {/* Navigation Links */}
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/" className="nav-link">Home</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/shop" className="nav-link">Shop</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/smartphones" className="nav-link">Smartphones</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/laptops" className="nav-link">Laptops</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/audio" className="nav-link">Audio</Link></li>
            </ul>

            {/* Search and Icons */}
            <div className="navbar-actions">
                <div className="search-container">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search products..." className="search-input" />
                </div>

                <div className="action-icons">
                    <button className="icon-btn" aria-label="Wishlist">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>

                    <button className="icon-btn" aria-label="Cart">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="badge">2</span>
                    </button>

                    <Link to="/register" className="nav-link">
                    <button className="icon-btn" aria-label="Account">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;