import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Layers, 
  ArrowUpRight, 
  AlertTriangle, 
  Sparkles, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import './IndustryNavigator.css';

const iconMap = {
  Factory,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Layers
};

export const industryInsights = [
  {
    id: "manufacturing-construction",
    name: "Manufacturing & Construction",
    iconName: "Factory",
    tagline: "High-value commercial decisions require immediate trust, clear capability proof, and sub-second quote requests.",
    
    commonChallenge: "High-value buyers and property owners face immense risk. Outdated websites, slow mobile load speeds, and buried project portfolios erode credibility and cause high bounce rates before a quote is requested.",
    digitalOpportunity: "Position your capability and previous project outcomes directly in front of high-intent searchers when decision anxiety is highest.",
    approach: ["Positioning Audit", "Local & National SEO", "React Platform Engineering", "Automated Lead Dispatch"],
    
    realCaseTitle: "Premium Garage Doors",
    realCaseResult: "+142% Local Search Growth · 3.2x Lead Volume",
    realCaseHref: "/portfolio"
  },
  {
    id: "ecommerce-retail",
    name: "High-End E-Commerce & Retail",
    iconName: "ShoppingBag",
    tagline: "Scaling luxury retail requires visual storytelling, transparent trust signals, and zero checkout friction.",
    
    commonChallenge: "Transitioning from boutique to national brand leads to high cart abandonment on high-ticket items, unoptimized mobile speed, and fragmented ad tracking across social channels.",
    digitalOpportunity: "Combine rich visual storytelling with sub-second storefront speeds and automated retention funnels to convert first-time visitors into high-LTV repeat buyers.",
    approach: ["Brand Identity Systems", "Shopify Plus/Headless Stack", "Meta CAPI Tracking", "Cart Retention Automations"],
    
    realCaseTitle: "Dhaage Sarees",
    realCaseResult: "4.8x Average ROAS · 18% Cart Recovery",
    realCaseHref: "/portfolio"
  },
  {
    id: "corporate-security",
    name: "Corporate & Professional Security",
    iconName: "ShieldCheck",
    tagline: "B2B procurement committees evaluate digital authority and security compliance before shortlisting tender bids.",
    
    commonChallenge: "Inability to win multi-million dollar corporate and municipal contracts because an outdated web presence fails to communicate enterprise-grade capability, compliance, and structural security.",
    digitalOpportunity: "Establish immediate tender authority with secure client document portals, compliance documentation hubs, and B2B keyword dominance.",
    approach: ["Executive Positioning", "B2B Keyword Strategy", "Auth0 Portal Engineering", "Enterprise Launch"],
    
    realCaseTitle: "City Security Services",
    realCaseResult: "Page 1 B2B Ranks · $2.4M Pipeline Value",
    realCaseHref: "/portfolio"
  },
  {
    id: "logistics-transport",
    name: "Logistics & Transport",
    iconName: "Truck",
    tagline: "Urgent shipping customers abandon complex multi-step forms. Speed and instant quoting determine win rates.",
    
    commonChallenge: "High customer acquisition costs (CPA) erode thin courier margins. Cumbersome multi-step booking forms cause users to abandon urgent parcel delivery requests.",
    digitalOpportunity: "Streamline the booking engine into a single-page reactive application with predictive address auto-complete and hyper-local PPC targeting.",
    approach: ["Search Intent Audit", "Single-Page Reactive Booking", "Google Maps API Auto-Fill", "Google Ads CPA Capping"],
    
    realCaseTitle: "Instant Parcel Taxi",
    realCaseResult: "-34% CPA Reduction · < 60s Booking Time",
    realCaseHref: "/portfolio"
  },
  {
    id: "education-saas",
    name: "Education & B2B Technology",
    iconName: "Layers",
    tagline: "Complex product offerings demand clear content architecture, high speed, and frictionless registration flows.",
    
    commonChallenge: "Prospects get lost in dense course directories or complex software features, leading to high drop-offs during registration or trial signups.",
    digitalOpportunity: "Structure complex learning catalogs and SaaS features into scannable visual hierarchies backed by sub-second page performance.",
    approach: ["UX Content Architecture", "Course/LMS Portal Engineering", "Technical SEO Crawling", "Conversion Rate Tuning"],
    
    realCaseTitle: "Sleepy Classes IAS",
    realCaseResult: "+120% Student Registrations · 98/100 Speed",
    realCaseHref: "/portfolio"
  }
];

export default function IndustryNavigator() {
  const [activeId, setActiveId] = useState(industryInsights[0].id);
  const activeInsight = industryInsights.find(i => i.id === activeId) || industryInsights[0];
  const ActiveIcon = iconMap[activeInsight.iconName] || Factory;

  return (
    <div className="industry-navigator-wrapper">
      <div className="industry-navigator-header">
        <span className="section-label">Contextual Understanding</span>
        <h2 className="display-sm text-heading">WE UNDERSTAND YOUR BUSINESS CONTEXT.</h2>
        <p className="lead lead-muted mt-2">
          We don't sell generic marketing packages. We analyze the specific operational friction and commercial opportunities of your industry.
        </p>
      </div>

      {/* Horizontal Industry Selector Tabs */}
      <div className="industry-selector-tabs" role="tablist" aria-label="Industry context selector">
        {industryInsights.map((ind) => {
          const ItemIcon = iconMap[ind.iconName] || Factory;
          const isSelected = ind.id === activeId;

          return (
            <button
              key={ind.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`ind-panel-${ind.id}`}
              id={`ind-tab-${ind.id}`}
              className={`industry-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => setActiveId(ind.id)}
            >
              <div className="tab-icon-box">
                <ItemIcon size={18} />
              </div>
              <span className="tab-name-text">{ind.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Industry Insight Panel */}
      <div className="industry-panel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeInsight.id}
            id={`ind-panel-${activeInsight.id}`}
            role="tabpanel"
            aria-labelledby={`ind-tab-${activeInsight.id}`}
            className="industry-output-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header Banner */}
            <div className="ind-panel-header">
              <div className="ind-title-wrap">
                <div className="ind-icon-circle">
                  <ActiveIcon size={24} />
                </div>
                <div>
                  <span className="ind-sector-badge">INDUSTRY CONTEXT</span>
                  <h3 className="ind-sector-title">{activeInsight.name}</h3>
                </div>
              </div>
              <p className="ind-tagline-text">{activeInsight.tagline}</p>
            </div>

            {/* 3 Pillar Insight Grid */}
            <div className="ind-cards-grid mt-6">
              {/* 01 Common Challenge */}
              <div className="ind-insight-card challenge-card">
                <div className="ind-card-header">
                  <AlertTriangle size={18} className="text-warning" />
                  <h4>01. COMMON CHALLENGE</h4>
                </div>
                <p>{activeInsight.commonChallenge}</p>
              </div>

              {/* 02 Digital Opportunity */}
              <div className="ind-insight-card opportunity-card">
                <div className="ind-card-header">
                  <Sparkles size={18} className="text-accent" />
                  <h4>02. DIGITAL OPPORTUNITY</h4>
                </div>
                <p>{activeInsight.digitalOpportunity}</p>
              </div>

              {/* 03 Web-Logics Approach */}
              <div className="ind-insight-card approach-card">
                <div className="ind-card-header">
                  <Compass size={18} className="text-success" />
                  <h4>03. WEB-LOGICS APPROACH</h4>
                </div>
                <div className="ind-approach-chain">
                  {activeInsight.approach.map((step, idx) => (
                    <div key={idx} className="ind-approach-step">
                      <span className="ind-step-num">0{idx + 1}</span>
                      <span className="ind-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Real Case Proof Banner */}
            <div className="ind-proof-banner mt-6">
              <div className="proof-banner-info">
                <span className="proof-badge">REAL INDUSTRY PROOF</span>
                <h4>{activeInsight.realCaseTitle}</h4>
                <p className="proof-metrics-text">{activeInsight.realCaseResult}</p>
              </div>
              <Link to={activeInsight.realCaseHref} className="btn btn-outline btn-sm proof-cta">
                View Transformation Case <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
