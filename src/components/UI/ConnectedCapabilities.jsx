import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Palette, 
  Cpu, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers,
  ArrowRight
} from 'lucide-react';
import './ConnectedCapabilities.css';

const iconMap = {
  Compass,
  Palette,
  Cpu,
  TrendingUp
};

export const capabilitiesSystem = [
  {
    id: "strategy",
    num: "01",
    pillar: "STRATEGY",
    title: "Commercial & Market Positioning",
    tagline: "Diagnosing friction and mapping clear market opportunity before executing code or design.",
    iconName: "Compass",
    capabilities: [
      { name: "Research & Market Audit", desc: "Uncovering competitor gaps, keyword intent, and conversion bottlenecks." },
      { name: "Brand & Market Positioning", desc: "Defining high-value messaging that sets your business apart from generic rivals." },
      { name: "Audience Intent Mapping", desc: "Structuring user decision pathways to eliminate buying hesitation." },
      { name: "Business Growth Milestones", desc: "Establishing clear KPIs, revenue targets, and attribution models." }
    ],
    connectedToText: "Informs Creative identity and sets technical & growth KPIs.",
    systemOutcome: "Establishes the commercial foundation and direction for all creative and technical execution."
  },
  {
    id: "creative",
    num: "02",
    pillar: "CREATIVE",
    title: "Brand Systems & Conversion UX",
    tagline: "Crafting human-centered visual identities, persuasive copy, and conversion-first UI/UX.",
    iconName: "Palette",
    capabilities: [
      { name: "Brand Identity Systems", desc: "Logos, visual tokens, typography, and cohesive design guidelines." },
      { name: "Campaign Concepts & Copy", desc: "High-converting editorial copywriting that communicates real business value." },
      { name: "Content Architecture", desc: "Structuring complex service and product offerings into clear, scannable hierarchies." },
      { name: "Conversion UI/UX Design", desc: "Bespoke interface design optimized for trust, clarity, and friction-free action." }
    ],
    connectedToText: "Translates Strategy into visual interfaces engineered for Technology.",
    systemOutcome: "Transforms strategic positioning into an authoritative visual experience that commands buyer trust."
  },
  {
    id: "technology",
    num: "03",
    pillar: "TECHNOLOGY",
    title: "Sub-Second Product Engineering",
    tagline: "Building high-performance React/Next.js code bases, decoupled APIs, and automated systems.",
    iconName: "Cpu",
    capabilities: [
      { name: "Custom Websites & Platforms", desc: "Bespoke React and Next.js applications engineered for sub-second page loads." },
      { name: "Headless Web Applications", desc: "Decoupled frontend architectures that eliminate security exploits and CMS bloat." },
      { name: "AI Integrations & Custom Tools", desc: "Integrating intelligent Search, LLM workflows, and automated customer tools." },
      { name: "CRM & API Automation", desc: "Seamless programmatic pipelines connecting lead forms directly to your stack." }
    ],
    connectedToText: "Engineers Creative designs into fast software designed for Growth scaling.",
    systemOutcome: "Engineers clean, fast, and secure digital infrastructure that turns designs into functional software."
  },
  {
    id: "growth",
    num: "04",
    pillar: "GROWTH",
    title: "Attribution & Scaled Acquisition",
    tagline: "Driving qualified search traffic, optimizing acquisition channels, and scaling lifetime value.",
    iconName: "TrendingUp",
    capabilities: [
      { name: "Technical & Local SEO", desc: "Programmatic search engine optimization targeting high-intent commercial terms." },
      { name: "Performance Marketing", desc: "Precision PPC search and paid social campaigns structured around strict CPA targets." },
      { name: "Conversion Optimization (CRO)", desc: "Continuous user testing and funnel tuning to maximize lead conversion rates." },
      { name: "Attribution & Revenue Analytics", desc: "Transparent tracking connecting ad spend directly to verified leads and orders." }
    ],
    connectedToText: "Feeds high-intent traffic back into Strategy to refine system performance.",
    systemOutcome: "Accelerates commercial revenue by continuously feeding high-intent traffic into the optimized system."
  }
];

export default function ConnectedCapabilities() {
  const [activeId, setActiveId] = useState("strategy");
  const activePillar = capabilitiesSystem.find(p => p.id === activeId) || capabilitiesSystem[0];

  return (
    <div className="capabilities-system-wrapper">
      {/* Section Sub-Header / Statement */}
      <div className="system-statement-banner">
        <span className="statement-badge">THE CONNECTED SYSTEM</span>
        <p className="statement-text">
          "We do not sell disconnected services. We connect the right capabilities to solve the right business problem."
        </p>
      </div>

      {/* Interactive 4-Pillar Pipeline Diagram */}
      <div className="system-pipeline-container">
        <div className="pipeline-line-bg"></div>
        <div className="system-pipeline-grid">
          {capabilitiesSystem.map((item) => {
            const PillarIcon = iconMap[item.iconName] || Compass;
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                className={`pipeline-pillar-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                aria-selected={isActive}
                role="tab"
              >
                <div className="pillar-top-row">
                  <span className="pillar-step-num">{item.num}</span>
                  <div className="pillar-icon-box">
                    <PillarIcon size={20} />
                  </div>
                </div>

                <span className="pillar-tag-label">{item.pillar}</span>
                <h3 className="pillar-card-title">{item.title}</h3>
                
                <div className="pillar-active-indicator">
                  <span>{isActive ? 'Active System Node' : 'Click to Inspect'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed System Inspection Panel */}
      <div className="system-inspection-wrapper mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            className="system-inspection-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Panel Top Meta Bar */}
            <div className="inspection-meta-bar">
              <div className="meta-left">
                <span className="meta-pillar-chip">{activePillar.num} — {activePillar.pillar}</span>
                <h3 className="meta-pillar-title">{activePillar.title}</h3>
              </div>

              <div className="meta-connection-badge">
                <span className="connection-label">SYSTEM INTERCONNECTIVITY:</span>
                <span className="connection-text">{activePillar.connectedToText}</span>
              </div>
            </div>

            <p className="inspection-tagline">{activePillar.tagline}</p>

            {/* 4 Capabilities Grid for Active Pillar */}
            <div className="capabilities-subgrid mt-6">
              {activePillar.capabilities.map((cap, idx) => (
                <div className="capability-subitem" key={idx}>
                  <div className="capability-check">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="capability-item-name">{cap.name}</h4>
                    <p className="capability-item-desc">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Outcome Footer Bar */}
            <div className="inspection-outcome-bar mt-8">
              <div className="outcome-text">
                <strong>SYSTEM OUTCOME:</strong> {activePillar.systemOutcome}
              </div>

              <Link to="/services" className="btn btn-outline btn-sm outcome-cta">
                View All Capabilities <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
