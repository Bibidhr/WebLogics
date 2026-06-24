import { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const portfolioItems = [
  {
    id: "premium-garage-doors",
    title: "Premium Garage Doors",
    country: "Australia",
    countryBadge: "Australia 🇦🇺",
    industry: "Manufacturing",
    service: "web-development",
    serviceLabel: "Web Development & SEO",
    image: "/portfolio_garage.png",
    tags: ["React Platform", "Local SEO Strategy", "Inventory Sync"],
    outcome: "+142% Victoria Traffic",
    summary: "Rebuilt the custom web platform and restructured local search indexes to capture residential garage installation traffic across Victoria."
  },
  {
    id: "dhaage-sarees",
    title: "Dhaage Sarees",
    country: "India",
    countryBadge: "India 🇮🇳",
    industry: "Ecommerce",
    service: "ecommerce",
    serviceLabel: "E-Commerce & Ads",
    image: "/portfolio_sarees.png",
    tags: ["Shopify Store", "Meta Conversion API", "Cart CRO"],
    outcome: "4.8x ROAS Average",
    summary: "Developed a modern Shopify storefront and automated abandoned cart pipelines, combined with targeted search and paid social advertising."
  },
  {
    id: "mags",
    title: "MAGS",
    country: "India",
    countryBadge: "India 🇮🇳",
    industry: "Ecommerce",
    service: "ecommerce",
    serviceLabel: "Shopify Store & SEO",
    image: "/portfolio_mags.png",
    tags: ["Shopify Development", "Fashion Collections UI", "Technical SEO"],
    outcome: "+88% Organic Impressions",
    summary: "Designed a clean, modern Shopify storefront highlighting eco-friendly viscose clothing and traditional attire, optimizing catalog crawls."
  },
  {
    id: "city-security-services",
    title: "City Security Services",
    country: "Canada",
    countryBadge: "Canada 🇨🇦",
    industry: "Security",
    service: "web-development",
    serviceLabel: "Web Development & SEO",
    image: "/portfolio_city_security.png",
    tags: ["Corporate Security Site", "Local SEO", "Client Portals"],
    outcome: "First Page Ranks for Security Queries",
    summary: "Developed a secure corporate web presence for city security operations, optimizing local search visibility for corporate security bids."
  },
  {
    id: "sleepy-classes-ias",
    title: "Sleepy Classes IAS",
    country: "India",
    countryBadge: "India 🇮🇳",
    industry: "Education",
    service: "web-development",
    serviceLabel: "Custom Web App & SEO",
    image: "/portfolio_sleepy.png",
    tags: ["Course Directory UI", "LMS Portal Integration", "SEO Copywriting"],
    outcome: "+120% enrollment queries",
    summary: "Restructured the course directory and student dashboard, boosting organic search engine rankings for civil service preparation."
  },
  {
    id: "aesthetic-art-products",
    title: "Aesthetic Art Products",
    country: "Canada",
    countryBadge: "Canada 🇨🇦",
    industry: "Manufacturing",
    service: "web-development",
    serviceLabel: "Web Design & Development",
    image: "/portfolio_aesthetic.png",
    tags: ["React Corporate Web", "Product Catalog UI", "B2B Dispatch Sync"],
    outcome: "+65% B2B Shipper Inquiries",
    summary: "Corporate website design showcasing custom wrought/cast iron gates, rails, and architectural products for freight deliveries."
  },
  {
    id: "instant-parcel-taxi",
    title: "Instant Parcel Taxi",
    country: "United Kingdom",
    countryBadge: "United Kingdom 🇬🇧",
    industry: "Logistics",
    service: "paid-search",
    serviceLabel: "PPC & Booking Engine",
    image: "/client_preview_3.png",
    tags: ["Custom Booking App", "Google Ads Search", "CPA Optimization"],
    outcome: "-34% Cost-Per-Acquisition",
    summary: "Custom web app dashboard with rapid address auto-complete and Google Ads retargeting setups to maximize courier bookings."
  }
];

export default function Portfolio() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  // Fallback image helper
  const handleImgError = (e) => {
    e.target.src = '/client_preview_1.png';
  };

  const countries = ["Australia", "Canada", "India", "United Kingdom"];
  const industries = ["Ecommerce", "Education", "Logistics", "Manufacturing", "Security"];
  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "paid-search", label: "Paid Search" },
    { value: "ecommerce", label: "E-Commerce" }
  ];

  const toggleFilter = (type, val) => {
    if (type === 'country') {
      setSelectedCountries(prev => prev.includes(val) ? prev.filter(c => c !== val) : [...prev, val]);
    } else if (type === 'industry') {
      setSelectedIndustries(prev => prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]);
    } else if (type === 'service') {
      setSelectedServices(prev => prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCountries([]);
    setSelectedIndustries([]);
    setSelectedServices([]);
  };

  const filteredItems = portfolioItems.filter(item => {
    const matchCountry = selectedCountries.length === 0 || selectedCountries.includes(item.country);
    const matchIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(item.industry);
    const matchService = selectedServices.length === 0 || selectedServices.includes(item.service);
    return matchCountry && matchIndustry && matchService;
  });

  return (
    <div className="portfolio-page">
      <section className="portfolio-header text-center">
        <div className="container">
          <span className="section-label" style={{color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Portfolio</span>
          <h1 className="display text-white">Proven international delivery</h1>
          <p className="lead mx-auto text-white opacity-80 mt-4">
            We partner with clients globally across construction, transport, logistics, and retail to build robust codebases and capture rankings.
          </p>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="container portfolio-workspace">
          {/* Sidebar Filters */}
          <aside className="portfolio-sidebar-filters">
            <div className="filter-header-block">
              <h3>Filters</h3>
              {(selectedCountries.length > 0 || selectedIndustries.length > 0 || selectedServices.length > 0) && (
                <button className="clear-btn" onClick={clearAllFilters}>
                  Clear All <X size={14} />
                </button>
              )}
            </div>

            {/* Countries Checkbox Group */}
            <div className="filter-group-box">
              <h4>Country</h4>
              <div className="checkbox-list">
                {countries.map(c => (
                  <label key={c} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedCountries.includes(c)} 
                      onChange={() => toggleFilter('country', c)}
                    />
                    <span className="custom-box">
                      {selectedCountries.includes(c) && <Check size={12} />}
                    </span>
                    <span>{c}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Industries Checkbox Group */}
            <div className="filter-group-box">
              <h4>Industry</h4>
              <div className="checkbox-list">
                {industries.map(ind => (
                  <label key={ind} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedIndustries.includes(ind)} 
                      onChange={() => toggleFilter('industry', ind)}
                    />
                    <span className="custom-box">
                      {selectedIndustries.includes(ind) && <Check size={12} />}
                    </span>
                    <span>{ind}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Services Checkbox Group */}
            <div className="filter-group-box">
              <h4>Services</h4>
              <div className="checkbox-list">
                {services.map(s => (
                  <label key={s.value} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={selectedServices.includes(s.value)} 
                      onChange={() => toggleFilter('service', s.value)}
                    />
                    <span className="custom-box">
                      {selectedServices.includes(s.value) && <Check size={12} />}
                    </span>
                    <span>{s.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid Content */}
          <main className="portfolio-content-area">
            {/* Active Tags Row */}
            <div className="active-tags-row">
              <span className="results-count">Showing <strong>{filteredItems.length}</strong> projects</span>
              <div className="tags-container">
                {selectedCountries.map(c => (
                  <span className="active-filter-tag" key={c}>
                    {c} <button onClick={() => toggleFilter('country', c)}><X size={12} /></button>
                  </span>
                ))}
                {selectedIndustries.map(i => (
                  <span className="active-filter-tag" key={i}>
                    {i} <button onClick={() => toggleFilter('industry', i)}><X size={12} /></button>
                  </span>
                ))}
                {selectedServices.map(s => {
                  const label = services.find(item => item.value === s)?.label;
                  return (
                    <span className="active-filter-tag" key={s}>
                      {label} <button onClick={() => toggleFilter('service', s)}><X size={12} /></button>
                    </span>
                  );
                })}
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <div className="empty-portfolio text-center">
                <RefreshCw size={36} className="text-secondary mb-4 spin-slow" />
                <h3>No projects match your active filters</h3>
                <p className="mt-2 text-muted">Try clearing some options in the sidebar to browse our international work.</p>
                <button className="btn btn-outline mt-6" onClick={clearAllFilters}>Reset Filters</button>
              </div>
            ) : (
              <motion.div layout className="portfolio-dashboard-grid">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map(item => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="portfolio-premium-card" 
                      key={item.id}
                    >
                      <div className="portfolio-image-box zoom-wrap">
                        <img 
                          src={item.image} 
                          alt={`${item.title} Screenshot`} 
                          onError={handleImgError}
                        />
                      </div>
                      <div className="portfolio-detail-box">
                        <div className="detail-header-row">
                          <span className="country-indicator">{item.countryBadge}</span>
                          <span className="industry-indicator">{item.industry}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p className="summary-text">{item.summary}</p>
                        <div className="portfolio-tag-wrap">
                          {item.tags.map((tag, i) => (
                            <span className="p-tag" key={i}>{tag}</span>
                          ))}
                        </div>
                        <div className="portfolio-card-outcome">
                          <span>Attributed Result</span>
                          <strong>{item.outcome}</strong>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
