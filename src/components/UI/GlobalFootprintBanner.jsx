import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ShieldCheck, Star, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './GlobalFootprintBanner.css';

export const globalHubs = [
  {
    country: "Australia 🇦🇺",
    city: "Sydney (Global HQ)",
    role: "Headquarters, Client Strategy & Direction",
    description: "Headquartered in Sydney, directing client growth strategy, search positioning, and account management."
  },
  {
    country: "United Kingdom 🇬🇧",
    city: "London Hub",
    role: "UK & European Market Operations",
    description: "Supporting British enterprises with B2B search dominance, logistics platforms, and brand development."
  },
  {
    country: "Canada 🇨🇦",
    city: "Toronto Hub",
    role: "North American Market Operations",
    description: "Engineering high-converting digital presence and tender platforms for Canadian corporate clients."
  },
  {
    country: "New Zealand 🇳🇿",
    city: "Auckland Hub",
    role: "Trans-Tasman Client Support",
    description: "Delivering cross-border digital growth, SEO, and custom web development across Australia and New Zealand."
  },
  {
    country: "United States 🇺🇸",
    city: "California Hub",
    role: "US Paid Media & Growth Unit",
    description: "Executing high-ROAS paid search, shopping ads, and performance campaigns for US brands."
  },
  {
    country: "India 🇮🇳",
    city: "New Delhi & Regional Hubs",
    role: "Technical & Content Delivery Center",
    description: "Powering sub-second React engineering, technical SEO auditing, and high-authority content creation."
  }
];

export default function GlobalFootprintBanner() {
  const [activeHubIndex, setActiveHubIndex] = useState(0);
  const activeHub = globalHubs[activeHubIndex];

  return (
    <div className="global-footprint-wrapper">
      <div className="footprint-header">
        <span className="section-label">International Credibility</span>
        <h2 className="display-sm text-heading">FROM LOCAL ROOTS IN SYDNEY TO GLOBAL REACH.</h2>
        <p className="lead lead-muted mt-2">
          Headquartered in Sydney, Australia, Weblogic Technologies combines local market understanding with an international execution footprint across 6 key global markets.
        </p>
      </div>

      {/* Main Global Interactive Shell */}
      <div className="global-shell-container">
        {/* Hub Selector Buttons */}
        <div className="global-hubs-grid">
          {globalHubs.map((hub, idx) => {
            const isSelected = idx === activeHubIndex;
            return (
              <button
                key={idx}
                className={`hub-select-card ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveHubIndex(idx)}
              >
                <div className="hub-card-header">
                  <span className="hub-flag">{hub.country.split(' ')[1]}</span>
                  <span className="hub-city-name">{hub.city}</span>
                </div>
                <span className="hub-role-sub">{hub.role}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Detail Panel */}
        <div className="hub-detail-panel mt-6">
          <div className="hub-detail-header">
            <div className="hub-badge-circle">
              <Globe size={22} />
            </div>
            <div>
              <span className="hub-label">GLOBAL MARKET FOOTPRINT</span>
              <h3 className="hub-title-text">{activeHub.city} — {activeHub.country}</h3>
            </div>
          </div>

          <p className="hub-desc-text mt-3">{activeHub.description}</p>

          <div className="hub-stats-row mt-4">
            <div className="hub-stat-item">
              <ShieldCheck size={16} className="text-accent" />
              <span>40+ Verified Reviews</span>
            </div>
            <div className="hub-stat-item">
              <Star size={16} className="text-warning" />
              <span>5.0 Client Satisfaction Rating</span>
            </div>
            <div className="hub-stat-item">
              <CheckCircle2 size={16} className="text-success" />
              <span>Transparent & Personal Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
