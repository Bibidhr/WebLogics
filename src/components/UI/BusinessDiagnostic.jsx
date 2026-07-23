import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Cpu, 
  Compass, 
  Layers, 
  ArrowUpRight, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import './BusinessDiagnostic.css';

const iconMap = {
  Sparkles,
  Target,
  TrendingUp,
  Cpu,
  Compass,
  Layers
};

export const diagnosticProblems = [
  {
    id: "not-converting",
    label: "Our website is not converting",
    iconName: "Target",
    diagnosis: "High traffic with low conversion points to friction in user experience, lack of trust signals, or misaligned messaging hierarchy.",
    rootCauses: [
      "Unclear positioning and value proposition above the fold",
      "Weak user journey with ambiguous call-to-action pathways",
      "Poor trust signals, missing social proof, or outdated visual polish",
      "Too much information and not enough direction",
      "Mobile performance friction or slow page load times"
    ],
    approach: ["Strategy", "UX Architecture", "Bespoke Design", "Development", "CRO Optimization"],
    recommendedAction: "Request a Conversion Diagnostic",
    actionHref: "/contact?intent=cro-diagnostic"
  },
  {
    id: "outdated-brand",
    label: "Our brand feels outdated",
    iconName: "Sparkles",
    diagnosis: "A visual identity designed years ago often fails to command current market rates or build immediate enterprise trust with premium buyers.",
    rootCauses: [
      "Visual identity no longer reflects current business scale or service tier",
      "Inconsistent asset execution across digital touchpoints and sales collateral",
      "Generic brand voice that fails to articulate unique competitive value",
      "Mismatch between premium pricing and visual presentation"
    ],
    approach: ["Positioning Audit", "Visual System Design", "Brand Guidelines", "Design System Implementation", "Market Rollout"],
    recommendedAction: "Discuss a Brand System Overhaul",
    actionHref: "/contact?intent=brand-audit"
  },
  {
    id: "need-customers",
    label: "We need more customers",
    iconName: "TrendingUp",
    diagnosis: "Scaling customer acquisition requires more than throwing money at ads — it demands high-intent search capture and friction-free conversion funnels.",
    rootCauses: [
      "Paid advertising pointing to unoptimized, low-converting landing pages",
      "Absence of programmatic local or technical SEO capturing high-intent searchers",
      "Fragmented analytics without end-to-end ROAS or lead attribution",
      "Weak lead retention and automated follow-up pipelines"
    ],
    approach: ["Search Intent Audit", "Funnel Architecture", "High-Converting Pages", "PPC & SEO Execution", "Attribution Tracking"],
    recommendedAction: "Discuss Growth Acquisition Strategy",
    actionHref: "/contact?intent=growth-strategy"
  },
  {
    id: "build-product-idea",
    label: "We have a great idea but do not know how to build it",
    iconName: "Cpu",
    diagnosis: "Turning a complex product vision into a scalable, high-performance web platform requires technical architecture, not just template design.",
    rootCauses: [
      "Lack of clear technical specifications and API architecture blueprints",
      "Fear of technical debt and unscalable third-party website builders",
      "Uncertainty around database security, authentication, and platform hosting",
      "Need for an engineering team that understands both business logic and code execution"
    ],
    approach: ["Discovery & Architecture", "UX Wireframing", "Bespoke React/Next.js Dev", "API Integration", "Deployment & QA"],
    recommendedAction: "Schedule a Technical Scoping Session",
    actionHref: "/contact?intent=technical-scoping"
  },
  {
    id: "ambition-mismatch",
    label: "Our digital presence does not reflect our ambition",
    iconName: "Compass",
    diagnosis: "When a company outgrows its website, it loses enterprise bids and high-value clients to competitors with more authoritative presences.",
    rootCauses: [
      "Platform built during early-stage phase that now looks amateurish",
      "Inability to showcase enterprise capability, security, or scale",
      "Fragmented digital touchpoints creating mixed brand perception",
      "Ineffective presentation of complex product or service offerings"
    ],
    approach: ["Executive Briefing", "Strategic Positioning", "Editorial UX & Design", "Custom Engineering", "Enterprise Launch"],
    recommendedAction: "Schedule an Executive Alignment Call",
    actionHref: "/contact?intent=executive-alignment"
  },
  {
    id: "digital-transformation",
    label: "We need a complete digital transformation",
    iconName: "Layers",
    diagnosis: "A comprehensive digital overhaul requires aligning brand identity, web engineering, SEO, and paid growth into one unified system.",
    rootCauses: [
      "Legacy systems causing high maintenance costs and operational bottlenecks",
      "Disconnected agency vendors pulling strategy in opposing directions",
      "Outdated tech stack preventing fast market adaptation and mobile speed",
      "Missing centralized analytics and real-time revenue reporting"
    ],
    approach: ["Full System Audit", "Integrated Strategy", "Brand & UX Overhaul", "Full-Stack React Engineering", "Growth Acceleration"],
    recommendedAction: "Book a Strategic Transformation Session",
    actionHref: "/contact?intent=full-transformation"
  }
];

export default function BusinessDiagnostic() {
  const [selectedId, setSelectedId] = useState(diagnosticProblems[0].id);
  const activeProblem = diagnosticProblems.find(p => p.id === selectedId) || diagnosticProblems[0];
  const ActiveIcon = iconMap[activeProblem.iconName] || Target;

  return (
    <div className="diagnostic-wrapper">
      <div className="diagnostic-header">
        <span className="section-label">Strategic Diagnostic</span>
        <h2 className="display-sm text-heading">WHAT IS HOLDING YOUR BUSINESS BACK?</h2>
        <p className="lead lead-muted mt-2">
          Select the primary challenge your business is currently facing to see how Web-Logics diagnoses and solves it.
        </p>
      </div>

      {/* Selectable Problems Selector */}
      <div className="diagnostic-selector-grid" role="tablist" aria-label="Select business challenge">
        {diagnosticProblems.map((prob) => {
          const ItemIcon = iconMap[prob.iconName] || Target;
          const isSelected = prob.id === selectedId;

          return (
            <button
              key={prob.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${prob.id}`}
              id={`tab-${prob.id}`}
              className={`diagnostic-select-btn ${isSelected ? 'active' : ''}`}
              onClick={() => setSelectedId(prob.id)}
            >
              <div className="select-btn-icon">
                <ItemIcon size={18} />
              </div>
              <span className="select-btn-label">{prob.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Diagnostic Output Panel */}
      <div className="diagnostic-panel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProblem.id}
            id={`panel-${activeProblem.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeProblem.id}`}
            className="diagnostic-output-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="panel-header-row">
              <div className="panel-badge-group">
                <div className="panel-icon-wrap">
                  <ActiveIcon size={22} />
                </div>
                <span className="panel-badge-text">DIAGNOSTIC ANALYSIS</span>
              </div>
              <h3 className="panel-problem-title">"{activeProblem.label}"</h3>
            </div>

            <div className="panel-content-grid">
              {/* Left Column: Diagnosis & Root Causes */}
              <div className="panel-main-column">
                <div className="panel-block">
                  <h4 className="panel-section-title">EXECUTIVE DIAGNOSIS</h4>
                  <p className="panel-diagnosis-text">{activeProblem.diagnosis}</p>
                </div>

                <div className="panel-block mt-6">
                  <h4 className="panel-section-title">THE UNDERLYING PROBLEM MAY BE:</h4>
                  <ul className="root-causes-list">
                    {activeProblem.rootCauses.map((cause, idx) => (
                      <li key={idx}>
                        <AlertCircle size={16} className="cause-icon" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Approach & CTA */}
              <div className="panel-side-column">
                <div className="panel-block approach-block">
                  <h4 className="panel-section-title">THE WEB-LOGICS APPROACH:</h4>
                  <div className="approach-chain">
                    {activeProblem.approach.map((step, idx) => (
                      <div className="approach-step" key={idx}>
                        <span className="step-num">0{idx + 1}</span>
                        <span className="step-label">{step}</span>
                        {idx < activeProblem.approach.length - 1 && (
                          <span className="step-arrow">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel-action-box mt-6">
                  <div className="action-box-info">
                    <h5>Ready to solve this friction?</h5>
                    <p>Discuss your specific requirements directly with our team in Sydney, Australia.</p>
                  </div>
                  <Link to={activeProblem.actionHref} className="btn btn-primary action-btn">
                    {activeProblem.recommendedAction} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
