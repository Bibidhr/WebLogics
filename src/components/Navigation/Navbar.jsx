import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const openDropdown = useCallback(() => {
    clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="brand" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="brand-text">Web<span className="text-accent">logics</span></span>
        </NavLink>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
                Home
              </NavLink>
            </li>
            <li 
              className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? "nav-item-with-icon active-link" : "nav-item-with-icon"}
              >
                Services <ChevronDown size={14} />
              </NavLink>
              <div className="dropdown-bridge"></div>
              <ul className="dropdown-menu">
                <li><NavLink to="/services/web-development">Web Development</NavLink></li>
                <li><NavLink to="/services/seo">SEO Optimization</NavLink></li>
                <li><NavLink to="/services/google-ads">Google Ads & PPC</NavLink></li>
                <li><NavLink to="/services/social-media-marketing">Social Media Marketing</NavLink></li>
                <li><NavLink to="/services/branding">Brand Strategy</NavLink></li>
                <li><NavLink to="/services/ecommerce">E-commerce Solutions</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/case-studies" className={({ isActive }) => isActive ? "active-link" : ""}>
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={({ isActive }) => isActive ? "active-link" : ""}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "active-link" : ""}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="tel:+61290666555" className="nav-phone d-mobile-none">
            +61 2 9066 6555
          </a>
          <NavLink to="/contact" className="btn btn-primary nav-cta">
            Contact Us
          </NavLink>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
          <div className="mobile-sublinks">
            <NavLink to="/services/web-development" onClick={() => setIsMobileMenuOpen(false)}>— Web Development</NavLink>
            <NavLink to="/services/seo" onClick={() => setIsMobileMenuOpen(false)}>— SEO Optimization</NavLink>
            <NavLink to="/services/google-ads" onClick={() => setIsMobileMenuOpen(false)}>— Google Ads & PPC</NavLink>
          </div>
          <NavLink to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</NavLink>
          <NavLink to="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
          <a href="tel:+61290666555" className="mobile-phone-link">+61 2 9066 6555</a>
          <NavLink to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </header>
  );
}
