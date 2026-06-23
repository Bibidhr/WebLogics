import { ArrowRight, CheckCircle2, Code, Globe, Target, LineChart, Shield, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  const services = [
    {
      icon: <Code size={36} />,
      title: "Web Development",
      id: "web-development",
      description: "Custom storefronts and systems engineered from the ground up for speed, security, and integration. We build tailor-made codebases without bloated page templates.",
      bullets: [
        "Headless CMS, React & Next.js Platforms",
        "Sub-Second Load Times & Speed Auditing",
        "Custom API & CRM Integration Pathways",
        "Secure Database & Portal Engineering"
      ]
    },
    {
      icon: <Globe size={36} />,
      title: "SEO Optimization",
      id: "seo",
      description: "Search positioning targeted specifically at high-intent commercial keywords. We optimize your website code structure, resolve crawl crawlability blocks, and write expert local copy.",
      bullets: [
        "Technical SEO Auditing & Code Crawl Optimizations",
        "Commercial Term Research & Intent Mapping",
        "Bespoke Content Planning & Article Editorial",
        "Local Sydney Authority & Citation Integrity"
      ]
    },
    {
      icon: <Target size={36} />,
      title: "Google Ads & Paid PPC",
      id: "google-ads",
      description: "Paid search campaign setups engineered to maximize acquisition efficiency. We focus on search query relevance, negative targeting, and direct lead alignment.",
      bullets: [
        "Google Ads & Microsoft PPC Platform Strategy",
        "Strict Campaign Keyword Budget Optimizations",
        "Custom Conversion Landing Page Design",
        "Weekly Client Revenue Attribution Reports"
      ]
    },
    {
      icon: <LineChart size={36} />,
      title: "Social Media Marketing",
      id: "social-media-marketing",
      description: "Paid social spend structured to capture brand authority and inbound client interest across key professional networks (Meta & LinkedIn).",
      bullets: [
        "Multi-Platform Strategy & Brand Positioning",
        "Bespoke Ad Creative & Professional Scriptwriting",
        "Conversion Funnel Retargeting Audits",
        "Engagement Analytics & Monthly Review Calls"
      ]
    },
    {
      icon: <Shield size={36} />,
      title: "Brand Strategy",
      id: "branding",
      description: "Comprehensive corporate brand guidelines that define your market positioning, voice, typography rules, and client messaging systems.",
      bullets: [
        "Competitive Brand Assessment & Niche Auditing",
        "Typography, Color & Logo System Documentation",
        "Corporate Messaging & Corporate Brand Voice Systems",
        "Marketing Pitch & Brand Asset Structuring"
      ]
    },
    {
      icon: <ShoppingCart size={36} />,
      title: "E-Commerce Solutions",
      id: "ecommerce",
      description: "High-speed storefront solutions designed on Shopify Plus or custom engines, optimized to drive conversions and reduce checkout friction.",
      bullets: [
        "Shopify Plus Setup & Headless Store Frontends",
        "Custom Cart Logic & Payment Processing Gateway Setup",
        "Inventory ERP & Logistics API Sync Auditing",
        "Cart Recovery Automation Setup"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-header text-center">
        <div className="container">
          <span className="section-label" style={{color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Capabilities</span>
          <h1 className="display text-white">Bespoke digital solutions</h1>
          <p className="lead mx-auto text-white opacity-80 mt-4">
            We deliver robust development, transparent organic search marketing, and highly efficient paid campaigns.
          </p>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="container">
          <motion.div 
            className="services-grid-large"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div 
                className="service-card-large" 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "var(--shadow-md)", transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="service-features-list">
                  {service.bullets.map((bullet, i) => (
                    <div className="service-feature-item" key={i}>
                      <CheckCircle2 size={16} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/services/${service.id}`} className="service-detail-link">
                  Learn More About {service.title} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
