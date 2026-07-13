import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Careers.css';
import { jobs } from '../../data/jobs';

export default function Careers() {
  return (
    <div className="careers-page">
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Careers</span>
          <h1 className="display display-light">Join Weblogics</h1>
          <p className="lead mx-auto lead-light mt-4">
            Work with a dedicated technical growth team in North Sydney. We prioritize technical precision, transparency, and professional growth.
          </p>
        </div>
      </section>

      {/* Perks / Benefits */}
      <section className="section bg-white">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="text-center mb-12">
              <span className="section-label">Perks & Values</span>
              <h2 className="h1">Why work at Weblogics?</h2>
            </div>

            <div className="perks-grid">
              <div className="perk-card">
                <h4>Sydney HQ & Hybrid Style</h4>
                <p className="body-sm mt-2">Work from our suite at 100 Walker Street, North Sydney. Enjoy hybrid conditions (3 days office, 2 days remote) for balanced focus.</p>
              </div>
              
              <div className="perk-card">
                <h4>Professional Growth Budget</h4>
                <p className="body-sm mt-2">We allocate $2,000 annually per staff member for technical certifications, dev courses, conferences, or strategic training.</p>
              </div>
              
              <div className="perk-card">
                <h4>Collaborative Structure</h4>
                <p className="body-sm mt-2">We operate flat team hierarchies. Our developers work directly alongside search specialists and client directors to ship robust work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Board */}
      <section className="section section-gray">
        <div className="container">
          <div className="rounded-container-xl-dark" style={{ position: 'relative' }}>
            <div className="text-center mb-12">
              <span className="section-label">Open Positions</span>
              <h2 className="h1">Available opportunities</h2>
              <p className="lead mx-auto mt-4">We are always looking for technical practitioners who value clean code and honest communication.</p>
            </div>

            <div className="jobs-list">
              {jobs.map((job) => (
                <div className="job-row" key={job.id}>
                  <div className="job-main-info">
                    <h3>{job.title}</h3>
                    <div className="job-meta mt-2">
                      <span className="job-meta-item"><Briefcase size={14} /> {job.type}</span>
                      <span className="job-meta-item"><MapPin size={14} /> {job.location}</span>
                    </div>
                    <p className="body-sm mt-4">{job.description}</p>
                  </div>
                  <div className="job-action">
                    <Link to="/contact" className="btn btn-outline-white">
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
