import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Clock, ArrowRight, Globe2, Send, MessageCircle } from 'lucide-react';
import './Footer.css';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Contact', to: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'SEO & Growth', to: '/services/seo' },
      { label: 'Google Ads', to: '/services/google-ads' },
      { label: 'Ecommerce', to: '/services/ecommerce' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Blog', to: '/blog' },
      { label: 'FAQ', to: '/contact#faqs' },
      { label: 'Careers', to: '/careers' }
    ]
  },
  {
    title: 'Quick Navigation',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Cookies', to: '/cookies' },
      { label: 'Book a Call', to: '/contact' }
    ]
  }
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Globe2 },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Send },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: MessageCircle }
];

export default function Footer() {
  return (
    <footer className="footer section-navy">
      <div className="container">
        <div className="footer-cta-card">
          <div>
            <span className="section-label">Ready to begin</span>
            <h2>Let&apos;s build something great together.</h2>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="brand-text">Web<span>logics</span></h2>
            <p>
              Premium digital strategy, development, and growth services for ambitious brands that need clarity, quality, and measurable results.
            </p>

            <div className="social-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} className="social-icon" aria-label={label} target="_blank" rel="noreferrer">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div className="link-column" key={section.title}>
              <h4>{section.title}</h4>
              {section.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="link-column contact-column">
            <h4>Contact</h4>
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
              <span>Suite 1105, 100 Walker Street,<br />North Sydney, NSW 2061</span>
            </div>
            <div className="contact-item">
              <Clock size={16} />
              <span>Business Hours<br />Mon – Fri: 9:00 AM – 5:30 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Weblogics Digital Agency. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
            <span className="designer-tag">Designed by Weblogics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
