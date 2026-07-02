import { useEffect } from 'react';
import { Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const portfolioItems = [
  {
    id: "premium-garage-doors",
    title: "Premium Garage Doors",
    client: "Premium Garage Doors",
    country: "Australia 🇦🇺",
    industry: "Manufacturing & Installation",
    image: "/portfolio_garage.png",
    overview: "Rebuilt the custom web platform and restructured local search indexes to capture residential garage installation traffic across Victoria.",
    challenge: "The client was losing significant local market share to competitors with faster, more optimized web presences. Their existing site had severe technical debt, poor local SEO signals, and an unoptimized lead capture flow that resulted in high bounce rates.",
    solution: "We engineered a lightning-fast React platform integrated with a headless CMS. We implemented a programmatic local SEO strategy, generating highly optimized service-area pages, and redesigned the conversion funnel to frictionlessly capture quote requests.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Framer Motion"],
    resultsList: [
      { metric: "+142%", label: "Local Search Traffic" },
      { metric: "3.2x", label: "Increase in Lead Volume" },
      { metric: "0.8s", label: "Average Page Load Time" }
    ]
  },
  {
    id: "dhaage-sarees",
    title: "Dhaage Sarees",
    client: "Dhaage",
    country: "India 🇮🇳",
    industry: "High-End E-Commerce",
    image: "/portfolio_sarees.png",
    overview: "Developed a modern Shopify storefront and automated abandoned cart pipelines, combined with targeted search and paid social advertising.",
    challenge: "Dhaage needed to transition from a local boutique to a national e-commerce brand. Their primary challenge was a low conversion rate on high-ticket items and an inability to accurately track ROAS across fragmented social media campaigns.",
    solution: "We deployed a bespoke Shopify architecture optimized for visual storytelling and mobile conversions. We integrated the Meta Conversions API for precise tracking and built automated retention pipelines to recover high-value abandoned carts.",
    techStack: ["Shopify Plus", "Liquid", "Tailwind CSS", "Meta CAPI", "Klaviyo"],
    resultsList: [
      { metric: "4.8x", label: "Average ROAS" },
      { metric: "+65%", label: "Add-to-Cart Rate" },
      { metric: "18%", label: "Cart Recovery Rate" }
    ]
  },
  {
    id: "city-security-services",
    title: "City Security Services",
    client: "City Security",
    country: "Canada 🇨🇦",
    industry: "Corporate Security",
    image: "/portfolio_city_security.png",
    overview: "Developed a secure corporate web presence for city security operations, optimizing local search visibility for corporate security bids.",
    challenge: "The firm needed to bid on multi-million dollar corporate and municipal security contracts, but their digital presence looked outdated and untrustworthy, lacking the enterprise-grade authority required to win large bids.",
    solution: "We designed a highly authoritative, brutalist yet premium corporate website. We built secure client portals for document handling and implemented an aggressive B2B SEO strategy targeting high-intent procurement keywords.",
    techStack: ["React", "Express", "AWS", "MongoDB", "Auth0"],
    resultsList: [
      { metric: "Page 1", label: "Rankings for B2B Keywords" },
      { metric: "$2.4M", label: "Pipeline Value Generated" },
      { metric: "+85%", label: "Dwell Time on Capabilities" }
    ]
  },
  {
    id: "instant-parcel-taxi",
    title: "Instant Parcel Taxi",
    client: "IPT Logistics",
    country: "United Kingdom 🇬🇧",
    industry: "Logistics & Transport",
    image: "/client_preview_3.png",
    overview: "Custom web app dashboard with rapid address auto-complete and Google Ads retargeting setups to maximize courier bookings.",
    challenge: "High customer acquisition costs were eroding profit margins. The booking process was cumbersome, causing users to abandon the funnel halfway through when trying to book urgent parcel deliveries.",
    solution: "We engineered a frictionless, single-page booking engine with predictive address mapping. Simultaneously, we restructured their Google Ads campaigns, focusing on hyper-local, high-intent search terms and aggressive CPA capping.",
    techStack: ["Vue.js", "Google Maps API", "Firebase", "Stripe", "Google Ads API"],
    resultsList: [
      { metric: "-34%", label: "Reduction in CPA" },
      { metric: "2.5x", label: "Conversion Rate Uplift" },
      { metric: "< 60s", label: "Average Booking Time" }
    ]
  }
];

export default function Portfolio() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImgError = (e) => {
    e.target.src = '/client_preview_1.png';
  };

  return (
    <div className="portfolio-page portfolio-premium">
      {/* Premium Header */}
      <section className="portfolio-hero">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="container relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="section-label section-label-light mx-auto mb-4">Our Work</span>
            <h1 className="display display-light mb-6">Digital Excellence<br/>Delivered Globally.</h1>
            <p className="lead mx-auto lead-light max-w-2xl text-slate-300">
              We partner with ambitious brands to engineer platforms that dominate search, drive conversions, and scale effortlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Massive Project Showcases */}
      <div className="portfolio-showcases">
        {portfolioItems.map((project, index) => (
          <section className="project-showcase-section" key={project.id}>
            <div className="container">
              
              {/* 1. Large Browser Mockup */}
              <motion.div 
                className="project-mockup-stage"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="giant-browser-shell">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <div className="browser-dot red"></div>
                      <div className="browser-dot yellow"></div>
                      <div className="browser-dot green"></div>
                    </div>
                    <div className="browser-bar">www.{project.title.toLowerCase().replace(/\s+/g, '')}.com</div>
                  </div>
                  <div className="browser-screen">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Interface`} 
                      onError={handleImgError}
                      className="project-hero-image"
                    />
                    <div className="browser-glare"></div>
                  </div>
                </div>
              </motion.div>

              {/* Narrative Content */}
              <div className="project-narrative-container">
                
                {/* 2. Project Overview */}
                <motion.div 
                  className="narrative-header"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="project-meta-tags">
                    <span className="premium-tag">{project.country}</span>
                    <span className="premium-tag">{project.industry}</span>
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-overview">{project.overview}</p>
                </motion.div>

                <div className="narrative-grid">
                  {/* 3. Challenge & Solution */}
                  <div className="narrative-content-column">
                    <motion.div 
                      className="narrative-block challenge-block"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="block-icon">
                        <Activity size={24} />
                      </div>
                      <h3>Business Challenge</h3>
                      <p>{project.challenge}</p>
                    </motion.div>

                    <motion.div 
                      className="narrative-block solution-block"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="block-icon">
                        <Zap size={24} />
                      </div>
                      <h3>Our Solution</h3>
                      <p>{project.solution}</p>
                    </motion.div>
                  </div>

                  {/* 4. Tech Stack & 5. Results */}
                  <div className="narrative-sidebar-column">
                    
                    <motion.div 
                      className="tech-stack-block"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <h3>Technology Stack</h3>
                      <div className="tech-pills">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="tech-pill">{tech}</span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="results-block"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3>Business Impact</h3>
                      <div className="metrics-list">
                        {project.resultsList.map((result, i) => (
                          <div className="metric-item" key={i}>
                            <div className="metric-value">{result.metric}</div>
                            <div className="metric-label">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
      
      {/* Call to Action */}
      <section className="section portfolio-cta text-center">
        <div className="container">
          <h2 className="h2 mb-4">Ready for these kinds of results?</h2>
          <p className="lead mx-auto mb-8 text-slate-400">Let's discuss how we can engineer growth for your business.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Start a Project</a>
        </div>
      </section>
    </div>
  );
}
