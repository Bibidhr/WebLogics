import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Target, 
  ShoppingBag, 
  Sparkles, 
  Layout, 
  Compass, 
  ArrowUpRight, 
  CheckCircle2, 
  HelpCircle, 
  Zap,
  ArrowRight
} from 'lucide-react';
import './BusinessGoalNavigator.css';

export const goalOptions = [
  {
    id: "more-visibility",
    title: "More Visibility",
    icon: Eye,
    tagline: "Be discovered by high-intent customers when they actively search for your products or services.",
    diagnosis: "Your potential customers are searching on Google and social channels every day, but your brand is currently invisible or outranked by competitors.",
    serviceChain: [
      { name: "Search Engine Optimization (SEO)", role: "Technical & On-Page Keyword Dominance" },
      { name: "Google Ads (PPC)", role: "Immediate Top-of-Page Search Capture" },
      { name: "Content Creation", role: "High-Authority Industry Content & Blogs" },
      { name: "Social Media Visibility", role: "Targeted Audience Engagement" }
    ],
    primaryServices: ["SEO", "Paid Advertising / PPC", "Content Creation", "Social Media"],
    realCaseProof: "Premium Garage Doors — Ranked #1 on Google for high-intent search categories.",
    realCaseLink: "/portfolio"
  },
  {
    id: "more-leads",
    title: "More Qualified Leads",
    icon: Target,
    tagline: "Turn website visitors into phone calls, quote requests, and high-value enquiries.",
    diagnosis: "Getting traffic isn't enough. Your digital presence must guide prospects through a trust-building journey that converts interest into qualified sales enquiries.",
    serviceChain: [
      { name: "Website Conversion Design", role: "Frictionless UX & High-Trust Layouts" },
      { name: "Local & National SEO", role: "Targeting Commercial Search Intent" },
      { name: "Google & LinkedIn PPC", role: "Capturing Ready-to-Buy Prospects" },
      { name: "Lead Qualification Forms", role: "Filtering Low-Quality Inquiries" }
    ],
    primaryServices: ["Website Design & Dev", "SEO", "Paid Advertising / PPC", "Digital Strategy"],
    realCaseProof: "City Security Services — Generated $2.4M in B2B tender pipeline through qualified search leads.",
    realCaseLink: "/portfolio"
  },
  {
    id: "more-sales",
    title: "More Sales & Revenue",
    icon: ShoppingBag,
    tagline: "Scale online orders, increase average order value, and build profitable customer retention.",
    diagnosis: "High cart abandonment, unoptimized mobile checkout speeds, and unprofitable ad spend are eroding your retail margins.",
    serviceChain: [
      { name: "Custom E-Commerce Storefront", role: "Sub-Second Mobile Checkout Engine" },
      { name: "Google Shopping & Search Ads", role: "Capturing Purchase-Intent Shoppers" },
      { name: "Meta & Social Performance Ads", role: "Visual Product Prospecting" },
      { name: "Automated Email Retention", role: "Recovering Abandoned Carts" }
    ],
    primaryServices: ["Website Design & Dev", "Paid Advertising / PPC", "Social Media", "Content Creation"],
    realCaseProof: "Dhaage Sarees — Delivered 4.8x average ROAS with an 18% cart recovery boost.",
    realCaseLink: "/portfolio"
  },
  {
    id: "stronger-brand",
    title: "Stronger Brand Presence",
    icon: Sparkles,
    tagline: "Build overwhelming market authority, brand trust, and visual consistency across all channels.",
    diagnosis: "Your current digital presence doesn't reflect the true quality and ambition of your business, causing prospects to question your scale.",
    serviceChain: [
      { name: "Brand Identity & Strategy", role: "Visual Positioning & Messaging Systems" },
      { name: "Custom Website Design", role: "Executive-Level Web Experience" },
      { name: "Social Media Strategy", role: "Consistent Visual Storytelling" },
      { name: "Content & Copywriting", role: "Authoritative Brand Voice" }
    ],
    primaryServices: ["Digital Strategy", "Website Design & Dev", "Social Media", "Content Creation"],
    realCaseProof: "Weblogic re-architected brand presence across Australia, UK, and Canadian markets.",
    realCaseLink: "/about"
  },
  {
    id: "better-website",
    title: "Better High-Speed Website",
    icon: Layout,
    tagline: "Replace slow, outdated templates with a custom, sub-second web experience engineered for conversions.",
    diagnosis: "Outdated, non-mobile-friendly websites frustrate visitors, load slowly, and ruin paid ad performance before prospects read a single word.",
    serviceChain: [
      { name: "Custom UX/UI Architecture", role: "Mobile-First Conversion Design" },
      { name: "High-Performance Engineering", role: "Sub-Second Load Speeds & Clean Code" },
      { name: "Conversion Rate Optimization", role: "Clear Call-to-Action Placements" },
      { name: "Technical SEO Foundation", role: "Google Core Web Vitals Optimization" }
    ],
    primaryServices: ["Website Design & Dev", "SEO", "Digital Strategy"],
    realCaseProof: "Instant Parcel Taxi — Built single-page booking web engine under 60-second completion time.",
    realCaseLink: "/portfolio"
  },
  {
    id: "complete-growth",
    title: "Complete Digital Growth",
    icon: Compass,
    tagline: "An integrated end-to-end partnership connecting strategy, web, SEO, advertising, social media, and content.",
    diagnosis: "Managing multiple disconnected freelancers or agencies leads to broken strategy, wasted budget, and zero single-source accountability.",
    serviceChain: [
      { name: "Commercial Strategy", role: "Unified Growth & Channel Roadmap" },
      { name: "Website Platform Engineering", role: "Central Conversion Engine" },
      { name: "Omnichannel Acquisition", role: "Combined SEO, PPC & Social Campaigns" },
      { name: "Content & Continuous Optimization", role: "Data-Driven Scaling & Transparent Reporting" }
    ],
    primaryServices: ["Website Design & Dev", "SEO", "Paid Advertising / PPC", "Social Media", "Content Creation", "Digital Strategy"],
    realCaseProof: "Trusted by 40+ international clients across Australia, NZ, UK, USA, Canada, and India.",
    realCaseLink: "/contact"
  }
];

export default function BusinessGoalNavigator() {
  const [activeGoalId, setActiveGoalId] = useState(goalOptions[0].id);
  const activeGoal = goalOptions.find(g => g.id === activeGoalId) || goalOptions[0];
  const GoalIcon = activeGoal.icon;

  return (
    <div className="goal-navigator-wrapper">
      <div className="goal-navigator-header">
        <span className="section-label">Strategic Growth Recommendation</span>
        <h2 className="display-sm text-heading">WHAT ARE YOU TRYING TO ACHIEVE?</h2>
        <p className="lead lead-muted mt-2">
          We don't sell disconnected marketing tactics. Select your primary business objective to see how Weblogic Technologies connects the right capabilities to achieve it.
        </p>
      </div>

      {/* Goal Selector Buttons Grid */}
      <div className="goal-selector-grid" role="tablist" aria-label="Select business goal">
        {goalOptions.map((goal) => {
          const ItemIcon = goal.icon;
          const isSelected = goal.id === activeGoalId;

          return (
            <button
              key={goal.id}
              role="tab"
              aria-selected={isSelected}
              className={`goal-select-btn ${isSelected ? 'active' : ''}`}
              onClick={() => setActiveGoalId(goal.id)}
            >
              <div className="goal-icon-box">
                <ItemIcon size={20} />
              </div>
              <span className="goal-btn-title">{goal.title}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Growth Output Panel */}
      <div className="goal-panel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal.id}
            className="goal-output-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header Banner */}
            <div className="goal-panel-header">
              <div className="goal-title-wrap">
                <div className="goal-badge-icon">
                  <GoalIcon size={24} />
                </div>
                <div>
                  <span className="goal-sector-badge">RECOMMENDED GROWTH STRATEGY</span>
                  <h3 className="goal-panel-title">{activeGoal.title}</h3>
                </div>
              </div>
              <p className="goal-tagline">{activeGoal.tagline}</p>
            </div>

            {/* Content Breakdown Grid */}
            <div className="goal-content-grid mt-6">
              {/* Left Column: Diagnosis & Service Pipeline Chain */}
              <div className="goal-left-col">
                <div className="goal-diagnosis-box">
                  <div className="diagnosis-label">
                    <HelpCircle size={16} className="text-warning" />
                    <span>THE BUSINESS CHALLENGE:</span>
                  </div>
                  <p>{activeGoal.diagnosis}</p>
                </div>

                <div className="goal-chain-box mt-6">
                  <div className="chain-label">
                    <Zap size={16} className="text-accent" />
                    <span>RECOMMENDED SERVICE COMBINATION:</span>
                  </div>
                  <div className="service-chain-list mt-3">
                    {activeGoal.serviceChain.map((step, idx) => (
                      <div className="service-chain-item" key={idx}>
                        <div className="step-badge-num">0{idx + 1}</div>
                        <div className="step-info">
                          <h4 className="step-name">{step.name}</h4>
                          <span className="step-role">{step.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Badges & Proof Action */}
              <div className="goal-right-col">
                <div className="services-involved-card">
                  <h4>CAPABILITIES CONNECTED:</h4>
                  <div className="badges-flex-list mt-3">
                    {activeGoal.primaryServices.map((srv, idx) => (
                      <span className="service-chip" key={idx}>
                        <CheckCircle2 size={13} className="text-accent" />
                        <span>{srv}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="goal-proof-box mt-6">
                  <span className="proof-label">REAL WORLD PROOF:</span>
                  <p className="proof-text mt-2">{activeGoal.realCaseProof}</p>
                  <Link to={activeGoal.realCaseLink} className="proof-link mt-3">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                <div className="goal-action-wrapper mt-6">
                  <Link to="/contact" className="btn btn-primary btn-block goal-cta">
                    Discuss Your {activeGoal.title} Strategy <ArrowRight size={16} />
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
