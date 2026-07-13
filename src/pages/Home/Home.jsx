import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Search,
  Code2,
  Share2,
  ShoppingBag,
  Target,
  Layers,
  Mail,
  ShieldCheck,
  Handshake,
  Zap,
  Globe2,
  Award,
  Factory,
  HardHat,
  Briefcase,
  Truck,
  Coffee,
  HeartPulse
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';


import { useRef, useState, useEffect } from 'react';
import IndustryModal from '../../components/UI/IndustryModal';
import SectionHeader from '../../components/UI/SectionHeader';

// Data Imports
import { services as servicesData } from '../../data/services';
import { portfolioItems } from '../../data/portfolioItems';
import { caseStudies } from '../../data/caseStudies';
import { industries as industriesData } from '../../data/industries';
import { testimonials } from '../../data/testimonials';

// Local CSS
import './Home.css';

const iconMap = { 
  Code2, Search, Target, Share2, ShoppingBag, 
  BarChart3, Layers, Mail, ShieldCheck, Handshake, Zap, Globe2, Award,
  Factory, HardHat, Briefcase, Truck, Coffee, HeartPulse
};

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndustry) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndustry]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.95]);

  // Map icons
  const services = servicesData.map(s => ({ ...s, Icon: iconMap[s.iconName] || Code2 }));
  const industries = industriesData.map(i => ({ ...i, Icon: iconMap[i.iconName] || Briefcase }));
  const featuredCaseStudy = caseStudies[0]; // Take the first one

  return (
    <div className="home-page">
      {/* ── 1. Hero Section (White) ── */}
      <section className="home-hero-section" ref={heroRef}>
        <motion.div 
          className="hero-parallax-bg"
          style={{ y: bgY, scale: bgScale }}
        />
        <motion.div 
          className="hero-overlay"
          style={{ opacity: overlayOpacity }}
        />
        <div className="hero-radial-glow"></div>
        <div className="container">
          <div className="home-hero-content">
            <motion.h1 
              className="home-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium websites and growth systems that turn attention into <span className="text-accent">revenue.</span>
            </motion.h1>
            
            <motion.p 
              className="home-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We partner with established service businesses and global ecommerce brands to transform their digital presence into high-conversion sales pipelines.
            </motion.p>
            
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Discovery Call
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-lg">
                View Our Work
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="hero-mockup-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Website Dashboard" 
              className="hero-mockup-img"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 2. Capabilities Section (Deep Navy) ── */}
      <section className="capabilities-section">
        <div className="container">
          <SectionHeader 
            theme="dark" 
            label="Capabilities" 
            title="Capabilities designed to move revenue, not just traffic." 
            description="We build digital systems that strengthen brand confidence, increase qualified demand, and support long-term commercial growth."
          />
          
          <div className="capabilities-grid">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.Icon;
              return (
                <motion.div 
                  key={index}
                  className="capability-card" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="capability-icon">
                    <Icon size={28} />
                  </div>
                  <div className="capability-content">
                    <h3 className="h4 h1-light mb-3">{service.title}</h3>
                    <p className="capability-desc text-sm">
                      {service.description}
                    </p>
                    {service.benefits && (
                      <ul className="capability-features">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i}>
                            <svg className="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to={service.path} className="capability-cta inline-flex items-center text-sm">
                      Explore Capability <ArrowRight size={16} className="ml-2 capability-arrow" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Portfolio Section (Light Gray) ── */}
      <section className="portfolio-section">
        <div className="container">
          <SectionHeader 
            theme="light"
            label="Recent Work"
            title="Crafted for conversion and scale."
            description="Explore our recent projects spanning enterprise web development, Shopify Plus storefronts, and performance marketing."
          />
          
          <div className="portfolio-grid">
            {portfolioItems.slice(0, 3).map((project, index) => (
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
                </div>
                <div className="portfolio-content">
                  <span className="badge badge-primary mb-3">{project.category}</span>
                  <h3 className="h4 mb-2">{project.title}</h3>
                  <p className="text-color-secondary mb-4">{project.description}</p>
                  <Link to={`/portfolio/${project.id}`} className="btn btn-outline btn-sm">
                    View Case Study
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Featured Case Study (White) ── */}
      <section className="featured-case-study">
        <div className="container">
          <div className="case-study-split">
            <motion.div 
              className="case-study-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={featuredCaseStudy?.heroImage || 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'} 
                alt="Case Study" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
            
            <motion.div 
              className="case-study-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label">Featured Case Study</span>
              <h2 className="h2 mt-2 mb-4">{featuredCaseStudy?.title || 'Enterprise Scaling'}</h2>
              <p className="lead mb-6">
                {featuredCaseStudy?.overview || 'How we transformed a legacy system into a high-performance growth engine.'}
              </p>
              
              <div className="case-study-kpi-grid">
                <div className="kpi-card">
                  <div className="kpi-value">+142%</div>
                  <div className="text-sm font-medium text-color-secondary">Organic Traffic</div>
                </div>
                <div className="kpi-card">
                  <div className="kpi-value">+68%</div>
                  <div className="text-sm font-medium text-color-secondary">Qualified Enquiries</div>
                </div>
              </div>
              
              <Link to="/case-studies" className="btn btn-primary">
                Read Full Case Study <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Industries We Serve (Deep Navy) ── */}
      <section className="industries-section">
        <div className="container">
          <SectionHeader 
            theme="dark"
            label="Industries"
            title="Tailored strategies for target sectors."
            description="We configure custom conversion copy and systems mapped to specific business models."
          />
          
          <div className="industries-grid">
            {industries.map((industry, index) => {
              const Icon = industry.Icon;
              return (
                <motion.button 
                  key={index} 
                  className="sector-card"
                  onClick={() => setSelectedIndustry({ ...industry, Icon })}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  aria-label={`Explore ${industry.name} industry`}
                >
                  <div className="sector-icon">
                    <Icon size={32} />
                  </div>
                  <div className="sector-content">
                    <h4 className="h5 h1-light mb-2">{industry.name}</h4>
                    <p className="text-sm text-color-inverse-secondary mb-4">{industry.description}</p>
                    <span className="explore-cta text-accent inline-flex items-center font-bold text-sm">
                      Explore Industry <ArrowRight size={18} className="ml-2 explore-icon" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Client Testimonials (Soft Gray) ── */}
      <section className="testimonials-section">
        <div className="container">
          <SectionHeader 
            theme="light"
            label="Testimonials"
            title="Trusted by industry leaders."
            description="Our approach is grounded in measurable outcomes and long-term partnerships."
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
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-color-secondary">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA (Gradient Navy) ── */}
      <section className="final-cta-section">
        <div className="final-cta-pattern"></div>
        <div className="container">
          <div className="final-cta-content">
            <motion.h2 
              className="h1 h1-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's build something exceptional together.
            </motion.h2>
            <motion.div 
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg bg-white text-primary hover:bg-gray-100">
                Book a Strategy Session
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary">
                Explore Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <IndustryModal 
        isOpen={!!selectedIndustry} 
        onClose={() => setSelectedIndustry(null)} 
        industry={selectedIndustry}
        Icon={selectedIndustry?.Icon}
      />
    </div>
  );
}
