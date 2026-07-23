import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
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
    }, 250);
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
          <span className="brand-text">Web<span className="brand-dot">-</span><span className="text-accent">Logics</span></span>
          <span className="brand-tagline">Studio</span>
        </NavLink>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""}>
                Work
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
                Capabilities <ChevronDown size={14} />
              </NavLink>
              <div className="dropdown-bridge"></div>
              <ul className="dropdown-menu">
                <li><NavLink to="/services/web-development">Digital Product Engineering</NavLink></li>
                <li><NavLink to="/services/branding">Brand Identity & Strategy</NavLink></li>
                <li><NavLink to="/services/seo">Search & Growth Optimization</NavLink></li>
                <li><NavLink to="/services/google-ads">Performance Marketing (PPC)</NavLink></li>
                <li><NavLink to="/services/ecommerce">Headless Commerce</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/case-studies" className={({ isActive }) => isActive ? "active-link" : ""}>
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                About Studio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "active-link" : ""}>
                Insights
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <NavLink to="/contact" className="btn btn-primary nav-cta">
            Start a Project <ArrowUpRight size={16} />
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
          <NavLink to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Work</NavLink>
          <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Capabilities</NavLink>
          <div className="mobile-sublinks">
            <NavLink to="/services/web-development" onClick={() => setIsMobileMenuOpen(false)}>— Product Engineering</NavLink>
            <NavLink to="/services/branding" onClick={() => setIsMobileMenuOpen(false)}>— Brand Identity</NavLink>
            <NavLink to="/services/seo" onClick={() => setIsMobileMenuOpen(false)}>— Search & Growth</NavLink>
            <NavLink to="/services/ecommerce" onClick={() => setIsMobileMenuOpen(false)}>— Headless Commerce</NavLink>
          </div>
          <NavLink to="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Studio</NavLink>
          <NavLink to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Insights</NavLink>
          <NavLink to="/contact" className="btn btn-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>Start a Project <ArrowUpRight size={16} /></NavLink>
        </div>
      )}
    </header>
  );
}
