import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './IndustryModal.css';

export default function IndustryModal({ isOpen, onClose, industry, Icon }) {
  const modalRef = useRef(null);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Trap focus (basic implementation)
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length) {
        focusableElements[0].focus();
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && industry && (
        <div className="modal-backdrop" onClick={onClose}>
          <motion.div
            className="industry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button 
              className="modal-close-btn" 
              onClick={onClose} 
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-wrapper">
                {Icon && <Icon size={32} />}
              </div>
              <div>
                <h2 id="modal-title" className="h3 mb-1">{industry.name}</h2>
                <p className="text-color-secondary">{industry.description}</p>
              </div>
            </div>

            <div className="modal-body">
              <section className="modal-section">
                <h3 className="h6 mb-3">Overview</h3>
                <p className="text-color">{industry.overview}</p>
              </section>

              <div className="modal-split">
                <section className="modal-section">
                  <h3 className="h6 mb-3">Services Provided</h3>
                  <ul className="modal-list">
                    {industry.services?.map((service, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="text-accent" /> {service}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="modal-section">
                  <h3 className="h6 mb-3">Common Challenges</h3>
                  <ul className="modal-list danger-list">
                    {industry.challenges?.map((challenge, idx) => (
                      <li key={idx}>
                        <X size={16} className="text-danger" /> {challenge}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="modal-section bg-light-gray p-4 rounded">
                <h3 className="h6 mb-2">How We Solve It</h3>
                <p className="text-sm text-color">{industry.solution}</p>
              </section>

              <section className="modal-section">
                <h3 className="h6 mb-4">Typical Results</h3>
                <div className="modal-kpi-grid">
                  {industry.results?.map((result, idx) => (
                    <div key={idx} className="modal-kpi-card">
                      <div className="kpi-value">{result.metric}</div>
                      <div className="kpi-label">{result.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h3 className="h6 mb-3">Technology Stack</h3>
                <div className="tech-badge-container">
                  {industry.techStack?.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </section>
            </div>

            <div className="modal-footer">
              <Link to="/contact" className="btn btn-primary">
                Book a Discovery Call
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Similar Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
