import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  Compass, 
  Cpu, 
  TrendingUp, 
  X,
  ExternalLink,
  Globe,
  Building2,
  ChevronRight
} from 'lucide-react';
import { portfolioItems } from '../../data/portfolioItems';
import './TransformationPortfolio.css';

export default function TransformationPortfolio() {
  const [selectedId, setSelectedId] = useState(portfolioItems[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryFilter, setCountryFilter] = useState('All');
  const [industryFilter, setIndustryFilter] = useState('All');

  // Filter projects by Country and Industry
  const filteredProjects = portfolioItems.filter(item => {
    const matchCountry = countryFilter === 'All' || item.country.includes(countryFilter);
    const matchIndustry = industryFilter === 'All' || item.industry.toLowerCase().includes(industryFilter.toLowerCase());
    return matchCountry && matchIndustry;
  });

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : portfolioItems;
  const activeProject = displayProjects.find(p => p.id === selectedId) || displayProjects[0];

  const projectUrl = `www.${activeProject.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

  return (
    <div className="transformation-portfolio-wrapper">
      {/* Header Banner */}
      <div className="portfolio-header-block">
        <span className="section-label section-label-light">Global Case Studies & Performance</span>
        <h2 className="display-sm text-white">How Weblogic Technologies solves complex business problems.</h2>
        <p className="lead lead-light mt-2 max-w-750">
          We don't just showcase finished websites. We document the business challenge, strategic insight, custom engineering, and verified outcomes across Australia, UK, Canada, and global markets.
        </p>
      </div>

      {/* Market & Industry Filter Bar */}
      <div className="portfolio-filter-bar mt-6">
        <div className="filter-group">
          <Globe size={15} className="text-accent" />
          <span className="filter-label">Market:</span>
          <div className="filter-pills">
            {['All', 'Australia', 'India', 'Canada', 'United Kingdom'].map((c) => (
              <button
                key={c}
                className={`filter-pill ${countryFilter === c ? 'active' : ''}`}
                onClick={() => {
                  setCountryFilter(c);
                  const firstMatch = portfolioItems.find(p => c === 'All' || p.country.includes(c));
                  if (firstMatch) setSelectedId(firstMatch.id);
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <Building2 size={15} className="text-accent" />
          <span className="filter-label">Industry:</span>
          <div className="filter-pills">
            {['All', 'Construction', 'Ecommerce', 'Security', 'Logistics'].map((ind) => (
              <button
                key={ind}
                className={`filter-pill ${industryFilter === ind ? 'active' : ''}`}
                onClick={() => {
                  setIndustryFilter(ind);
                  const firstMatch = portfolioItems.find(p => ind === 'All' || p.industry.toLowerCase().includes(ind.toLowerCase()));
                  if (firstMatch) setSelectedId(firstMatch.id);
                }}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Switcher Tabs */}
      <div className="portfolio-project-tabs mt-6">
        {displayProjects.map((project) => {
          const isSelected = project.id === activeProject.id;
          return (
            <button
              key={project.id}
              className={`project-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => setSelectedId(project.id)}
            >
              <span className="tab-country">{project.country.split(' ')[1]}</span>
              <div className="tab-text-wrap">
                <span className="tab-title">{project.title}</span>
                <span className="tab-industry">{project.industry}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Premium Case Study Preview Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          className="transformation-main-card mt-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Hierarchy Header: Category -> Title -> Supporting URL */}
          <div className="case-top-header">
            <div className="case-category-label">
              <span>CASE STUDY</span>
              <span className="label-sep">/</span>
              <span>{activeProject.industry.toUpperCase()}</span>
              <span className="label-sep">/</span>
              <span>{activeProject.country.toUpperCase()}</span>
            </div>

            <h3 className="case-main-title">{activeProject.title}</h3>

            <div className="case-url-sub">
              <span>{projectUrl}</span>
            </div>
          </div>

          {/* Large Website Visual Frame */}
          <div className="case-visual-container mt-6">
            <div className="portfolio-browser-shell">
              <div className="browser-header-bar">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-url-bar">{projectUrl}</div>
              </div>
              <div className="browser-screen-box">
                <img 
                  src={activeProject.image} 
                  alt={`${activeProject.title} Platform`} 
                  className="portfolio-showcase-img"
                />
              </div>
            </div>
          </div>

          {/* Short Project Summary */}
          <div className="case-summary-block mt-6">
            <p className="summary-text">
              A high-performance digital experience built to improve search visibility, lead generation, and customer trust for <strong>{activeProject.title}</strong>.
            </p>
          </div>

          {/* Clean Metrics Grid */}
          <div className="case-results-section mt-6">
            <span className="results-section-title">VERIFIED COMMERCIAL RESULTS</span>
            <div className="results-metrics-grid mt-3">
              {activeProject.resultsList.map((res, idx) => (
                <div className="metric-box-card" key={idx}>
                  <div className="metric-number-val">{res.metric}</div>
                  <div className="metric-label-desc">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Services Chips */}
          <div className="case-tech-section mt-6">
            <span className="tech-section-title">SERVICES & TECHNOLOGIES DELIVERED:</span>
            <div className="tech-chips-list mt-3">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="tech-chip-item">{tech}</span>
              ))}
            </div>
          </div>

          {/* 5-Stage Story Breakdown Grid */}
          <div className="story-breakdown-grid mt-8">
            <div className="story-block challenge">
              <div className="story-block-header">
                <HelpCircle size={16} className="text-warning" />
                <h4>01. THE CHALLENGE</h4>
              </div>
              <p>{activeProject.challenge}</p>
            </div>

            <div className="story-block insight">
              <div className="story-block-header">
                <Lightbulb size={16} className="text-accent" />
                <h4>02. THE INSIGHT</h4>
              </div>
              <p>{activeProject.insight}</p>
            </div>

            <div className="story-block approach">
              <div className="story-block-header">
                <Compass size={16} className="text-accent" />
                <h4>03. STRATEGIC APPROACH</h4>
              </div>
              <p>{activeProject.approach}</p>
            </div>

            <div className="story-block build">
              <div className="story-block-header">
                <Cpu size={16} className="text-accent" />
                <h4>04. THE BUILD</h4>
              </div>
              <p>{activeProject.build}</p>
            </div>

            <div className="story-block outcome">
              <div className="story-block-header">
                <TrendingUp size={16} className="text-success" />
                <h4>05. VERIFIED OUTCOME</h4>
              </div>
              <p>{activeProject.outcome}</p>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="case-action-footer mt-8">
            <button 
              className="btn btn-primary nav-cta case-cta-btn"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Explore Full Case Study Blueprint</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Case Blueprint Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="portfolio-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="portfolio-modal-card"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="story-category-pill">{activeProject.category} · {activeProject.country}</span>
                <h2>{activeProject.title} — Executive Case Blueprint</h2>
                <span className="modal-url-sub">{projectUrl}</span>
              </div>

              <div className="modal-body-grid">
                <div className="modal-img-wrapper">
                  <img src={activeProject.image} alt={activeProject.title} />
                </div>
                <div className="modal-details">
                  <h4>EXECUTIVE OVERVIEW</h4>
                  <p>{activeProject.overview}</p>
                  
                  <h4 className="mt-4">COMMERCIAL CHALLENGE</h4>
                  <p>{activeProject.challenge}</p>
                  
                  <h4 className="mt-4">STRATEGIC APPROACH</h4>
                  <p>{activeProject.approach}</p>

                  <h4 className="mt-4">THE CUSTOM BUILD</h4>
                  <p>{activeProject.build}</p>
                  
                  <h4 className="mt-4">VERIFIED OUTCOME</h4>
                  <p>{activeProject.outcome}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
