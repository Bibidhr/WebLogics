import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Clock, ArrowRight, Globe } from 'lucide-react';
import './Footer.css';

const footerSections = [
  {
    title: 'Studio',
    links: [
      { label: 'Selected Work', to: '/portfolio' },
      { label: 'Capabilities', to: '/services' },
      { label: 'About Studio', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Contact', to: '/contact' }
    ]
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Digital Product Engineering', to: '/services/web-development' },
      { label: 'Brand Strategy & Identity', to: '/services/branding' },
      { label: 'Search Engine Optimization', to: '/services/seo' },
      { label: 'Performance PPC Media', to: '/services/google-ads' },
      { label: 'Headless E-Commerce', to: '/services/ecommerce' }
    ]
  },
  {
    title: 'Insights',
    links: [
      { label: 'Studio Perspectives', to: '/blog' },
      { label: 'Client Case Studies', to: '/case-studies' },
      { label: 'Careers & Culture', to: '/careers' },
      { label: 'Project Estimator', to: '/contact' }
    ]
  }
];

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon }
];

export default function Footer() {
  return (
    <footer className="footer section-navy">
      <div className="container">
        <div className="footer-cta-card">
          <div>
            <span className="section-label section-label-light">Let's Collaborate</span>
            <h2>Ready to transform your digital presence into a revenue engine?</h2>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="brand-text">Weblogic<span className="brand-dot text-accent">.</span></h2>
            <p>
              Global digital growth partner headquartered in Sydney, Australia. We connect custom web development, search engine optimization, performance advertising, social media, and content creation to drive measurable business outcomes.
            </p>

            <div className="social-links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} className="social-icon" aria-label={label} target="_blank" rel="noreferrer">
                  <Icon />
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
            <h4>Sydney HQ 🇦🇺</h4>
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:hello@weblogics.com.au">hello@weblogics.com.au</a>
            </div>
            <div className="contact-item">
              <Globe size={16} />
              <a href="https://weblogics.com.au/" target="_blank" rel="noreferrer">https://weblogics.com.au/</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Sydney, New South Wales, Australia<br />Australian Owned & Operated</span>
            </div>
            <div className="contact-item">
              <Clock size={16} />
              <span>Mon – Fri: 9:00 AM – 5:30 PM AEST</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Weblogic Technologies. All rights reserved. Australian Owned & Operated.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <span className="designer-tag">Sydney, Australia 🇦🇺</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
