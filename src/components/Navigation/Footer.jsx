import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="brand-text">Web<span className="text-gradient">logics</span></h2>
            <p className="body-md mt-4">
              Australia's premier digital growth agency. We build custom solutions that drive measurable business outcomes.
            </p>
            <div className="social-links mt-6">
              <a href="#" className="social-icon">IN</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">IG</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>Services</h4>
              <Link to="/services/web-development">Web Development</Link>
              <Link to="/services/seo">SEO Optimization</Link>
              <Link to="/services/google-ads">Google Ads</Link>
              <Link to="/services/branding">Brand Strategy</Link>
              <Link to="/services/ecommerce">E-Commerce</Link>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-column contact-column">
              <h4>Get in Touch</h4>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Suite 1105, 100 Walker Street<br/>North Sydney, NSW 2061, AU</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+61 2 9066 6555</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@weblogics.com.au</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Weblogics Digital Agency. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
