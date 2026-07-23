import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Search,
  Code2,
  Share2,
  ShoppingBag,
  Target,
  Layers,
  ShieldCheck,
  Zap,
  Globe2,
  Award,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Compass,
  Palette,
  Cpu,
  TrendingUp,
  XCircle,
  CheckCircle
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../../components/UI/SectionHeader';
import BusinessDiagnostic from '../../components/UI/BusinessDiagnostic';
import ConnectedCapabilities from '../../components/UI/ConnectedCapabilities';
import TransformationPortfolio from '../../components/UI/TransformationPortfolio';
import IndustryNavigator from '../../components/UI/IndustryNavigator';
import ContextualProofSystem from '../../components/UI/ContextualProofSystem';
import BusinessGoalNavigator from '../../components/UI/BusinessGoalNavigator';
import GlobalFootprintBanner from '../../components/UI/GlobalFootprintBanner';

// Data Imports
import { portfolioItems } from '../../data/portfolioItems';
import { testimonials } from '../../data/testimonials';
import { logos } from '../../data/logos';

// Local CSS
import './Home.css';

const modelSteps = [
  {
    step: "01",
    phase: "BUSINESS PROBLEM",
    icon: HelpCircle,
    title: "Diagnosing the Core Friction",
    desc: "We analyze why your current digital presence isn't converting — identifying market share erosion, broken lead funnels, tech debt, or positioning weakness."
  },
  {
    step: "02",
    phase: "STRATEGY",
    icon: Compass,
    title: "Commercial & Architecture Blueprint",
    desc: "We define precise market positioning, search intent maps, conversion pathways, and technical infrastructure required to win."
  },
  {
    step: "03",
    phase: "CREATIVE",
    icon: Palette,
    title: "Brand System & UX Design",
    desc: "We craft human-centered visual identities, persuasive conversion copywriting, and bespoke user interfaces that command trust."
  },
  {
    step: "04",
    phase: "TECHNOLOGY",
    icon: Cpu,
    title: "Sub-Second Product Engineering",
    desc: "We write clean, high-performance React/Next.js code bases, deploy decoupled headless CMS setups, and integrate CRM/API systems."
  },
  {
    step: "05",
    phase: "GROWTH",
    icon: TrendingUp,
    title: "Attribution & Scaled Acquisition",
    desc: "We execute technical SEO, intent-driven PPC media, and cart retention funnels backed by transparent, verified attribution reporting."
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div className="home-page">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: DARK — Proprietary Strategic Hero
          ───────────────────────────────────────────────────────────── */}
      <section className="home-hero-section section-navy">
        <div className="hero-grid-pattern"></div>
        <div className="hero-ambient-glow"></div>
        
        <div className="container">
          <div className="home-hero-content">
            <motion.div 
              className="hero-tag-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero-tag-dot"></span>
              <span>AUSTRALIAN-OWNED DIGITAL GROWTH PARTNER</span>
            </motion.div>
            
            <motion.h1 
              className="home-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Turn Your Digital Presence Into Your Next <span className="hero-highlight">Growth Channel.</span>
            </motion.h1>
            
            <motion.p 
              className="home-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From Sydney to the world, Weblogic Technologies combines strategy, technology, and performance marketing to help ambitious businesses increase visibility, attract better customers, and grow with confidence.
            </motion.p>
            
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg hero-btn-primary">
                Find Your Next Move <ArrowUpRight size={18} />
              </Link>
              <a href="#model-section" className="btn btn-outline-white btn-lg hero-btn-secondary">
                See How We Think
              </a>
            </motion.div>

            {/* ── Proprietary Visual Concept: The Web-Logics Strategic Transformation Matrix ── */}
            <motion.div 
              className="hero-transformation-matrix"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="matrix-stage">
                <span className="stage-num">01</span>
                <span className="stage-name">Business Problem</span>
                <span className="stage-desc">Identify Friction</span>
              </div>
              <div className="matrix-connector">→</div>

              <div className="matrix-stage">
                <span className="stage-num">02</span>
                <span className="stage-name">Strategy</span>
                <span className="stage-desc">Positioning Blueprint</span>
              </div>
              <div className="matrix-connector">→</div>

              <div className="matrix-stage">
                <span className="stage-num">03</span>
                <span className="stage-name">Creative</span>
                <span className="stage-desc">Brand & UX System</span>
              </div>
              <div className="matrix-connector">→</div>

              <div className="matrix-stage">
                <span className="stage-num">04</span>
                <span className="stage-name">Technology</span>
                <span className="stage-desc">Bespoke Engineering</span>
              </div>
              <div className="matrix-connector">→</div>

              <div className="matrix-stage highlight-stage">
                <span className="stage-num">05</span>
                <span className="stage-name">Growth</span>
                <span className="stage-desc">Verified Scaling</span>
              </div>
            </motion.div>
          </div>

          {/* Real Showcase Visual Panel */}
          <motion.div 
            className="hero-showcase-container"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="browser-shell hero-browser-shell">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot red"></span>
                  <span className="browser-dot yellow"></span>
                  <span className="browser-dot green"></span>
                </div>
                <div className="browser-bar">weblogics.com.np / strategic-transformation-case</div>
              </div>
              <div className="browser-screen">
                <img 
                  src="/portfolio_garage.png" 
                  alt="Web-Logics Real Strategic Transformation Platform" 
                  className="hero-mockup-img"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Marquee */}
        <div className="hero-marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {logos.concat(logos).map((brand, idx) => (
                <div className="marquee-item" key={idx}>
                  <span className="marquee-brand-text">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: LIGHT — Global Credibility & Goal Navigator
          ───────────────────────────────────────────────────────────── */}
      <section className="model-section section-white" id="model-section">
        <div className="container">
          {/* 1. Global Credibility Feature */}
          <GlobalFootprintBanner />

          {/* 2. Business Goal Navigator ("WHAT ARE YOU TRYING TO ACHIEVE?") */}
          <div className="mt-20">
            <BusinessGoalNavigator />
          </div>

          {/* 3. Connected System Capabilities (Strategy + Creative + Technology + Growth) */}
          <div className="mt-20">
            <SectionHeader 
              theme="light" 
              label="Connected Capability System" 
              title="Why disconnected services fail — and how we solve it." 
              description="Traditional agencies sell isolated tactics: a standalone website, an unoptimized ad run, or separate SEO packages. Weblogic Technologies connects every discipline into a unified commercial growth engine."
            />
            
            <div className="mt-8">
              <ConnectedCapabilities />
            </div>
          </div>

          {/* Comparison Matrix: Vendor vs Web-Logics */}
          <div className="comparison-container mt-12">
            <div className="comparison-card vendor-card">
              <div className="comparison-header">
                <XCircle size={22} className="text-error" />
                <h3>Traditional Agency Vendors</h3>
              </div>
              <ul className="comparison-list">
                <li>Sell disconnected, one-off deliverables (just a website, just an ad run).</li>
                <li>Rely on heavy, bloated CMS page builders that destroy mobile page speed.</li>
                <li>Pass clients off to junior account managers after contract signing.</li>
                <li>Provide vague vanity reports (clicks, impressions) without revenue tracking.</li>
              </ul>
            </div>

            <div className="comparison-card studio-card">
              <div className="comparison-header">
                <CheckCircle size={22} className="text-success" />
                <h3>The Web-Logics Strategic Partnership</h3>
              </div>
              <ul className="comparison-list">
                <li>Diagnoses the underlying business problem before prescribing strategy or code.</li>
                <li>Engineers custom, sub-second React & headless CMS architectures.</li>
                <li>Direct principal-level access to senior strategists and technical directors.</li>
                <li>Rigorous attribution tracking tied directly to verified leads, orders, and ROAS.</li>
              </ul>
            </div>
          </div>

          {/* Signature Interactive Diagnostic Section */}
          <div className="mt-20">
            <BusinessDiagnostic />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ACCENT — Real Selected Work & Transformation Stories
          ───────────────────────────────────────────────────────────── */}
      <section className="work-accent-section">
        <div className="container">
          <TransformationPortfolio />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: DARK — Technological Capability & Engineering Rigor
          ───────────────────────────────────────────────────────────── */}
      <section className="tech-dark-section section-navy">
        <div className="container">
          <SectionHeader 
            theme="dark" 
            label="Engineering Standards" 
            title="Bespoke technology built for speed, security & seamless integration." 
            description="We refuse bloated pre-built themes and page builders. Every line of code is written to guarantee sub-second performance, airtight security, and enterprise API synchronization."
          />

          <div className="tech-pillars-grid">
            <div className="tech-pillar-card">
              <div className="tech-pillar-icon"><Zap size={24} /></div>
              <h4>Sub-Second Performance</h4>
              <p>Custom React and Next.js frontends engineered to hit 95+ Core Web Vitals scores, keeping bounce rates low and search ranks high.</p>
            </div>

            <div className="tech-pillar-card">
              <div className="tech-pillar-icon"><ShieldCheck size={24} /></div>
              <h4>Decoupled Security</h4>
              <p>Headless CMS architecture decouples frontend code from backend databases, eliminating traditional SQL and plugin exploit routes.</p>
            </div>

            <div className="tech-pillar-card">
              <div className="tech-pillar-icon"><Layers size={24} /></div>
              <h4>API & CRM Integration</h4>
              <p>Programmatic pipelines connecting lead captures and e-commerce checkouts directly to Salesforce, HubSpot, Stripe, and Meta CAPI.</p>
            </div>

            <div className="tech-pillar-card">
              <div className="tech-pillar-icon"><Award size={24} /></div>
              <h4>Scalable Architecture</h4>
              <p>Modular component design systems built to expand with your product lineup, team headcount, and expanding geographic markets.</p>
            </div>
          </div>

          {/* Real Technology Badges */}
          <div className="tech-badges-container mt-12">
            <span className="tech-badge-title">PROVEN STACK & TOOLS:</span>
            <div className="tech-badges-list">
              <span className="tech-badge">React 19</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Shopify Plus</span>
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">GA4 / GTM</span>
              <span className="tech-badge">Meta CAPI</span>
              <span className="tech-badge">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: LIGHT — Verified Proof, Client Endorsements & Consultation
          ───────────────────────────────────────────────────────────── */}
      <section className="testimonials-light-section section-gray">
        <div className="container">
          {/* Contextual Proof System */}
          <ContextualProofSystem />

          {/* Industry Context Navigator */}
          <div className="mt-20">
            <IndustryNavigator />
          </div>

          {/* High-Intent Strategic Consultation Box */}
          <div className="consultation-box-xl mt-12">
            <div className="consultation-grid">
              <div className="consultation-info">
                <span className="section-label">Ready for Strategic Clarity?</span>
                <h2>Let's diagnose your current digital friction and map a strategic roadmap.</h2>
                <p>
                  Book a strategic briefing session with our principal team in Sydney, Australia. We will review your current website, search authority, and customer acquisition channels.
                </p>
                <div className="consultation-actions mt-6">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Schedule Strategy Session <ArrowUpRight size={18} />
                  </Link>
                  <Link to="/case-studies" className="btn btn-outline btn-lg">
                    Review All Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
