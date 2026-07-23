import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TransformationPortfolio from '../../components/UI/TransformationPortfolio';
import './Portfolio.css';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page portfolio-premium">
      {/* Subpage Header */}
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Case Studies & Impact</span>
          <h1 className="display display-light">Transformation Stories.</h1>
          <p className="lead mx-auto lead-light mt-4">
            We partner with ambitious enterprises to engineer platforms that dominate search, optimize conversions, and scale commercial returns.
          </p>
        </div>
      </section>

      {/* Main Transformation Portfolio Component */}
      <section className="section section-navy">
        <div className="container">
          <TransformationPortfolio />
        </div>
      </section>

      {/* Pre-Footer Consultation Action */}
      <section className="section section-white">
        <div className="container text-center">
          <span className="section-label">Have a Complex Business Challenge?</span>
          <h2 className="h1 mt-2">Let's build your transformation story.</h2>
          <p className="lead mx-auto mt-4 max-w-700">
            Book a strategic briefing session with our team in Sydney, Australia to review your digital presence, search positioning, and conversion architecture.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Discuss Your Project Requirements <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
