import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Target, Award, Users, Heart } from 'lucide-react';
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
      <section className="about-hero text-center">
        <div className="container">
          <span className="section-label" style={{color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Weblogics Digital</span>
          <h1 className="display text-white">
            Sydney based strategy.<br/>Global execution capability.
          </h1>
          <p className="lead mx-auto text-white opacity-80 mt-4">
            We build high-performance web platforms and run growth marketing channels with total transparency and data-backed outcomes.
          </p>
        </div>
      </section>

      {/* ── Narrative & Location Facts ── */}
      <section className="section bg-white">
        <div className="container about-grid">
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="h1">Fostering digital clarity since 2014</h2>
            <p className="body mt-4">
              Weblogics was founded in North Sydney to bridge the gap between creative marketing agencies and technical engineering shops. We believe that digital growth cannot succeed in a silo; high rankings require technical page speed, and paid media requires conversion-optimized UX.
            </p>
            <p className="body mt-4">
              Today, our senior strategic consultants work directly with clients from our Walker Street office, while our globally distributed teams in New Zealand, the United Kingdom, India, and Canada provide 24/7 development support and continuous campaign optimization. This hybrid model allows us to deliver enterprise-grade execution at boutique agency value.
            </p>
            
            <div className="stats-row mt-8">
              <div>
                <h3><ScrollCounter end={12} suffix=" Years" /></h3>
                <p className="body-sm">Active Operation</p>
              </div>
              <div>
                <h3><ScrollCounter end={22} suffix=" Experts" /></h3>
                <p className="body-sm">In-House Staff</p>
              </div>
              <div>
                <h3><ScrollCounter end={5} suffix=" Countries" /></h3>
                <p className="body-sm">Global Footprint</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <h3 className="h3">Sydney HQ Operations</h3>
            <p className="body-sm mb-6">Our central offices are equipped to handle end-to-end design, search consulting, and engineering oversight.</p>
            <ul>
              <li>
                <span>Address</span>
                <span>Suite 1105, 100 Walker St, North Sydney</span>
              </li>
              <li>
                <span>Phone Support</span>
                <span>+61 2 9066 6555</span>
              </li>
              <li>
                <span>Primary Focus</span>
                <span>Custom Dev, SEO, PPC & Analytics</span>
              </li>
              <li>
                <span>Global Nodes</span>
                <span>Sydney, London, Toronto, Auckland, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section bg-warm">
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

      {/* ── CTA ── */}
      <section className="section bg-dark text-center">
        <div className="container">
          <h2 className="h1 text-white">Let's build a reliable partner channel.</h2>
          <p className="lead mx-auto text-white opacity-80 mt-4">
            Connect with our team in North Sydney to discuss custom web engineering or ranking search terms.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Briefing Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
