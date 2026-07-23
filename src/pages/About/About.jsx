import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Target, Award, Users, Heart, MapPin, Phone, ArrowRight, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HumanTeamSystem from '../../components/UI/HumanTeamSystem';
import './About.css';
import { team, locationChips } from '../../data/team';
import { fadeUp, staggerContainer } from '../../data/animations';

// ─── Custom Scroll Counter Component ─────────────────────────────────────────
function ScrollCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="stat-counter">
      {prefix}{count}{suffix}
    </span>
  );
}

// Stagger variant for chips
const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* ── Hero Section ── */}
      <section className="subpage-header">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>
        <div className="container">
          <span className="section-label section-label-light">About Weblogic Technologies</span>
          <h1 className="display display-light">
            Australian-owned growth strategy.<br/>Global digital execution.
          </h1>
          <p className="lead mx-auto lead-light mt-4">
            Headquartered in Sydney, Australia, Weblogic Technologies combines strategy, technology, and performance marketing to help ambitious businesses build visibility, attract customers, and scale online.
          </p>
        </div>
      </section>

      {/* ── Narrative & Location Facts ── */}
      <section className="section section-gray">
        <div className="container about-grid">
          <div className="about-content">
            <span className="section-label">Our Story & Positioning</span>
            <h2 className="h1">From Local Roots in Sydney to Global Reach</h2>
            <div className="about-description mt-6">
              <p className="body">
                Weblogic Technologies is an Australian-owned and operated digital marketing and technology agency based in Sydney, Australia. We believe true digital growth requires a connected model: high search visibility depends on clean technical code, and high-converting websites depend on clear brand strategy.
              </p>
              <p className="body mt-4">
                Today, our team directs client strategy from Sydney, collaborating with ambitious businesses across Australia, New Zealand, the United Kingdom, Canada, the United States, South Africa, and international markets.
              </p>
            </div>

            <div className="location-presence mt-8">
              <h4 className="presence-title-label">Headquarters & International Client Footprint</h4>
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
              <img src="/sydney_office_about.png" alt="Weblogic Technologies Sydney HQ" />
            </div>
            <div className="visual-details">
              <div className="visual-title-row">
                <MapPin size={18} className="text-secondary" />
                <div>
                  <h4>Sydney Global Headquarters</h4>
                  <p className="body-xs">Sydney, New South Wales, Australia 🇦🇺</p>
                </div>
              </div>
              
              <hr className="visual-divider" />
              
              <ul className="visual-details-list">
                <li>
                  <span className="detail-name">Capabilities</span>
                  <span className="detail-value">Web Design, SEO, PPC Ads, Social, Content</span>
                </li>
                <li>
                  <span className="detail-name">Headquarters</span>
                  <span className="detail-value">Sydney, Australia (Australian Owned & Operated)</span>
                </li>
                <li>
                  <span className="detail-name">Markets Served</span>
                  <span className="detail-value">Australia, NZ, UK, Canada, USA, South Africa</span>
                </li>
              </ul>

              <hr className="visual-divider" />

              <div className="visual-actions">
                <a href="mailto:hello@weblogics.com.au" className="visual-phone-btn">
                  <Mail size={14} /> hello@weblogics.com.au
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
            <div className="stat-number-large"><ScrollCounter end={40} suffix="+" /></div>
            <div className="stat-description">Verified Client Reviews</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><ScrollCounter end={7} suffix="" /></div>
            <div className="stat-description">Global Markets Served</div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section section-white">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="mv-grid">
              <motion.div 
                className="mv-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mv-icon"><Target size={28} /></div>
                <h3 className="h2">Our Mission</h3>
                <p className="body mt-4">
                  To empower businesses with transparent, high-performing websites, search authority, and revenue-focused marketing strategies that deliver measurable growth.
                </p>
              </motion.div>

              <motion.div 
                className="mv-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="mv-icon"><Award size={28} /></div>
                <h3 className="h2">Our Vision</h3>
                <p className="body mt-4">
                  To be the most trusted Australian-owned digital growth partner for businesses expanding locally and internationally, known for accountability, clarity, and real outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Human Team System Section ── */}
      <section className="section section-gray">
        <div className="container">
          <HumanTeamSystem />
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="rounded-container-xl" style={{ position: 'relative' }}>
            <div className="text-center">
              <span className="section-label">Our Core Values</span>
              <h2 className="h1 mt-2">Principles that guide every partnership</h2>
            </div>

            <motion.div 
              className="values-grid mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              <motion.div className="value-card-studio" variants={fadeUp}>
                <div className="value-icon"><ShieldCheck size={24} /></div>
                <h4 className="h3">Trust & Transparency</h4>
                <p className="body-sm mt-2">Clear communication, honest reporting, and full account ownership. No hidden fees or locked IP traps.</p>
              </motion.div>

              <motion.div className="value-card-studio" variants={fadeUp}>
                <div className="value-icon"><Target size={24} /></div>
                <h4 className="h3">Measurable Growth</h4>
                <p className="body-sm mt-2">We measure success by commercial metrics: qualified sales leads, organic traffic rank, and ROAS — not vanity clicks.</p>
              </motion.div>

              <motion.div className="value-card-studio" variants={fadeUp}>
                <div className="value-icon"><Users size={24} /></div>
                <h4 className="h3">Personal Support</h4>
                <p className="body-sm mt-2">You collaborate directly with senior specialists who understand your business goals and market dynamics.</p>
              </motion.div>

              <motion.div className="value-card-studio" variants={fadeUp}>
                <div className="value-icon"><Heart size={24} /></div>
                <h4 className="h3">Ownership & Accountability</h4>
                <p className="body-sm mt-2">We build custom clean websites and marketing engines. You own 100% of your source code, design assets, and ad accounts.</p>
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
                <h2>Ready to turn your digital presence into a growth channel?</h2>
                <p>Let me know your business goals and we will map out a customized website design, search, and advertising strategy.</p>
                <div className="cta-box-actions">
                  <Link to="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
                  <Link to="/contact" className="btn btn-outline-white btn-lg">Send an Inquiry</Link>
                </div>
              </div>

              <div className="cta-contact-card-premium">
                <h3>Sydney Headquarters 🇦🇺</h3>
                <div className="cta-info-item">
                  <Mail size={16} />
                  <a href="mailto:hello@weblogics.com.au">hello@weblogics.com.au</a>
                </div>
                <div className="cta-info-item">
                  <Globe size={16} />
                  <a href="https://weblogics.com.au/" target="_blank" rel="noreferrer">https://weblogics.com.au/</a>
                </div>
                <div className="cta-info-item">
                  <MapPin size={16} />
                  <span>Sydney, New South Wales, Australia<br />Australian Owned & Operated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
