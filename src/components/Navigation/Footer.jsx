import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section-navy">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand & Socials */}
          <div className="footer-brand">
            <h2 className="brand-text">Web<span>logics</span></h2>
            <p className="body-sm mt-4">
              Australia's premier digital agency. We partner with established service businesses and global brands to build robust digital solutions and drive measurable growth.
            </p>
            <div className="social-links mt-6">
              <a href="#" className="social-icon" aria-label="LinkedIn">LI</a>
              <a href="#" className="social-icon" aria-label="Twitter">TW</a>
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div className="link-column">
            <h4>Services</h4>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/ui-ux-design">UI/UX Design</Link>
            <Link to="/services/branding">Branding</Link>
            <Link to="/services/seo">SEO Optimization</Link>
            <Link to="/services/maintenance">Maintenance & Support</Link>
          </div>
          
          {/* Column 3: Company */}
          <div className="link-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact#faqs">FAQs</Link>
          </div>
          
          {/* Column 4: Contact Information & CTA */}
          <div className="link-column contact-column">
            <h4>Contact Information</h4>
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:info@weblogics.com.au">info@weblogics.com.au</a>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <a href="tel:+61290666555">+61 2 9066 6555</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Suite 1105, 100 Walker Street,<br/>North Sydney, NSW 2061</span>
            </div>
            <div className="contact-item">
              <Clock size={16} />
              <span>Mon - Fri: 9:00 AM - 5:30 PM</span>
            </div>
            <div className="mt-4">
              <Link to="/contact" className="btn btn-outline-white nav-cta" style={{ width: '100%' }}>
                Get in Touch <ArrowRight size={14} />
              </Link>
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
            <Link to="/cookies">Cookie Policy</Link>
            <span className="designer-tag">Designed by Web Logics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
