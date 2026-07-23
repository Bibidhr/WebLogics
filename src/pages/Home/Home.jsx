import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Search,
  Code2,
  Share2,
  ShoppingBag,
  Target,
  Layers,
  ShieldCheck,
  Zap,
  Globe2,
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SectionHeader from '../../components/UI/SectionHeader';

// Data Imports
import { services as servicesData } from '../../data/services';
import { portfolioItems } from '../../data/portfolioItems';
import { caseStudies } from '../../data/caseStudies';
import { testimonials } from '../../data/testimonials';
import { logos } from '../../data/logos';

// Local CSS
import './Home.css';

const iconMap = { 
  Code2, Search, Target, Share2, ShoppingBag, 
  BarChart3, Layers, ShieldCheck, Zap, Globe2, Award
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const services = servicesData.map(s => ({ ...s, Icon: iconMap[s.iconName] || Code2 }));
  const featuredCaseStudy = caseStudies[0];

  return (
    <div className="home-page">
      {/* ── 1. Studio Hero Section ── */}
      <section className="home-hero-section" ref={heroRef}>
        <div className="hero-grid-pattern"></div>
        <div className="hero-ambient-glow"></div>
        
        <div className="container">
          <motion.div 
            className="home-hero-content"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={14} className="hero-badge-icon" />
              <span>Bespoke Digital Product Studio & Growth Agency</span>
            </motion.div>
            
            <motion.h1 
              className="home-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Engineering digital products & brand systems that turn attention into <span className="hero-highlight">revenue.</span>
            </motion.h1>
            
            <motion.p 
              className="home-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We partner with ambitious market leaders in Nepal and worldwide to build high-performance web systems, engineer brand identities, and scale digital revenue channels.
            </motion.p>
            
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg hero-btn-primary">
                Start a Project <ArrowUpRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-lg hero-btn-secondary">
                Explore Selected Work
              </Link>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div 
              className="hero-metrics-bar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="hero-metric-item">
                <span className="hero-metric-num">180+</span>
                <span className="hero-metric-label">Projects Delivered</span>
              </div>
              <div className="hero-metric-divider"></div>
              <div className="hero-metric-item">
                <span className="hero-metric-num">4.8×</span>
                <span className="hero-metric-label">Avg Campaign ROAS</span>
              </div>
              <div className="hero-metric-divider"></div>
              <div className="hero-metric-item">
                <span className="hero-metric-num">0.8s</span>
                <span className="hero-metric-label">Sub-Second Load Times</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Featured Hero Mockup / Showpiece */}
          <motion.div 
            className="hero-showcase-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="browser-shell hero-browser-shell">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot red"></span>
                  <span className="browser-dot yellow"></span>
                  <span className="browser-dot green"></span>
                </div>
                <div className="browser-bar">weblogics.com.np/selected-work</div>
              </div>
              <div className="browser-screen">
                <img 
                  src="/portfolio_garage.png" 
                  alt="Web-Logics Flagship Digital Experience Platform" 
                  className="hero-mockup-img"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Client Marquee ── */}
        <div className="hero-marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {logos.concat(logos).map((brand, idx) => (
                <div className="marquee-item" key={idx}>
                  <span className="marquee-brand-text">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Capabilities Section (Studio Clean Grid) ── */}
      <section className="capabilities-section">
        <div className="container">
          <SectionHeader 
            theme="dark" 
            label="Capabilities" 
            title="Engineered for business impact, not superficial metrics." 
            description="We combine senior product strategy, bespoke engineering, and growth acceleration into cohesive digital systems."
          />
          
          <div className="capabilities-grid">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.Icon;
              return (
                <motion.div 
                  key={index}
                  className="capability-card" 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon size={26} />
                    </div>
                    <span className="capability-index">0{index + 1}</span>
                  </div>
                  
                  <h3 className="capability-title">{service.title}</h3>
                  <p className="capability-desc">
                    {service.description}
                  </p>
                  
                  {service.benefits && (
                    <ul className="capability-features">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} className="feature-check" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link to={service.path} className="capability-cta">
                    <span>Explore Capability</span>
                    <ArrowRight size={16} className="capability-arrow" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Selected Work Showcase (Editorial Grid) ── */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-title-between">
            <SectionHeader 
              theme="light"
              label="Selected Work"
              title="Crafted for market dominance and conversion."
              description="Explore flagship digital transformations designed and deployed by our studio."
            />
            <Link to="/portfolio" className="btn btn-outline d-desktop-only">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="portfolio-grid">
            {portfolioItems.slice(0, 4).map((project, index) => (
              <motion.div 
                key={index} 
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="portfolio-image-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-image" />
                  <div className="portfolio-tag-overlay">
                    <span className="portfolio-country-pill">{project.country}</span>
                    <span className="portfolio-category-pill">{project.category}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.overview}</p>
                  
                  {project.resultsList && (
                    <div className="portfolio-metrics-row">
                      {project.resultsList.slice(0, 2).map((res, rIdx) => (
                        <div className="portfolio-metric-box" key={rIdx}>
                          <span className="metric-val">{res.metric}</span>
                          <span className="metric-lbl">{res.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to={`/portfolio`} className="portfolio-link">
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 d-mobile-only">
            <Link to="/portfolio" className="btn btn-outline btn-lg">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Featured Enterprise Case Study ── */}
      <section className="featured-case-study">
        <div className="container">
          <div className="case-study-card-xl">
            <div className="case-study-split">
              <motion.div 
                className="case-study-image"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="browser-shell">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="browser-dot red"></span>
                      <span className="browser-dot yellow"></span>
                      <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-bar">case-study / premium-garage-doors</div>
                  </div>
                  <img 
                    src={featuredCaseStudy?.image || '/portfolio_garage.png'} 
                    alt="Featured Case Study" 
                    className="case-study-img-fit"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="case-study-info"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <span className="section-label">Featured Transformation</span>
                <h2 className="case-study-heading">{featuredCaseStudy?.title || 'Enterprise Scaling'}</h2>
                <p className="case-study-text">
                  {featuredCaseStudy?.description || 'How we transformed a legacy web platform into a high-performance, lead-generating growth engine.'}
                </p>
                
                <div className="case-study-kpi-grid">
                  <div className="kpi-card">
                    <div className="kpi-value">+142%</div>
                    <div className="kpi-label">Organic Search Traffic</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-value">+88%</div>
                    <div className="kpi-label">Direct Qualified Leads</div>
                  </div>
                </div>
                
                <Link to="/case-studies" className="btn btn-primary">
                  Read Full Case Breakdown <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Studio Methodology (01 - 04 Stepped Process) ── */}
      <section className="process-section">
        <div className="container">
          <SectionHeader 
            theme="dark"
            label="Methodology"
            title="A disciplined workflow built for speed, clarity & scale."
            description="Every engagement is guided by a rigorous process to eliminate scope creep and ensure verified business impact."
          />
          
          <div className="process-timeline-grid">
            <div className="process-step-card">
              <span className="process-step-num">01</span>
              <h4>Discovery & Architecture</h4>
              <p>We audit market dynamics, map user journeys, and architect a clear technical roadmap aligned with commercial goals.</p>
            </div>
            <div className="process-step-card">
              <span className="process-step-num">02</span>
              <h4>Bespoke Design System</h4>
              <p>We design high-fidelity custom visual systems, interactive prototypes, and conversion pathways tailored to your brand.</p>
            </div>
            <div className="process-step-card">
              <span className="process-step-num">03</span>
              <h4>Technical Engineering</h4>
              <p>We write clean, high-performance React code, build decoupled headless architectures, and integrate core CRM APIs.</p>
            </div>
            <div className="process-step-card">
              <span className="process-step-num">04</span>
              <h4>Launch & Growth Acceleration</h4>
              <p>Rigorous multi-stage QA, speed optimization, and ongoing search and media campaign tuning for long-term lift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Client Testimonials & Authority ── */}
      <section className="testimonials-section">
        <div className="container">
          <SectionHeader 
            theme="light"
            label="Client Endorsements"
            title="Trusted by forward-thinking founders & executives."
            description="Our reputation is built on long-term growth partnerships and verified outcomes."
          />
          
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author-row">
                  <div className="testimonial-avatar">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.company} · {testimonial.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Final High-Intent CTA ── */}
      <section className="final-cta-section">
        <div className="final-cta-pattern"></div>
        <div className="container">
          <div className="final-cta-content">
            <span className="section-label section-label-light mb-4">Start the Conversation</span>
            <motion.h2 
              className="final-cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to engineer your next digital advantage?
            </motion.h2>
            <motion.p
              className="final-cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's map out a customized strategy, design, and growth roadmap tailored to your specific commercial objectives.
            </motion.p>
            <motion.div 
              className="final-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg cta-btn-main">
                Start a Project <ArrowUpRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline-white btn-lg">
                Explore Selected Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
