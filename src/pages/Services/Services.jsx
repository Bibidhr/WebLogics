import { ArrowRight, CheckCircle2, Code, Globe, Target, LineChart, Shield, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConnectedCapabilities from '../../components/UI/ConnectedCapabilities';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      {/* ── Subpage Header ── */}
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Integrated System</span>
          <h1 className="display display-light">Connected growth capabilities.</h1>
          <p className="lead mx-auto lead-light mt-4">
            We do not sell disconnected services. We connect Strategy, Creative, Technology, and Growth to solve complex business problems.
          </p>
        </div>
      </section>

      {/* ── Connected System Section ── */}
      <section className="section section-gray">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <ConnectedCapabilities />
          </div>
        </div>
      </section>

      {/* ── Engineering Standards ── */}
      <section className="section section-white">
        <div className="container">
          <div className="rounded-container-xl-dark" style={{ position: 'relative' }}>
            <div className="text-center mb-12">
              <span className="section-label">Engineering Rigor</span>
              <h2 className="h1">Our capability standards</h2>
              <p className="lead mx-auto mt-4">We deliver enterprise-quality codebases, bulletproof local search indexes, and clear ad spend attribution pipelines.</p>
            </div>
            
            <div className="services-why-grid">
              <div className="why-card-premium">
                <h4>Principal Strategy Only</h4>
                <p className="body-sm mt-2">Every strategic decision and code route is executed directly by senior directors with deep domain expertise.</p>
              </div>
              <div className="why-card-premium">
                <h4>Server-Side Conversion Audits</h4>
                <p className="body-sm mt-2">We build custom attribution pathways directly on GA4/GTM, verifying real numbers instead of vanity metrics.</p>
              </div>
              <div className="why-card-premium">
                <h4>Sub-Second Architectures</h4>
                <p className="body-sm mt-2">We engineer web storefronts and interfaces using custom React/Next.js frameworks to guarantee sub-second mobile load times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms We Build & Scale ── */}
      <section className="section section-gray">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="text-center mb-12">
              <span className="section-label">Integrations</span>
              <h2 className="h1">Platforms & tools we build with</h2>
            </div>
            
            <div className="tech-logos-grid">
              <div className="tech-logo-card">
                <strong>React 19</strong>
                <span>Headless Frontends</span>
              </div>
              <div className="tech-logo-card">
                <strong>Next.js</strong>
                <span>Server-Side Code</span>
              </div>
              <div className="tech-logo-card">
                <strong>Shopify Plus</strong>
                <span>E-Commerce Engine</span>
              </div>
              <div className="tech-logo-card">
                <strong>Node / APIs</strong>
                <span>Secure Integrations</span>
              </div>
              <div className="tech-logo-card">
                <strong>Google Ads & Meta</strong>
                <span>Campaign Scaling</span>
              </div>
              <div className="tech-logo-card">
                <strong>GA4 & GTM</strong>
                <span>Conversion Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation Pre-Footer Call to Action ── */}
      <section className="section section-white">
        <div className="container text-center">
          <span className="section-label">Ready to Align Your Digital System?</span>
          <h2 className="h1 mt-2">Let's discuss your capabilities requirements.</h2>
          <p className="lead mx-auto mt-4 max-w-700">
            Book a strategic session with our principal team to map out your product, brand, and growth needs.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Project Proposal <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
