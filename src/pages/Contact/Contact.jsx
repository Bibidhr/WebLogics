import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Contact Us</span>
          <h1 className="display display-light">Let's discuss growth.</h1>
          <p className="lead mx-auto lead-light mt-4">
            Connect with a senior strategist in North Sydney. Book a briefing session or request a proposal.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container contact-grid">
          <motion.div 
            className="contact-info"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h2 variants={fadeUp}>Sydney Headquarters</motion.h2>
            <motion.p variants={fadeUp} className="body">
              We partner with established businesses looking to rebuild legacy platforms, rank organic search channels, and manage paid campaigns transparently.
            </motion.p>
            
            <motion.div variants={fadeUp} className="contact-methods">
              <div className="method-item">
                <div className="method-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Primary Office</h4>
                  <p>Suite 1105, 100 Walker Street<br/>North Sydney, NSW 2061, Australia</p>
                </div>
              </div>
              
              <div className="method-item">
                <div className="method-icon"><Phone size={20} /></div>
                <div>
                  <h4>Direct Phone</h4>
                  <p>+61 2 9066 6555</p>
                </div>
              </div>
              
              <div className="method-item">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Correspondence</h4>
                  <p>info@weblogics.com.au</p>
                </div>
              </div>
            </motion.div>

            {/* Map Block */}
            <motion.div variants={fadeUp} className="map-container">
              <div className="map-placeholder">
                <MapPin size={32} className="text-secondary mb-2" />
                <strong>100 Walker Street, North Sydney NSW 2061</strong>
                <a href="https://maps.google.com/?q=100+Walker+Street+North+Sydney" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Request a Proposal</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="E.g. David Harris" className="form-control" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" placeholder="E.g. david@harrispartners.com.au" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="E.g. +61 2 9066 6555" className="form-control" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Focus Area</label>
                  <select id="service" className="form-control" required>
                    <option value="">Select a service...</option>
                    <option value="web">Web Design & React Dev</option>
                    <option value="seo">Search Engine Optimization</option>
                    <option value="ads">Paid Media & Google Ads</option>
                    <option value="full">Comprehensive Growth Strategy</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Monthly Budget Range</label>
                  <select id="budget" className="form-control" required>
                    <option value="">Select a range...</option>
                    <option value="tier1">$2,000 — $5,000 /mo</option>
                    <option value="tier2">$5,000 — $10,000 /mo</option>
                    <option value="tier3">$10,000+ /mo</option>
                    <option value="project">One-off Custom Web Project</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Brief Project Background</label>
                <textarea id="message" rows="4" placeholder="Tell us about your current digital performance, conversion goals, or platform requirements..." className="form-control" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit-btn">
                Submit Consultation Request <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
