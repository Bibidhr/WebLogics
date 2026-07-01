import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Target, Award, Users, Heart, MapPin, Phone, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

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

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const locationChips = [
  { label: "Australia", flag: "🇦🇺" },
  { label: "Canada", flag: "🇨🇦" },
  { label: "USA", flag: "🇺🇸" },
  { label: "United Kingdom", flag: "🇬🇧" },
  { label: "India", flag: "🇮🇳" }
];

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  const team = [
    {
      name: "Daniel Reynolds",
      role: "Founder & Managing Director",
      initials: "DR",
      bio: "Over 15 years directing digital acquisition projects for national brands. Daniel oversees strategy and commercial growth in North Sydney."
    },
    {
      name: "Marcus Vance",
      role: "Head of Search & SEO",
      initials: "MV",
      bio: "Leading SEO strategies and technical architecture audits since 2012. Former developer focused on structural crawl optimization."
    },
    {
      name: "Sarah Lin",
      role: "Technical Director",
      initials: "SL",
      bio: "Manages the custom React and commerce engineering teams. Sarah prioritizes headless platform security and loading speeds."
    }
  ];

  return (
    <div className="about-page">
      {/* ── Hero Section ── */}
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">Weblogics Digital</span>
          <h1 className="display display-light">
            Sydney based strategy.<br/>Global execution capability.
          </h1>
          <p className="lead mx-auto lead-light mt-4">
            We build high-performance web platforms and run growth marketing channels with total transparency and data-backed outcomes.
          </p>
        </div>
      </section>

      {/* ── Narrative & Location Facts ── */}
      <section className="section section-gray">
        <div className="container about-grid">
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="h1">Fostering digital clarity since 2014</h2>
            <div className="about-description mt-6">
              <p className="body">
                Weblogics was founded in North Sydney to bridge the gap between creative agencies and technical engineering shops. We believe digital growth requires integration: high organic rankings depend directly on code optimization, and search campaigns depend on high-converting UX.
              </p>
              <p className="body mt-4">
                Today, our strategic consultants operate directly from our Walker Street headquarters, collaborating with our engineering nodes in Canada, the UK, and India to deliver round-the-clock support and active portal optimization.
              </p>
            </div>

            <div className="location-presence mt-8">
              <h4 className="presence-title-label">Countries Served & Active Operations</h4>
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
              <img src="/sydney_office_about.png" alt="Weblogics Sydney HQ Suite" />
            </div>
            <div className="visual-details">
              <div className="visual-title-row">
                <MapPin size={18} className="text-secondary" />
                <div>
                  <h4>Sydney HQ Operations</h4>
                  <p className="body-xs">Suite 1105, 100 Walker St, North Sydney</p>
                </div>
              </div>
              
              <hr className="visual-divider" />
              
              <ul className="visual-details-list">
                <li>
                  <span className="detail-name">Specialties</span>
                  <span className="detail-value">Custom Dev, SEO, PPC & Analytics</span>
                </li>
                <li>
                  <span className="detail-name">Global Offices</span>
                  <span className="detail-value">Sydney, London, Toronto, Auckland, Mumbai</span>
                </li>
                <li>
                  <span className="detail-name">Coverage Zone</span>
                  <span className="detail-value">APAC, North America, EMEA</span>
                </li>
              </ul>

              <hr className="visual-divider" />

              <div className="visual-actions">
                <a href="tel:+61290666555" className="visual-phone-btn">
                  <Phone size={14} /> +61 2 9066 6555
                </a>
                <Link to="/contact" className="visual-cta-btn">
                  Book Strategy Session <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Company Statistics (Moved from about-content) ── */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={12} suffix="+" /></div>
            <div className="stat-description">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={180} suffix="+" /></div>
            <div className="stat-description">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={22} suffix="" /></div>
            <div className="stat-description">Team Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={5} suffix="" /></div>
            <div className="stat-description">Countries Served</div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section section-white">
        <div className="container mv-grid">
          <motion.div 
            className="mv-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
          >
            <div className="mv-icon"><Target size={28} /></div>
            <h3 className="h2">Our Mission</h3>
            <p className="body mt-4">
              To engineer measurable, transparent growth strategies. We eliminate the guesswork by anchoring our campaigns in clean data model attribution, robust technical development, and direct weekly communication.
            </p>
          </motion.div>
          
          <motion.div 
            className="mv-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
          >
            <div className="mv-icon"><Award size={28} /></div>
            <h3 className="h2">Our Vision</h3>
            <p className="body mt-4">
              To remain Australia’s most trusted technical growth partner. We choose quality partnerships over client volume, ensuring every brand we collaborate with receives dedicated strategy from a senior principal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Team Bios Section ── */}
      <section className="team-bios-section">
        <div className="container">
          <span className="section-label">Leadership</span>
          <h2 className="h1">Direct access to search & development experts</h2>
          <p className="lead mt-4">We do not pass our clients off to junior account managers. You work directly with the practitioners executing your strategy.</p>
          
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
      </section>

      {/* ── Values ── */}
      <section className="section bg-white">
        <div className="container">
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
              <h4 className="h3">Verified Data</h4>
              <p className="body-sm mt-2">Every campaign metric is pulled directly from official Google Analytics and ad managers. No edited charts.</p>
            </motion.div>
            
            <motion.div className="value-card" variants={fadeUp}>
              <div className="value-icon"><Users size={24} /></div>
              <h4 className="h3">Senior Attention</h4>
              <p className="body-sm mt-2">All client accounts are managed directly by a specialist with a minimum of 7 years industry experience.</p>
            </motion.div>
            
            <motion.div className="value-card" variants={fadeUp}>
              <div className="value-icon"><Heart size={24} /></div>
              <h4 className="h3">No Lock-In Contracts</h4>
              <p className="body-sm mt-2">We earn our partnerships month-to-month based on clear deliverables, communication, and business ROI.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Conversion Pre-Footer CTA Section ── */}
      <section className="prefooter-cta-section">
        <div className="container">
          <div className="cta-box-premium">
            <div className="cta-box-grid">
              <div className="cta-box-content">
                <h2>Ready to build a digital system that converts?</h2>
                <p>Let's map out a customized search, development, and conversion strategy to scale your business queries.</p>
                <div className="cta-box-actions">
                  <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Consultation</Link>
                  <Link to="/contact" className="btn btn-outline-white btn-lg">Send an Inquiry</Link>
                </div>
              </div>

              <div className="cta-contact-card-premium">
                <h3>Contact North Sydney</h3>
                <div className="cta-info-item">
                  <Phone size={16} />
                  <a href="tel:+61290666555">+61 2 9066 6555</a>
                </div>
                <div className="cta-info-item">
                  <Mail size={16} />
                  <a href="mailto:info@weblogics.com.au">info@weblogics.com.au</a>
                </div>
                <div className="cta-info-item">
                  <MapPin size={16} />
                  <span>Suite 1105, 100 Walker Street,<br />North Sydney NSW 2061</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
