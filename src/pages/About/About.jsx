import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Target, Award, Users, Heart, MapPin, Phone, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';
import { team, locationChips } from '../../data/team';
import { fadeUp, staggerContainer } from '../../data/animations';

// ─── Custom Scroll Counter Component ─────────────────────────────────────────
function ScrollCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const progressEased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
          setCount(Math.floor(progressEased * end));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <div className="about-page">
      {/* ── Hero Section ── */}
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Web-Logics Studio</span>
          <h1 className="display display-light">
            Kathmandu based strategy.<br/>Global execution excellence.
          </h1>
          <p className="lead mx-auto lead-light mt-4">
            We build high-performance digital products and run growth channels with technical precision, radical transparency, and verified business outcomes.
          </p>
        </div>
      </section>

      {/* ── Narrative & Location Facts ── */}
      <section className="section section-gray">
        <div className="container about-grid">
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="h1">Fostering digital clarity & engineering excellence since 2014</h2>
            <div className="about-description mt-6">
              <p className="body">
                Web-Logics was founded in Kathmandu to bridge the gap between aesthetic design studios and technical software engineering shops. We believe true digital growth requires seamless integration: high search visibility depends directly on code architecture, and high-converting platforms depend on deep UX strategy.
              </p>
              <p className="body mt-4">
                Today, our principal strategists operate directly from our Heritage Plaza studio in Kathmandu, collaborating with client partners in Australia, North America, Europe, and Asia-Pacific to deliver round-the-clock product engineering and continuous growth optimization.
              </p>
            </div>

            <div className="location-presence mt-8">
              <h4 className="presence-title-label">Active Operations & Client Footprint</h4>
              <motion.div 
                className="location-chips-container mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {locationChips.map((chip, idx) => (
                  <motion.span key={idx} className="location-chip" variants={chipVariants}>
                    <span className="chip-flag">{chip.flag}</span>
                    <span className="chip-label">{chip.label}</span>
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="visual-image-frame">
              <div className="image-overlap-accent"></div>
              <img src="/sydney_office_about.png" alt="Web-Logics Kathmandu HQ Studio" />
            </div>
            <div className="visual-details">
              <div className="visual-title-row">
                <MapPin size={18} className="text-secondary" />
                <div>
                  <h4>Kathmandu HQ Operations</h4>
                  <p className="body-xs">Level 4, Heritage Plaza, Kamaladi, Kathmandu</p>
                </div>
              </div>
              
              <hr className="visual-divider" />
              
              <ul className="visual-details-list">
                <li>
                  <span className="detail-name">Capabilities</span>
                  <span className="detail-value">Custom React/Next.js, Branding, SEO & PPC</span>
                </li>
                <li>
                  <span className="detail-name">Delivery Nodes</span>
                  <span className="detail-value">Kathmandu, Sydney, London, Toronto</span>
                </li>
                <li>
                  <span className="detail-name">Coverage Zone</span>
                  <span className="detail-value">APAC, EMEA, North America</span>
                </li>
              </ul>

              <hr className="visual-divider" />

              <div className="visual-actions">
                <a href="tel:+977014528900" className="visual-phone-btn">
                  <Phone size={14} /> +977 (01) 452-8900
                </a>
                <Link to="/contact" className="visual-cta-btn">
                  Start a Project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Company Statistics ── */}
      <section className="stats-section about-stats-angled">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={12} suffix="+" /></div>
            <div className="stat-description">Years Operating</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={180} suffix="+" /></div>
            <div className="stat-description">Projects Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={24} suffix="" /></div>
            <div className="stat-description">Senior Specialists</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={6} suffix="" /></div>
            <div className="stat-description">Global Markets</div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section section-white">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="mv-grid">
              <motion.div 
                className="mv-card layered-card-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
              >
                <div className="mv-icon"><Target size={28} /></div>
                <h3 className="h2">Our Mission</h3>
                <p className="body mt-4">
                  To engineer transparent, revenue-driving digital products and growth engines. We eliminate guesswork by anchoring every line of code and campaign strategy in clean data attribution, human-centric design, and active weekly communication.
                </p>
              </motion.div>
              
              <motion.div 
                className="mv-card layered-card-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
              >
                <div className="mv-icon"><Award size={28} /></div>
                <h3 className="h2">Our Vision</h3>
                <p className="body mt-4">
                  To set the benchmark for high-end digital agency execution in Nepal and Asia-Pacific. We prioritize deep, long-term partnerships over client volume, ensuring every business we collaborate with receives principal-level attention.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Bios Section ── */}
      <section className="team-bios-section section-overlap-up" style={{ zIndex: 11 }}>
        <div className="container">
          <div className="rounded-container-xl-dark" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="section-glow section-glow-accent" style={{ width: '500px', height: '500px', top: '-100px', right: '-150px' }}></div>
            <span className="section-label">Leadership</span>
            <h2 className="h1">Direct collaboration with senior directors</h2>
            <p className="lead mt-4">We do not pass our clients off to junior account handlers. You work directly with the senior strategists and tech directors crafting your solution.</p>
            
            <motion.div 
              className="team-bios-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              {team.map((member, i) => (
                <motion.div className="team-bio-card" key={i} variants={fadeUp}>
                  <div className="team-bio-photo">
                    {member.initials}
                  </div>
                  <div className="team-bio-info">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <p>{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="text-center">
              <span className="section-label">Our Philosophy</span>
              <h2 className="h1">The principles behind our client relationships</h2>
            </div>
            
            <motion.div 
              className="values-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              <motion.div className="value-card" variants={fadeUp}>
                <div className="value-icon"><ShieldCheck size={24} /></div>
                <h4 className="h3">Empirical Attribution</h4>
                <p className="body-sm mt-2">Every metric is pulled directly from verified analytics and campaign logs. Zero vanity padding or inflated reports.</p>
              </motion.div>
              
              <motion.div className="value-card" variants={fadeUp}>
                <div className="value-icon"><Users size={24} /></div>
                <h4 className="h3">Principal Access</h4>
                <p className="body-sm mt-2">All client initiatives are led directly by senior directors with deep domain expertise across product engineering & search.</p>
              </motion.div>
              
              <motion.div className="value-card" variants={fadeUp}>
                <div className="value-icon"><Heart size={24} /></div>
                <h4 className="h3">Ownership & Freedom</h4>
                <p className="body-sm mt-2">We build custom clean code bases. You own 100% of your source code, design systems, and intellectual assets without lock-in traps.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Conversion Pre-Footer CTA Section ── */}
      <section className="prefooter-cta-section">
        <div className="container">
          <div className="cta-box-premium">
            <div className="cta-box-grid">
              <div className="cta-box-content">
                <h2>Ready to build a digital system that converts?</h2>
                <p>Let's map out a customized product engineering, design, and growth strategy for your business.</p>
                <div className="cta-box-actions">
                  <Link to="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
                  <Link to="/contact" className="btn btn-outline-white btn-lg">Send an Inquiry</Link>
                </div>
              </div>

              <div className="cta-contact-card-premium">
                <h3>Kathmandu Headquarters</h3>
                <div className="cta-info-item">
                  <Phone size={16} />
                  <a href="tel:+977014528900">+977 (01) 452-8900</a>
                </div>
                <div className="cta-info-item">
                  <Mail size={16} />
                  <a href="mailto:hello@weblogics.com.np">hello@weblogics.com.np</a>
                </div>
                <div className="cta-info-item">
                  <MapPin size={16} />
                  <span>Level 4, Heritage Plaza,<br />Kamaladi, Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
