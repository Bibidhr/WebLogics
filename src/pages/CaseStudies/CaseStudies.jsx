import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CaseStudies.css';
import { caseStudies } from '../../data/caseStudies';
import { fadeUp, staggerContainer } from '../../data/animations';



export default function CaseStudies() {
  // Fallback image helper
  const handleImgError = (e) => {
    e.target.src = '/client_preview_1.png';
  };


  return (
    <div className="case-studies-page">
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Case Studies</span>
          <h1 className="display display-light">Client outcomes. Verified results.</h1>
          <p className="lead mx-auto lead-light mt-4">
            Explore how we partner with Australian and international brands to optimize platforms, rank search terms, and run profitable campaigns.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <motion.div 
              className="cs-list-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {caseStudies.map((cs) => (
                <motion.div 
                  className="cs-list-item" 
                  key={cs.id}
                  variants={fadeUp}
                >
                  <div className="portfolio-shell-wrapper" style={{ width: '100%' }}>
                    <div className="browser-shell">
                      <div className="browser-header">
                        <div className="browser-dots">
                          <div className="browser-dot red"></div>
                          <div className="browser-dot yellow"></div>
                          <div className="browser-dot green"></div>
                        </div>
                        <div className="browser-bar">www.{cs.title.split(':')[0].toLowerCase().replace(/\s+/g, '')}.com</div>
                      </div>
                      <div className="browser-screen">
                        <div className="portfolio-screenshot">
                          <img src={cs.image} alt={cs.title} onError={handleImgError} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cs-list-content">
                    <div className="cs-meta">
                      <span className="cs-industry-badge">{cs.industry}</span>
                    </div>
                    
                    <h2>{cs.title}</h2>
                    <p>{cs.description}</p>
                    
                    <div className="cs-metrics-row">
                      {cs.metrics.map((metric, i) => (
                        <div key={i} className="cs-metric-box">
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/portfolio" className="cs-detail-link">
                      View Portfolio Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
