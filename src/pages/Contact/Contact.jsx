import { Mail, MapPin, Globe, Send, ArrowUpRight, ShieldCheck } from 'lucide-react';
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
            Connect directly with a strategist at Weblogic Technologies. Schedule a strategy session or request a custom proposal for your business.
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
                <motion.h2 variants={fadeUp}>Sydney Global Headquarters 🇦🇺</motion.h2>
                <motion.p variants={fadeUp} className="body">
                  We partner with ambitious local and international businesses to build high-converting websites, execute search engine optimization, manage paid ads, and drive measurable revenue growth.
                </motion.p>
                
                <motion.div variants={fadeUp} className="contact-methods">
                  <div className="method-item">
                    <div className="method-icon"><MapPin size={20} /></div>
                    <div>
                      <h4>Global Headquarters</h4>
                      <p>Sydney, New South Wales, Australia<br/>Australian Owned & Operated</p>
                    </div>
                  </div>
                  
                  <div className="method-item">
                    <div className="method-icon"><Mail size={20} /></div>
                    <div>
                      <h4>Email Inquiries</h4>
                      <p>hello@weblogics.com.au</p>
                    </div>
                  </div>

                  <div className="method-item">
                    <div className="method-icon"><Globe size={20} /></div>
                    <div>
                      <h4>Official Website</h4>
                      <p>https://weblogics.com.au/</p>
                    </div>
                  </div>
                </motion.div>

                {/* Map Block */}
                <motion.div variants={fadeUp} className="map-container">
                  <div className="map-placeholder">
                    <MapPin size={32} className="text-secondary mb-2" />
                    <strong>Sydney, New South Wales, Australia 🇦🇺</strong>
                    <a href="https://maps.google.com/?q=Sydney+Australia" target="_blank" rel="noopener noreferrer">
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
                  <h3>Request a Strategy Proposal</h3>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="E.g. David Miller" className="form-control" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input type="email" id="email" placeholder="E.g. david@company.com" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="E.g. +61 400 123 456" className="form-control" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Focus Area</label>
                      <select id="service" className="form-control" required>
                        <option value="">Select primary focus...</option>
                        <option value="web">BUILD: Website Design & Development</option>
                        <option value="seo">BE FOUND: SEO / Search Optimization</option>
                        <option value="ads">GET RESULTS: Paid Advertising / PPC</option>
                        <option value="social">STAY CONNECTED: Social Media Marketing</option>
                        <option value="content">TELL THE STORY: Content Creation</option>
                        <option value="full">GROW STRATEGICALLY: Complete Strategy</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Estimated Project Scope</label>
                      <select id="budget" className="form-control" required>
                        <option value="">Select range...</option>
                        <option value="tier1">AUD $5,000 — $15,000 / Growth Campaign</option>
                        <option value="tier2">AUD $15,000 — $35,000 / Scalable Engine</option>
                        <option value="tier3">AUD $35,000+ Enterprise Transformation</option>
                        <option value="global">USD $5,000 — $25,000+ (International)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Brief Project Background</label>
                    <textarea id="message" rows="4" placeholder="Tell us about your business goals, target markets, timeline, or current website requirements..." className="form-control" required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    Submit Strategy Request <Send size={16} className="ml-2" />
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
