import { Mail, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';
import { fadeUp } from '../../data/animations';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Start a Conversation</span>
          <h1 className="display display-light">Let's discuss growth.</h1>
          <p className="lead mx-auto lead-light mt-4">
            Connect directly with a principal strategist at our Kathmandu studio. Schedule a briefing session or submit a project proposal.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="contact-grid">
              <motion.div 
                className="contact-info"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                <motion.h2 variants={fadeUp}>Kathmandu Headquarters</motion.h2>
                <motion.p variants={fadeUp} className="body">
                  We partner with ambitious enterprises and market leaders looking to engineer high-performance web systems, rebrand digital presence, and manage paid acquisition channels transparently.
                </motion.p>
                
                <motion.div variants={fadeUp} className="contact-methods">
                  <div className="method-item">
                    <div className="method-icon"><MapPin size={20} /></div>
                    <div>
                      <h4>Primary Studio</h4>
                      <p>Level 4, Heritage Plaza, Kamaladi<br/>Kathmandu, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-icon"><Phone size={20} /></div>
                    <div>
                      <h4>Direct Phone</h4>
                      <p>+977 (01) 452-8900 / +977 98012 34567</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-icon"><Mail size={20} /></div>
                    <div>
                      <h4>Email Inquiries</h4>
                      <p>hello@weblogics.com.np</p>
                    </div>
                  </div>
                </motion.div>

                {/* Map Block */}
                <motion.div variants={fadeUp} className="map-container">
                  <div className="map-placeholder">
                    <MapPin size={32} className="text-secondary mb-2" />
                    <strong>Heritage Plaza, Kamaladi, Kathmandu, Nepal</strong>
                    <a href="https://maps.google.com/?q=Kamaladi+Kathmandu+Nepal" target="_blank" rel="noopener noreferrer">
                      Open in Google Maps <ArrowUpRight size={14} />
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
                    <input type="text" id="name" placeholder="E.g. Sushant Adhikari" className="form-control" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input type="email" id="email" placeholder="E.g. sushant@company.com" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="E.g. +977 98012 34567" className="form-control" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Focus Area</label>
                      <select id="service" className="form-control" required>
                        <option value="">Select primary focus...</option>
                        <option value="web">Digital Product & React Engineering</option>
                        <option value="branding">Brand Identity & Visual System</option>
                        <option value="seo">Search Authority & Technical SEO</option>
                        <option value="ads">Performance PPC & Paid Social</option>
                        <option value="full">End-to-End Digital Transformation</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Estimated Scope / Budget</label>
                      <select id="budget" className="form-control" required>
                        <option value="">Select range...</option>
                        <option value="tier1">NPR 150,000 — 300,000 / Project</option>
                        <option value="tier2">NPR 300,000 — 750,000 / Project</option>
                        <option value="tier3">NPR 750,000+ Enterprise</option>
                        <option value="global">USD $3,000 — $10,000+ (Global)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Brief Project Background</label>
                    <textarea id="message" rows="4" placeholder="Tell us about your organization, conversion objectives, timeline, or platform requirements..." className="form-control" required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    Submit Proposal Request <Send size={16} className="ml-2" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
