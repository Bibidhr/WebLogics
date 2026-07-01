import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CaseStudies.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function CaseStudies() {
  // Fallback image helper
  const handleImgError = (e) => {
    e.target.src = '/client_preview_1.png';
  };

  const caseStudies = [
    {
      id: "premium-garage-doors",
      title: "Premium Garage Doors: Dominating local installation markets in Victoria",
      industry: "Manufacturing & Construction",
      image: "/portfolio_garage.png",
      tags: ["Web Dev", "Local SEO", "UX Auditing"],
      metrics: [
        { label: "Victoria Organic Traffic", value: "+142%" },
        { label: "Direct Phone Leads", value: "+88%" }
      ],
      description: "We redesigned the custom website frontend for Premium Garage Doors and executed local ranking campaigns targeting residential garage installs, cementing search market dominance in Victoria."
    },
    {
      id: "dhaage-sarees",
      title: "Dhaage Sarees: Scaling traditional Indian luxury storefronts globally",
      industry: "E-Commerce",
      image: "/portfolio_sarees.png",
      tags: ["Shopify Plus", "Google Ads", "Meta Ads"],
      metrics: [
        { label: "ROAS Average", value: "4.8x" },
        { label: "Cart Drop-off Reduction", value: "-26%" }
      ],
      description: "Developed a modern Shopify storefront and automated abandoned cart pipelines, combined with targeted search and paid social advertising campaigns."
    },
    {
      id: "mags",
      title: "MAGS: Clean fashion e-commerce storefront for sustainable apparel",
      industry: "E-Commerce",
      image: "/portfolio_mags.png",
      tags: ["Shopify Store", "Product Collections UI", "SEO Audit"],
      metrics: [
        { label: "Organic Impressions", value: "+88%" },
        { label: "Mobile Bounce Rate", value: "-18%" }
      ],
      description: "Designed a clean, modern Shopify storefront highlighting eco-friendly viscose clothing and traditional attire, optimizing catalog crawl setups."
    },
    {
      id: "city-security-services",
      title: "City Security Services: Establishing local search authority for corporate security bids",
      industry: "Security",
      image: "/portfolio_city_security.png",
      tags: ["Corporate Web Dev", "Local SEO", "Client Portals"],
      metrics: [
        { label: "Search Visibility", value: "First Page Ranks" },
        { label: "Lead Form Enquiries", value: "+44%" }
      ],
      description: "Developed a secure corporate web presence for city security operations, optimizing local search visibility for corporate security bids."
    },
    {
      id: "sleepy-classes-ias",
      title: "Sleepy Classes IAS: Restructuring learning portals for Civil Service students",
      industry: "Education",
      image: "/portfolio_sleepy.png",
      tags: ["Custom Web App", "LMS Integration", "Technical SEO"],
      metrics: [
        { label: "Student Registrations", value: "+120%" },
        { label: "Page Speed Score", value: "98/100" }
      ],
      description: "Restructured the course directory and student dashboard, boosting organic search engine rankings for civil service preparation."
    },
    {
      id: "aesthetic-art-products",
      title: "Aesthetic Art Products: Custom product catalogs for architectural wrought iron",
      industry: "Manufacturing",
      image: "/portfolio_aesthetic.png",
      tags: ["React Frontend", "B2B Product Hub", "Dispatch Sync"],
      metrics: [
        { label: "B2B Shipper Inquiries", value: "+65%" },
        { label: "Inventory Load Speed", value: "Sub-1s" }
      ],
      description: "Corporate website design showcasing custom wrought/cast iron gates, rails, and architectural products for freight deliveries."
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Case Studies</span>
          <h1 className="display display-light">Client outcomes. Verified results.</h1>
          <p className="lead mx-auto lead-light mt-4">
            Explore how we partner with Australian and international brands to optimize platforms, rank search terms, and run profitable campaigns.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <motion.div 
            className="cs-list-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {caseStudies.map((cs) => (
              <motion.div 
                className="cs-list-item" 
                key={cs.id}
                variants={fadeUp}
              >
                <div className="portfolio-shell-wrapper" style={{ width: '100%' }}>
                  <div className="browser-shell">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <div className="browser-dot red"></div>
                        <div className="browser-dot yellow"></div>
                        <div className="browser-dot green"></div>
                      </div>
                      <div className="browser-bar">www.{cs.title.split(':')[0].toLowerCase().replace(/\s+/g, '')}.com</div>
                    </div>
                    <div className="browser-screen">
                      <div className="portfolio-screenshot">
                        <img src={cs.image} alt={cs.title} onError={handleImgError} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="cs-list-content">
                  <div className="cs-meta">
                    <span className="cs-industry-badge">{cs.industry}</span>
                  </div>
                  
                  <h2>{cs.title}</h2>
                  <p>{cs.description}</p>
                  
                  <div className="cs-metrics-row">
                    {cs.metrics.map((metric, i) => (
                      <div key={i} className="cs-metric-box">
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/portfolio" className="cs-detail-link">
                    View Portfolio Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
