import { useParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ServiceDetail.css';

import { serviceData } from '../../data/serviceDetailData';
export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!service) {
    return (
      <div className="container" style={{ padding: '10rem 2rem 5rem' }}>
        <h2 className="h2">Service Not Found</h2>
        <p className="mt-4">The requested service detail page could not be located.</p>
        <Link to="/services" className="featured-link mt-6">
          <ArrowLeft size={16} /> Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Unified Subpage Header */}
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <Link to="/services" className="back-link">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <h1 className="display display-light mt-6">{service.title}</h1>
          <p className="lead lead-light mt-4">{service.subtitle}</p>
        </div>
      </section>

      {/* Overview + Deliverables */}
      <section className="section section-gray">
        <div className="container detail-grid">
          <div className="detail-main-content">
            <span className="section-label">Overview</span>
            <p className="body-large">{service.description}</p>

            <h3 className="h2 mt-12">Core Deliverables</h3>
            <ul className="deliverables-grid mt-6">
              {service.deliverables.map((item, i) => (
                <li key={i} className="deliverable-item">
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <Calendar className="text-secondary mb-4" size={28} />
              <h4>Average Timeline</h4>
              <p className="body-sm mt-2">{service.timeline}</p>
            </div>
            
            <div className="sidebar-card mt-6">
              <Zap className="text-secondary mb-4" size={28} />
              <h4>Technologies & Stacks</h4>
              <div className="tech-tags mt-4">
                {service.stack.map((item, i) => (
                  <span key={i} className="tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-card highlight-sidebar mt-6">
              <ShieldCheck className="text-white mb-4" size={28} />
              <h4>Sydney Partnership Guarantee</h4>
              <p className="body-sm mt-2 text-white opacity-80">
                Managed from our North Sydney headquarters. Month-to-month delivery milestones, weekly status summaries, and direct communication.
              </p>
              <Link to="/contact" className="btn btn-primary mt-6" style={{ width: '100%', justifyContent: 'center' }}>
                Start Briefing
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Methodology</span>
            <h2 className="h1">Engagement process</h2>
            <p className="lead mx-auto mt-4">A clear, structured workflow from kickoff to launch.</p>
          </div>

          <div className="process-list" ref={containerRef}>
            <div className="timeline-line-bg"></div>
            <motion.div 
              className="timeline-line-grow" 
              style={{ scaleY, originY: 0 }}
            />
            
            {service.process.map((step, i) => (
              <motion.div 
                key={i} 
                className="process-step-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="step-num">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p className="body-sm mt-2">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-gray">
        <div className="container">
          <div className="faq-intro">
            <span className="section-label">Common Questions</span>
            <h2 className="h1">Service FAQ</h2>
            <p>Quick answers to the most common questions about this service.</p>
          </div>
          
          <div className="faq-accordion-container">
            {service.faqs.map((faq, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)} type="button">
                  <h3>{faq.q}</h3>
                  <div className="faq-icon-holder">
                    {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                <div className="faq-content" style={{ maxHeight: openFaq === i ? '300px' : '0' }}>
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-white">
        <div className="container text-center">
          <span className="section-label">Get Started</span>
          <h2 className="h1 mt-4">Ready to discuss {service.title.toLowerCase()}?</h2>
          <p className="lead mx-auto mt-4">Book a no-obligation strategy session with our team. We will review your current setup and outline a clear action plan.</p>
          <div className="mt-8" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
