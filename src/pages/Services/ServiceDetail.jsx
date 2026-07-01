import { useParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ServiceDetail.css';

const serviceData = {
  "web-development": {
    title: "Web Design & Development",
    subtitle: "Custom-engineered React and Headless CMS platforms built for speed, security, and integration.",
    description: "We build tailored digital applications that load instantly and scale alongside your business. We refuse to use pre-built templates or heavy builders. Every line of code is written to ensure high performance and seamless integration with your sales systems.",
    stack: ["React / Vite", "Node.js", "Headless WordPress / Strapi", "Shopify Engine", "HTML5 / Vanilla CSS"],
    deliverables: [
      "Custom UI Design Prototypes (Figma Mockups)",
      "Bespoke Responsive React Frontends",
      "Headless CMS Integration for easy client editing",
      "Full API Integrations (Salesforce, HubSpot, Stripe)",
      "Strict Page Speed & Security Optimizations"
    ],
    timeline: "6 — 8 Weeks",
    process: [
      { step: "01", title: "Discovery & User-Flow Planning", desc: "We map out your business objectives, review user pathways, and define technical integration points." },
      { step: "02", title: "Bespoke Interface Design", desc: "We draft high-fidelity custom design concepts. No off-the-shelf templates — ever." },
      { step: "03", title: "Technical Engineering", desc: "Our development team builds the frontend and connects it with secure APIs and CMS structures." },
      { step: "04", title: "Deployment & Quality Check", desc: "Rigorous cross-device testing, speed audits, security configurations, and launch orchestration." }
    ],
    faqs: [
      { q: "Do you use WordPress page builders like Elementor?", a: "No. Page builders add substantial code weight and slow down your site. We build custom headless structures or bespoke clean themes, giving you an easy editing dashboard without the bloat." },
      { q: "How do you ensure the site stays secure?", a: "By decoupling the frontend from the CMS backend (headless approach), we eliminate common database exploit routes. We also follow OWASP security standards for user forms." }
    ]
  },
  "seo": {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Organic search visibility engineered around high-intent commercial terms.",
    description: "SEO at Weblogics is a technical science, not generic copywriting. We optimize your website code structure, resolve crawl crawlability blocks, and write expert content targeting users ready to buy. We focus entirely on organic queries that generate inquiries, not vanity keywords.",
    stack: ["Google Search Console", "Screaming Frog Crawler", "Semrush / Ahrefs", "Google Analytics 4", "Bespoke Schema Markup"],
    deliverables: [
      "Technical Crawler & Indexing Audits",
      "Commercial Keyword Search Intent Mapping",
      "On-Page Title, H1 & Metadata Restructuring",
      "Editorial Copywriting & Landing Page Outlines",
      "Local Sydney Search Authority Building"
    ],
    timeline: "Ongoing Campaign",
    process: [
      { step: "01", title: "Technical Code Audit", desc: "We crawling your website to identify indexing issues, broken links, slow pages, and schema errors." },
      { step: "02", title: "Intent & Keyword Strategy", desc: "We identify the exact search queries your prospective clients use during their research phase." },
      { step: "03", title: "On-Page & Content Deployment", desc: "We rewrite headings, configure meta descriptions, and publish editorial articles targeting key terms." },
      { step: "04", title: "Link Authority & Review", desc: "We earn natural high-quality link placements and compile transparent weekly attribution reports." }
    ],
    faqs: [
      { q: "How long before we see organic rankings improve?", a: "Technical fixes can show indexing improvements in 2 to 4 weeks. High-competition search terms typically require 3 to 6 months of steady authority building to rank on the first page." },
      { q: "Do you guarantee first page Google rankings?", a: "No agency can guarantee rankings due to constant search algorithm updates. We focus on transparent technical benchmarks and building real authority, which reliably leads to lead growth." }
    ]
  },
  "google-ads": {
    title: "Google Ads & PPC Management",
    subtitle: "Paid search campaigns managed with absolute budget efficiency and clear ROI.",
    description: "We optimize your PPC campaigns to target high-intent prospects, reducing wasted spend on irrelevant queries. Every dollar of ad spend is tracked back to a lead form or transaction, ensuring you see the exact ROI of your campaigns.",
    stack: ["Google Ads Editor", "Google Merchant Center", "GA4 Attribution Models", "Keyword Planner", "Custom Landing Pages"],
    deliverables: [
      "Paid Search Campaign Audits & Restructuring",
      "Negative Keyword Tuning & Query Monitoring",
      "High-Converting Landing Page Frameworks",
      "Ad Text Copy A/B Performance Testing",
      "Direct Lead Pipeline Integration (CRM Sync)"
    ],
    timeline: "Monthly Campaigns",
    process: [
      { step: "01", title: "Account & Competitor Research", desc: "We analyze competitor bids, search terms, and current account configurations." },
      { step: "02", title: "Campaign Strategy & Structure", desc: "We set up clear ad groups, write compelling ad copy, and define budget limits." },
      { step: "03", title: "Landing Page Construction", desc: "We build dedicated, fast-loading landing pages designed strictly to convert traffic into leads." },
      { step: "04", title: "Conversion Optimization", desc: "We actively monitor search query logs to filter out negative terms and optimize keyword bidding." }
    ],
    faqs: [
      { q: "Do you charge a percentage of ad spend?", a: "No. We charge a flat, transparent monthly management fee based on campaign complexity, not a percentage. This ensures we never recommend increasing spend unless it genuinely drives profit." },
      { q: "How do you track leads back to campaigns?", a: "We install custom Google Tag Manager scripts that trace the click identifier from Google Ads directly through to form submissions and phone calls, reporting verified lead counts." }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    subtitle: "Strategic paid social media campaigns focused on brand authority and funnel retargeting.",
    description: "We run paid campaigns on Meta (Facebook & Instagram) and LinkedIn to build awareness and retarget high-value prospects. We align custom creative formats and expert copy structures to establish trust and prompt direct inquiry.",
    stack: ["Meta Ads Manager", "LinkedIn Campaign Manager", "Creative Ad Design", "Meta Pixel & Conversion APIs"],
    deliverables: [
      "Audience Targeting & Demographics Mapping",
      "Ad Creative Design & Copywriting Assets",
      "Middle-of-Funnel Retargeting Setups",
      "Custom Campaign Asset Creation (Graphics & Copy)",
      "Attribution Tracking Setup (Pixel/Conversion API)"
    ],
    timeline: "Ongoing Campaign",
    process: [
      { step: "01", title: "Audience Profiling", desc: "We identify target user personas, industries, job roles, and search traits." },
      { step: "02", title: "Creative & Copy Concepting", desc: "We produce professional copywriting and visual assets tailored to each channel." },
      { step: "03", title: "Funnel Setup & Campaign Launch", desc: "We build cold-traffic interest groups and set up warm retargeting cohorts." },
      { step: "04", title: "KPI Review & Optimization", desc: "Continuous performance audits of click-through rates, scroll rates, and cost-per-lead." }
    ],
    faqs: [
      { q: "Do you post daily updates to our organic social feeds?", a: "Our focus is primarily on paid social ads and retargeting systems, as these drive direct client inquiries. We handle organic profile strategy, but exclude daily community postings." },
      { q: "Which platform works best: Meta or LinkedIn?", a: "For B2B brands and professional service groups, LinkedIn offers precise targeting by job title and company. For E-commerce and consumer brands, Meta provides optimal reach and visual scaling." }
    ]
  },
  "branding": {
    title: "Brand Strategy & Design",
    subtitle: "Complete corporate identity systems designed to establish trust and professional authority.",
    description: "A brand is more than a logo; it is the visual language of your company. We design comprehensive brand guidelines that define your market positioning, color palettes, typography, and content voice rules to establish corporate authority.",
    stack: ["Figma", "Adobe Illustrator", "Brand Style Guides", "Visual Positioning Audits"],
    deliverables: [
      "Competitive Visual Brand Audit",
      "Logo System Design (Horizontal, Stacked, Icon)",
      "Editorial Color Palette & Typography Rules",
      "Corporate Communication Voice Guidelines",
      "Custom Collateral Mockups (Letterhead, Business Cards)"
    ],
    timeline: "4 — 6 Weeks",
    process: [
      { step: "01", title: "Brand Identity Workshop", desc: "We sit down to discuss your company values, market positioning, and target audiences." },
      { step: "02", title: "Visual Style Direction", desc: "We present distinct mood boards exploring typography, colors, and design styles." },
      { step: "03", title: "Asset Refinement", desc: "We design and iterate on logo concepts, icons, typography, and graphic styles." },
      { step: "04", title: "Guideline Packaging", desc: "We document and compile your complete brand style book into a clean digital manual." }
    ],
    faqs: [
      { q: "Do we own the full copyright to the designs?", a: "Yes. Once the final invoice is settled, the complete intellectual property and original source files (Figma, SVG vectors) belong entirely to you." },
      { q: "Can you redesign our existing corporate identity?", a: "Absolutely. We specialize in corporate updates, retaining the legacy value of your original logo while updating the styling, color, and typography systems for modern platforms." }
    ]
  },
  "ecommerce": {
    title: "E-Commerce Solutions",
    subtitle: "Fast, custom storefronts optimized for checkout conversions and high average order value.",
    description: "We build custom storefront integrations using Shopify Plus or headless configurations. We prioritize loading speeds, frictionless carts, clear filter systems, and direct synchronization with your shipping and inventory software.",
    stack: ["Shopify Plus", "React Storefronts", "Payment Gateways (Stripe, PayPal)", "ERP & Inventory APIs", "Cart Conversion Tuning"],
    deliverables: [
      "Conversion Rate Optimization (CRO) Checkout Audits",
      "Custom Shopify Storefront Architecture Design",
      "Inventory Management & Shipping Sync Setup",
      "Customer Cart Retention Automation Setup",
      "High-Performance Custom Page Speed Setups"
    ],
    timeline: "8 — 12 Weeks",
    process: [
      { step: "01", title: "Product Database Mapping", desc: "We review your catalog size, variants, collections, and inventory sync systems." },
      { step: "02", title: "User Experience Design", desc: "We design highly clean shopping interfaces, optimized for mobile checkout paths." },
      { step: "03", title: "Shopify Integration Development", desc: "Our developer team writes custom templates, sets up APIs, and configures payment channels." },
      { step: "04", title: "Speed Optimization & Launch", desc: "We audit third-party app scripts to ensure maximum performance, followed by staging checks." }
    ],
    faqs: [
      { q: "Can we sync our physical retail store inventory?", a: "Yes. We specialize in connecting digital store platforms with ERP systems, warehouse software, and point-of-sale systems like Shopify POS or custom databases." },
      { q: "Why should we build a custom e-commerce theme?", a: "Pre-built themes carry a significant amount of bloated script code that slows down mobile devices. A bespoke theme is built lightweight, leading to higher search ranks and conversions." }
    ]
  }
};

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
