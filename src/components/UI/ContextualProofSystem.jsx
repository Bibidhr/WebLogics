import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Quote, 
  ArrowUpRight, 
  HelpCircle, 
  Wrench, 
  CheckCircle2, 
  Star,
  Building2,
  MapPin
} from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { logos } from '../../data/logos';
import './ContextualProofSystem.css';

export default function ContextualProofSystem() {
  const [activeProofId, setActiveProofId] = useState(testimonials[0].id);

  return (
    <div className="proof-system-wrapper">
      {/* Header Banner */}
      <div className="proof-header-block">
        <span className="section-label">Verified Evidence</span>
        <h2 className="display-sm text-heading">PROVE, DON'T PROMOTE.</h2>
        <p className="lead lead-muted mt-2">
          We don't rely on generic logo grids or artificial counters. Here is real evidence organized around client context, specific business challenges, and verified outcomes.
        </p>
      </div>

      {/* Contextual Proof Cards Grid */}
      <div className="proof-cards-grid">
        {testimonials.map((item) => {
          const isActive = item.id === activeProofId;
          return (
            <motion.div 
              key={item.id}
              className={`contextual-proof-card ${isActive ? 'active-proof' : ''}`}
              onClick={() => setActiveProofId(item.id)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              {/* Card Top Meta Bar */}
              <div className="proof-card-top">
                <div className="client-brand-meta">
                  <span className="client-country-flag">{item.country}</span>
                  <div>
                    <h3 className="client-company-title">{item.company}</h3>
                    <span className="client-industry-sub">{item.industry}</span>
                  </div>
                </div>

                <div className="proof-rating-badge">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star size={14} key={i} className="star-filled" />
                  ))}
                </div>
              </div>

              {/* Context Breakdown Grid */}
              <div className="proof-context-body">
                {/* 01 Challenge */}
                <div className="context-row challenge-row">
                  <div className="context-label">
                    <HelpCircle size={15} className="text-warning" />
                    <span>THE CHALLENGE</span>
                  </div>
                  <p className="context-value">{item.challenge}</p>
                </div>

                {/* 02 What We Did */}
                <div className="context-row build-row">
                  <div className="context-label">
                    <Wrench size={15} className="text-accent" />
                    <span>WHAT WE DID</span>
                  </div>
                  <p className="context-value">{item.whatWeDid}</p>
                </div>

                {/* 03 Verified Outcome */}
                <div className="context-row outcome-row">
                  <div className="context-label">
                    <CheckCircle2 size={15} className="text-success" />
                    <span>VERIFIED OUTCOME</span>
                  </div>
                  <p className="context-value outcome-highlight">{item.outcome}</p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="proof-quote-block">
                <Quote size={24} className="quote-icon" />
                <p className="quote-text">"{item.quote}"</p>
                
                <div className="author-meta-row">
                  <div className="author-avatar">
                    <img src={item.photo} alt={item.name} />
                  </div>
                  <div>
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role} · {item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Authentic Client Partners Track */}
      <div className="proof-partners-section mt-12">
        <div className="partners-header">
          <ShieldCheck size={18} className="text-accent" />
          <span>AUTHENTIC CLIENT PARTNERS & ORGANIZATIONS</span>
        </div>

        <div className="partners-logo-grid mt-4">
          {logos.slice(0, 8).map((logoName, idx) => (
            <div className="partner-logo-chip" key={idx}>
              <Building2 size={15} className="partner-chip-icon" />
              <span className="partner-chip-name">{logoName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
