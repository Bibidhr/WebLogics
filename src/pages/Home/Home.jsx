import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

// ─── Custom Animated Scroll Counter ──────────────────────────────────────────
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

// ─── Framer Motion Motion Primitives ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const testimonials = [
  {
    quote: "Weblogics restructured our entire organic lead flow. The new website is clean, looks incredibly professional, and ranks at the top of Google for our installation categories. The leads we receive now are high-value and direct.",
    author: "David Vance",
    role: "Director, Premium Garage Doors"
  },
  {
    quote: "As an e-commerce brand, speed and reliable tracking are everything. The custom storefront Weblogics developed loads instantly, and their paid search campaigns have delivered a steady, profitable return month-over-month.",
    author: "Priya Sharma",
    role: "Founder, Dhaage Sarees"
  }
];

export default function Home() {
  const [activeTesti, setActiveTesti] = useState(0);

  // Fallback image helper
  const handleImgError = (e) => {
    e.target.src = '/client_preview_1.png';
  };

  // Reusable 3D mouse tilt handler
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = -(y / (rect.height / 2)) * 6; // max 6 degrees X
    const ry = (x / (rect.width / 2)) * 6;  // max 6 degrees Y
    el.style.setProperty('--rx', rx.toFixed(2));
    el.style.setProperty('--ry', ry.toFixed(2));
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty('--rx', '0');
    el.style.setProperty('--ry', '0');
  };

  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="hero-subtitle">
              Based in North Sydney, Serving Ambition
            </motion.div>
            <motion.h1 variants={fadeUp} className="display">
              Bespoke digital growth for <em>established</em> businesses.
            </motion.h1>
            <motion.p variants={fadeUp} className="body mt-4">
              We design and build custom web applications, optimize search visibility, and engineer high-ROI paid media campaigns. Driven by transparency, backed by experience, and focused on business value.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Free Strategy Session <ArrowRight size={16} />
              </Link>
              <a href="tel:+61290666555" className="hero-phone">
                <Phone size={18} /> +61 2 9066 6555
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero-image-wrap">
              <img 
                src="/portfolio_garage.png" 
                alt="Premium Garage Doors Website Preview" 
                onError={handleImgError}
              />
            </div>
            <div className="hero-caption">
              Featured Project: Digital Strategy & Custom Platform for Premium Garage Doors, Australia
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Logos section (Marquee) ── */}
      <section className="logos-section">
        <div className="container">
          <h2 className="logos-title">Collaborating with Ambitious Brands</h2>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12" style={{ paddingRight: '3rem' }}>
                  <div className="logo-item">PREMIUM GARAGE DOORS</div>
                  <div className="logo-item">DHAAGE SAREES</div>
                  <div className="logo-item">MAGS</div>
                  <div className="logo-item">CITY SECURITY SERVICES</div>
                  <div className="logo-item">SLEEPY CLASSES IAS</div>
                  <div className="logo-item">AESTHETIC ART PRODUCTS</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes / Stats Section ── */}
      <section className="outcomes-section">
        <div className="container outcomes-grid">
          <div className="outcome-card">
            <h3 className="stat-number text-navy">
              <ScrollCounter end={12} suffix=" Years" />
            </h3>
            <h4>In Business</h4>
            <p>Building high-performance digital platforms and organic traffic frameworks for Australian enterprises.</p>
          </div>
          <div className="outcome-card">
            <h3 className="stat-number text-navy">
              <ScrollCounter end={22} suffix=" Specialists" />
            </h3>
            <h4>Sydney HQ & Global Teams</h4>
            <p>A unified team of web developers, SEO strategists, and copywriters delivering round-the-clock technical support.</p>
          </div>
          <div className="outcome-card">
            <h3 className="stat-number text-navy">
              <ScrollCounter end={180} prefix="" suffix="+" />
            </h3>
            <h4>Bespoke Projects</h4>
            <p>From custom enterprise web systems to highly optimized growth marketing campaigns that drive client acquisition.</p>
          </div>
        </div>
      </section>

      {/* ── Featured Work Section ── */}
      <section className="featured-section">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="h1">Real outcomes for real clients</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline d-mobile-none">View All Work</Link>
          </div>

          <div className="featured-grid">
            {/* Case Study 1 */}
            <motion.div 
              className="featured-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div className="featured-img-wrap zoom-wrap">
                <img 
                  src="/portfolio_garage.png" 
                  alt="Premium Garage Doors website preview" 
                  onError={handleImgError}
                />
              </div>
              <div className="featured-info">
                <div className="featured-meta">
                  <span className="tag-red tag">Australia 🇦🇺</span>
                  <span className="text-muted">Manufacturing & SEO</span>
                </div>
                <h3 className="h3">Premium Garage Doors</h3>
                <p>We designed a custom web presence and optimized local search terms to capture high-value garage installation queries across Victoria.</p>
                <div className="featured-result">
                  <span>Measured Outcome</span>
                  <strong>+142% Victoria Traffic</strong>
                </div>
                <Link to="/portfolio" className="featured-link">
                  View Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              className="featured-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div className="featured-img-wrap zoom-wrap">
                <img 
                  src="/portfolio_sarees.png" 
                  alt="Dhaage Sarees storefront preview" 
                  onError={handleImgError}
                />
              </div>
              <div className="featured-info">
                <div className="featured-meta">
                  <span className="tag-red tag">India 🇮🇳</span>
                  <span className="text-muted">Shopify & Paid Ads</span>
                </div>
                <h3 className="h3">Dhaage Sarees</h3>
                <p>Built an optimized Shopify storefront, configured custom conversion triggers, and launched high-ROI search and social ads.</p>
                <div className="featured-result">
                  <span>Measured Outcome</span>
                  <strong>4.8x ROAS Average</strong>
                </div>
                <Link to="/portfolio" className="featured-link">
                  View Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div 
              className="featured-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div className="featured-img-wrap zoom-wrap">
                <img 
                  src="/portfolio_mags.png" 
                  alt="MAGS Shopify Storefront" 
                  onError={handleImgError}
                />
              </div>
              <div className="featured-info">
                <div className="featured-meta">
                  <span className="tag-red tag">India 🇮🇳</span>
                  <span className="text-muted">Shopify & SEO</span>
                </div>
                <h3 className="h3">MAGS</h3>
                <p>Designed a clean, modern Shopify storefront highlighting sustainable viscose clothing and traditional fashion apparel.</p>
                <div className="featured-result">
                  <span>Measured Outcome</span>
                  <strong>+88% Organic Impressions</strong>
                </div>
                <Link to="/portfolio" className="featured-link">
                  View Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Capabilities ── */}
      <section className="home-services-section">
        <div className="container">
          <span className="section-label">Capabilities</span>
          <h2 className="h1">Bespoke technical solutions for business expansion</h2>
          
          <div className="services-list-container">
            {/* Service 1 */}
            <motion.div 
              className="service-item-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div className="service-row-title">
                <h3>Web Design & Development</h3>
              </div>
              <div className="service-row-desc">
                <p>We build robust, high-performance websites and web applications tailored to security, speed, and clean user experience. No templates. Every site is built custom using modern developer workflows.</p>
                <div className="service-row-bullets">
                  <div className="service-bullet"><CheckCircle2 size={16} /> Custom React & Headless Frameworks</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> Sub-Second Loading Speed Optimization</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> Enterprise Security & Clean Architecture</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> E-Commerce Custom Integrations</div>
                </div>
                <Link to="/services" className="featured-link mt-6">View Web Services <ArrowRight size={14} /></Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              className="service-item-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div className="service-row-title">
                <h3>Search Engine Optimization (SEO)</h3>
              </div>
              <div className="service-row-desc">
                <p>We target high-intent organic search terms rather than simple traffic volume. Our strategies prioritize technical crawls, editorial copywriting, and robust local authority to drive actual lead flow.</p>
                <div className="service-row-bullets">
                  <div className="service-bullet"><CheckCircle2 size={16} /> Technical Site Architecture Audits</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> In-Depth Keyword Commercial Analysis</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> High-End Content Editorial Writing</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> Sydney & National Brand Positioning</div>
                </div>
                <Link to="/services" className="featured-link mt-6">View SEO Services <ArrowRight size={14} /></Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              className="service-item-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div className="service-row-title">
                <h3>Paid Media & Google Ads</h3>
              </div>
              <div className="service-row-desc">
                <p>We manage PPC and paid social spend with strict budget efficiency and ROAS alignment. Every dollar is tracked directly through advanced analytics conversion models.</p>
                <div className="service-row-bullets">
                  <div className="service-bullet"><CheckCircle2 size={16} /> Google Search & Display PPC Campaigns</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> Social Media Ad Spend (Meta & LinkedIn)</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> High-Converting Landing Page Design</div>
                  <div className="service-bullet"><CheckCircle2 size={16} /> Clear, Honest Weekly ROI Attribution</div>
                </div>
                <Link to="/services" className="featured-link mt-6">View Paid Campaigns <ArrowRight size={14} /></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sydney Office & Team Section ── */}
      <section className="home-team-section">
        <div className="container team-grid">
          <motion.div 
            className="team-image-wrap"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/team_photo.png" alt="Weblogics Team North Sydney" />
          </motion.div>
          <motion.div 
            className="team-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
          >
            <span className="section-label">Sydney Headquarters</span>
            <h2 className="h2">A genuine team committed to your growth</h2>
            <p className="body">
              Operating from our main office at 100 Walker Street, North Sydney, Weblogics pairs senior local strategy with experienced global delivery networks. Our clients work directly with senior consultants who understand the Australian market landscape.
            </p>
            <p className="body mt-4">
              We stand against abstract visual tricks, hidden statistics, and generic AI templates. Every proposal we produce includes a detailed breakdown of resources, verified timeline deliverables, and direct access to the developers and search specialists executing the work.
            </p>
            <Link to="/about" className="btn btn-outline mt-6">Learn About Our Team</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Spotlight (Premium dot animation) ── */}
      <section className="home-testimonials-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Client Voices</span>
            <h2 className="h1">Trusted by business owners and directors</h2>
          </div>

          <div className="testimonial-spotlight-wrapper">
            <div className="quote-icon">“</div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTesti} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                transition={{ duration: 0.4 }} 
                className="testimonial-slide"
              >
                <p className="testimonial-body">
                  "{testimonials[activeTesti].quote}"
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>{testimonials[activeTesti].author}</strong>
                    <span>{testimonials[activeTesti].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-controls">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`testimonial-dot ${activeTesti === index ? 'active' : ''}`}
                  onClick={() => setActiveTesti(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="home-cta-section">
        <div className="container">
          <h2>Let's build a reliable partner channel.</h2>
          <p className="lead mx-auto text-white opacity-80">
            Partner with an established Sydney team focused on technical precision and verified results.
          </p>
          <div className="cta-actions mt-8">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Strategy Session
            </Link>
            <a href="tel:+61290666555" className="cta-phone">
              <Phone size={20} /> +61 2 9066 6555
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
