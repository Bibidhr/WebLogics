import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Phone,
  Search,
  Share2,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Award,
  Layers,
  Cpu,
  Globe2,
  ChevronDown,
  ChevronUp,
  Check,
  ShieldCheck,
  Handshake,
  Zap,
  Compass,
  Palette,
  Rocket,
  LifeBuoy
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';
import './Home.css';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const logos = [
  'Premium Garage Doors',
  'Instant Parcel Taxi',
  'Dhaage Sarees',
  'Humble Roofing',
  'Total Trucking Solutions',
  'Yellow Maxi Cab',
  'USA Moving Corporation',
  'MAGS',
  'Apex Logistics',
  'Veloce Transport',
  'Vanguard Retail'
];

const projects = [
  {
    title: 'Premium Garage Doors',
    category: 'Lead Generation Website',
    industry: 'Construction',
    country: 'Australia',
    service: 'Website Development + SEO',
    image: '/portfolio_garage.png',
    result: '+142% Victoria traffic',
    description: 'Custom website rebuild and local search campaign for garage door installation enquiries.'
  },
  {
    title: 'Instant Parcel Taxi',
    category: 'Booking Experience',
    industry: 'Logistics',
    country: 'United Kingdom',
    service: 'Booking Platform + Google Ads',
    image: '/client_preview_3.png',
    result: '-34% cost per acquisition',
    description: 'Courier booking experience and paid search campaign structure built around urgent parcel intent.'
  },
  {
    title: 'Dhaage Sarees',
    category: 'Ecommerce Growth',
    industry: 'Ecommerce',
    country: 'India',
    service: 'Ecommerce + Paid Social',
    image: '/portfolio_sarees.png',
    result: '4.8x ROAS average',
    description: 'Shopify storefront, conversion tracking, and acquisition campaigns for a global fashion brand.'
  },
  {
    title: 'Humble Roofing',
    category: 'Local Services',
    industry: 'Construction',
    country: 'Canada',
    service: 'Website Development + SEO',
    image: '/client_preview_2.png',
    result: 'Lead-focused service pages',
    description: 'Service-led website structure designed to turn local roofing traffic into high-value quote requests.'
  }
];

const testimonials = [
  {
    photo: '/team_photo.png',
    quote: 'Weblogics restructured our entire organic lead flow. The new website is clean, looks incredibly professional, and ranks at the top of Google for our installation categories.',
    name: 'David Vance',
    company: 'Premium Garage Doors',
    industry: 'Construction',
    projectType: 'Lead Generation Website',
    country: 'Australia',
    rating: 5,
    results: ['+142% organic traffic', '+68% qualified enquiries', 'Launch completed in 6 weeks']
  },
  {
    photo: '/client_preview_1.png',
    quote: 'As an e-commerce brand, speed and reliable tracking are everything. The custom storefront Weblogics developed loads instantly, and their paid campaigns deliver steady returns.',
    name: 'Priya Sharma',
    company: 'Dhaage Sarees',
    industry: 'Ecommerce',
    projectType: 'Shopify Storefront + Paid Campaigns',
    country: 'India',
    rating: 5,
    results: ['4.8x average ROAS', 'Faster checkout experience', 'Stronger repeat purchase flow']
  }
];

const services = [
  {
    title: 'Website Development',
    path: '/services/web-development',
    Icon: Code2,
    description: 'Custom websites and application frontends engineered for trust, speed, and lead conversion.',
    benefits: ['Conversion-first page layout', 'Sub-second react frameworks', 'Tailored APIs & CRM sync']
  },
  {
    title: 'SEO & Search Engine Marketing',
    path: '/services/seo',
    Icon: Search,
    description: 'Technical and content-led search work focused on commercial terms that produce high-value enquiries.',
    benefits: ['Technical code crawling audits', 'Intent-led services pages', 'Sydney/Local search authority']
  },
  {
    title: 'Google Ads & Paid PPC',
    path: '/services/google-ads',
    Icon: Target,
    description: 'Paid search campaigns structured around search relevance, keyword attribution, and custom landing pages.',
    benefits: ['Search campaigns auditing', 'Strict keyword budget control', 'Attribution reports weekly']
  },
  {
    title: 'Social Media Advertising',
    path: '/services/social-media-marketing',
    Icon: Share2,
    description: 'Paid social funnels structured to build brand trust, position authority, and capture warm leads.',
    benefits: ['Bespoke ad creative templates', 'Professional scriptwriting', 'Audience retargeting audits']
  },
  {
    title: 'Ecommerce Storefronts',
    path: '/services/ecommerce',
    Icon: ShoppingBag,
    description: 'Shopify Plus storefront setups designed to reduce friction and improve purchase confidence.',
    benefits: ['Custom cart workflow logic', 'Headless storefront builds', 'Logistics API sync auditing']
  }
];

const differentiators = [
  { title: 'Performance', text: 'Fast-loading builds, conversion-ready UX, and measurable lift from day one.', stat: '98/100+', icon: BarChart3 },
  { title: 'Scalability', text: 'Modular systems that expand with your product, team, and market growth.', stat: 'Enterprise-ready', icon: Layers },
  { title: 'Communication', text: 'Direct access to senior strategists with clear weekly progress updates.', stat: 'Weekly cadence', icon: Mail },
  { title: 'Transparency', text: 'Shared roadmaps, milestone visibility, and no hidden scope surprises.', stat: '100% visibility', icon: ShieldCheck },
  { title: 'Long-term support', text: 'Ongoing optimization, iteration, and strategic guidance beyond launch.', stat: 'Post-launch care', icon: Handshake },
  { title: 'Quality assurance', text: 'Structured QA, testing, and launch checks before anything goes live.', stat: '3-stage review', icon: Zap }
];

const processSteps = [
  { step: '01', title: 'Discovery', text: 'We align on goals, audience, scope, and the outcomes that matter most.', icon: Compass },
  { step: '02', title: 'Research', text: 'We audit the market, competitors, and product positioning to sharpen the approach.', icon: Search },
  { step: '03', title: 'Design', text: 'We shape the experience, information structure, and visual system with clarity in mind.', icon: Palette },
  { step: '04', title: 'Development', text: 'We build scalable, maintainable solutions with performance and flexibility front and center.', icon: Code2 },
  { step: '05', title: 'Testing', text: 'We validate quality, responsiveness, accessibility, and launch readiness before go-live.', icon: ShieldCheck },
  { step: '06', title: 'Launch', text: 'We deploy with precision and ensure the rollout is smooth, measured, and controlled.', icon: Rocket },
  { step: '07', title: 'Support', text: 'We stay close post-launch with iteration, optimization, and ongoing partnership.', icon: LifeBuoy }
];

const techStack = [
  { name: 'React', category: 'Frontend', desc: 'UI Development', logo: 'RE' },
  { name: 'Next.js', category: 'Frontend', desc: 'Server Rendering', logo: 'N' },
  { name: 'Shopify Plus', category: 'Platforms', desc: 'Ecommerce Engine', logo: 'S' },
  { name: 'Node.js', category: 'Backend', desc: 'Secure APIs', logo: 'JS' },
  { name: 'Google Ads', category: 'Advertising', desc: 'Paid PPC Search', logo: 'G' },
  { name: 'Google Analytics 4', category: 'Advertising', desc: 'Traffic Attribution', logo: 'GA' },
  { name: 'Vercel', category: 'Platforms', desc: 'Cloud Deployment', logo: 'V' },
  { name: 'Tailwind CSS', category: 'Frontend', desc: 'Utility Styling', logo: 'TW' },
  { name: 'Meta Pixel & API', category: 'Advertising', desc: 'Social Conversion', logo: 'M' },
  { name: 'Webflow', category: 'Platforms', desc: 'Rapid CMS Websites', logo: 'WF' }
];

const industries = [
  { title: 'Manufacturing & Construction', text: 'Local installation and building manufacturers requiring quote funnels.', icon: Cpu, metric: '+142% Leads' },
  { title: 'Logistics & Transport', text: 'Courier services and fleet transport operations requiring instant booking forms.', icon: Globe2, metric: '-34% Cost-per-lead' },
  { title: 'E-Commerce & Retail', text: 'Brands looking to upgrade checkout speed, tracking, and purchase flow.', icon: ShoppingBag, metric: '4.8x Avg ROAS' },
  { title: 'B2B SaaS & Tech', text: 'Software companies looking to build corporate credibility and generate demos.', icon: Layers, metric: 'Enterprise-grade' },
  { title: 'Health & Professional Services', text: 'Private medical systems and consultants seeking patient bookings.', icon: Award, metric: '+88% Bookings' }
];

const faqs = [
  { question: 'What services does Weblogics provide?', answer: 'We offer a complete suite of enterprise growth services, including custom React/Next.js and Shopify development, technical and content-led SEO, Google Ads search campaigns, paid social advertising funnels, and brand position strategy.' },
  { question: 'How do you charge for custom website projects?', answer: 'Projects are structured around transparent milestone-based deliverables. We do not tie you to recurring template bills; you own your custom codebase fully upon delivery.' },
  { question: 'Do you work with clients outside of Australia?', answer: 'Yes. We serve established businesses and brands internationally across Australia, the United Kingdom, Canada, the United States, and India.' },
  { question: 'How long does a typical digital agency project take?', answer: 'A custom landing page or SEO structure typically takes 4–6 weeks from discovery to launch, while complex React applications or Shopify Plus migrations average 8–12 weeks.' }
];

function SectionReveal({ children, className = '', ...props }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      {...props}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ end, suffix = '', prefix = '', duration = 1200 }) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;

      let startTime = null;
      const tick = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, { threshold: 0.2 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, end, reduceMotion]);

  return <span ref={ref}>{prefix}{reduceMotion ? end : value}{suffix}</span>;
}

function Stars({ rating }) {
  return (
    <div className="rating-row" aria-label={`${rating} star rating`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} size={15} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedTechTab, setSelectedTechTab] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);
  const reduceMotion = useReducedMotion();
  const heroRevealRef = useRevealOnScroll();
  const processRevealRef = useRevealOnScroll();
  const statsRevealRef = useRevealOnScroll();

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--pointer-x', `${x}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${y}%`);
  };

  useEffect(() => {
    if (reduceMotion) return undefined;

    const autoAdvance = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(autoAdvance);
  }, [reduceMotion]);

  const techCategories = ['All', 'Frontend', 'Backend', 'Platforms', 'Advertising'];

  const filteredTech = useMemo(() => {
    if (selectedTechTab === 'All') return techStack;
    return techStack.filter((tech) => tech.category === selectedTechTab);
  }, [selectedTechTab]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const heroMotion = reduceMotion ? {} : { initial: 'hidden', animate: 'visible', variants: staggerContainer };

  return (
    <div className="home-page">
      {/* ── Layered Hero Section ── */}
      <section className="home-hero-section" ref={heroRevealRef}>
        <div className="hero-gradient-mesh"></div>
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <div className="hero-ambient hero-ambient-three" />
        <div className="container hero-grid">
          <motion.div className="hero-copy interactive-hover" onMouseMove={handlePointerMove} {...heroMotion}>
            <motion.div className="hero-badge" variants={fadeUp}>
              <Award size={14} /> Enterprise Digital Growth Agency
            </motion.div>
            <motion.h1 className="display display-light" variants={fadeUp}>
              Premium websites and growth systems that <em>turn attention into revenue</em>.
            </motion.h1>
            <motion.p className="hero-lead" variants={fadeUp}>
              We partner with established service businesses and global ecommerce brands to transform their digital presence into high-conversion sales pipelines.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Strategy Session <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline-white btn-lg">
                View Our Portfolio
              </Link>
            </motion.div>

            <motion.div className="hero-trust-strip" variants={fadeUp}>
              <span className="trust-label">Trusted for</span>
              <div className="trust-pills">
                <span>React & Next.js</span>
                <span>Shopify Plus</span>
                <span>Google Ads</span>
                <span>SEO-led growth</span>
              </div>
            </motion.div>
            
            <motion.div className="hero-stats-mini" variants={fadeUp}>
              <div className="stat-item">
                <div className="stat-num"><CountUp end={12} suffix="+" /></div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num"><CountUp end={180} suffix="+" /></div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-num"><CountUp end={60} suffix="+" /></div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Floating Dashboard visual */}
          <div className="hero-visual-wrapper parallax-layer" style={{ '--parallax-offset': '-10px' }}>
            {/* Primary Browser Mockup showing Dashboard Mockup Image */}
            <div className="hero-main-dashboard browser-shell">
              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
                <div className="browser-bar" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#a0aec0' }}>
                  weblogics.com.au/analytics
                </div>
              </div>
              <div className="browser-screen">
                <img src="/dashboard_mockup.png" alt="Enterprise Analytics Platform Mockup" className="hero-dashboard-img" />
              </div>
            </div>

            {/* Overlapping Secondary Glassmorphic Window showing results */}
            <div className="hero-secondary-panel browser-shell">
              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
                <div className="browser-bar" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#a0aec0' }}>
                  attribution_matrix.xlsx
                </div>
              </div>
              <div className="browser-screen">
                <img src="/interactive_results_ui.png" alt="Interactive Results UI Mockup" className="hero-results-img" />
              </div>
            </div>

            {/* Floating Code Snippet Card representing Custom Software engineering */}
            <div className="hero-floater floater-code">
              <div className="code-header">
                <div className="code-circle"></div>
                <span>app.config.ts</span>
              </div>
              <pre className="code-body">
                <code>
{`const client = Weblogics.init({
  optimize: 'conversions',
  scale: 'enterprise',
  speed: 'sub-second'
});`}
                </code>
              </pre>
            </div>

            {/* Floating Metric Badges */}
            <div className="hero-floater floater-seo">
              <BarChart3 size={20} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF' }}>180+ projects</strong>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)' }}>Completed across growth channels</span>
              </div>
            </div>

            <div className="hero-floater floater-leads">
              <div className="growth-label">
                <span>Happy clients</span>
                <span>Live</span>
              </div>
              <div className="growth-num">60+ partners</div>
              <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '82%', height: '100%', background: '#10B981' }}></div>
              </div>
            </div>

            <div className="hero-floater floater-trust">
              <div className="stars">
                <Award size={12} />
              </div>
              <span>12+ years of experience</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse-wheel"></div>
        </div>
      </section>

      {/* ── Trusted By Logo Marquee ── */}
      <section className="trusted-section">
        <div className="container">
          <div className="trusted-intro">Trusted by leading service & ecommerce brands</div>
          <div className="marquee-container">
            <div className="marquee-track">
              {logos.map((logo, idx) => (
                <span key={logo + idx} className="logo-item">
                  <span className="logo-dot"></span> {logo}
                </span>
              ))}
              {/* Duplicate for infinite marquee scroll */}
              {logos.map((logo, idx) => (
                <span key={logo + idx + '-dup'} className="logo-item">
                  <span className="logo-dot"></span> {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Glassmorphism Deck ── */}
      <section className="section services-section services-dark-theme">
        <div className="section-glow section-glow-accent" style={{ width: '600px', height: '600px', top: '-200px', right: '-200px' }}></div>
        <div className="section-glow section-glow-primary" style={{ width: '500px', height: '500px', bottom: '-150px', left: '-150px' }}></div>
        
        <div className="container-narrow">
          <div className="services-intro-row">
            <span className="section-label section-label-light">Capabilities</span>
            <h2 className="h1 h1-light">Capabilities designed to move revenue, not just traffic.</h2>
            <p>We build digital systems that strengthen brand confidence, increase qualified demand, and support long-term commercial growth.</p>
          </div>
          <div className="divider-dots"><span></span></div>

          <div className="services-feature-band">
            <div className="services-feature-copy">
              <span className="services-feature-eyebrow">From strategy to launch</span>
              <h3>One partner for the full digital growth lifecycle.</h3>
              <p>We connect strategy, build quality, and commercial performance so every engagement compounds over time instead of ending at launch.</p>
            </div>
            <div className="services-feature-points">
              <div className="service-point-card">
                <strong>Revenue-led planning</strong>
                <span>Priorities shaped by growth goals, not just delivery scope.</span>
              </div>
              <div className="service-point-card">
                <strong>Performance engineering</strong>
                <span>Fast, scalable systems built for trust and conversion.</span>
              </div>
              <div className="service-point-card">
                <strong>Strategic support</strong>
                <span>Ongoing optimization long after launch day.</span>
              </div>
            </div>
          </div>

          <div className="services-glass-grid">
            {services.map((service, index) => {
              const Icon = service.Icon;
              const isFeatured = index === 0;
              return (
                <div className={`service-glass-card${isFeatured ? ' featured-service-card' : ''} interactive-hover`} key={service.title} onMouseMove={handlePointerMove}>
                  <div className="service-card-header">
                    <div className="service-glass-icon"><Icon size={24} /></div>
                    {isFeatured && <span className="service-feature-badge">Featured</span>}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {isFeatured && (
                    <div className="service-feature-highlight">
                      <span>Business outcome</span>
                      <strong>Turn attention into qualified opportunities with a site built for trust and conversion.</strong>
                    </div>
                  )}
                  <ul className="service-glass-bullets">
                    {service.benefits.map((bullet) => (
                      <li key={bullet}><Check size={14} /> {bullet}</li>
                    ))}
                  </ul>
                  <Link to={service.path} className="service-glass-link">
                    Explore Capability <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Case Study Showcase ── */}
      <section className="section case-study-showcase">
        <div className="container">
          <div className="cs-header">
            <span className="section-label">Case Studies</span>
            <h2 className="display">Featured results, built to scale.</h2>
            <p className="cs-header-sub">Each engagement blends strategy, product thinking, and performance design into a measurable growth outcome.</p>
          </div>

          <div className="cs-stack">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                className={`cs-card ${index % 2 !== 0 ? 'cs-card-reversed' : ''}`}
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              >
                <div className="cs-card-visual">
                  <div className="cs-browser">
                    <div className="cs-browser-bar">
                      <div className="cs-browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="cs-browser-url">www.{project.title.toLowerCase().replace(/\s+/g, '')}.com.au</div>
                    </div>
                    <div className="cs-browser-viewport">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="cs-result-float">
                    <div className="cs-result-label">Key Result</div>
                    <div className="cs-result-value">{project.result}</div>
                  </div>
                </div>

                <div className="cs-card-content">
                  <motion.div className="cs-card-meta" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.08 + index * 0.08 }}>
                    <span className="cs-pill">{project.industry}</span>
                    <span className="cs-pill">{project.country}</span>
                  </motion.div>
                  <motion.h3 className="cs-card-title" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.12 + index * 0.08 }}>
                    {project.title}
                  </motion.h3>
                  <motion.div className="cs-card-category" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.16 + index * 0.08 }}>
                    {project.category}
                  </motion.div>
                  <motion.p className="cs-card-desc" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}>
                    {project.description}
                  </motion.p>

                  <motion.div className="cs-metrics-grid" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.24 + index * 0.08 }}>
                    <div className="cs-metric-card">
                      <span className="cs-metric-value">+142%</span>
                      <span className="cs-metric-label">Organic Traffic</span>
                    </div>
                    <div className="cs-metric-card">
                      <span className="cs-metric-value">+68%</span>
                      <span className="cs-metric-label">Leads</span>
                    </div>
                    <div className="cs-metric-card">
                      <span className="cs-metric-value">98</span>
                      <span className="cs-metric-label">Performance Score</span>
                    </div>
                  </motion.div>

                  <motion.div className="cs-detail-grid" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.28 + index * 0.08 }}>
                    <div>
                      <span className="cs-service-label">Services Delivered</span>
                      <p className="cs-service-value">{project.service}</p>
                    </div>
                    <div>
                      <span className="cs-service-label">Timeline</span>
                      <p className="cs-service-value">6–8 Weeks</p>
                    </div>
                  </motion.div>

                  <motion.div className="cs-tech-list" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.32 + index * 0.08 }}>
                    <span className="cs-tech-badge">React</span>
                    <span className="cs-tech-badge">SEO</span>
                    <span className="cs-tech-badge">Google Ads</span>
                    <span className="cs-tech-badge">Analytics</span>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.35, delay: 0.36 + index * 0.08 }}>
                    <Link to="/case-studies" className="btn btn-primary cs-card-link">
                      View Case Study <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cs-footer-cta">
            <p>We've delivered 180+ projects across 6 countries.</p>
            <Link to="/portfolio" className="btn btn-primary btn-lg">
              Explore All Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-us-section">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-sticky">
              <span className="section-label">Why Choose Us</span>
              <h2 className="h1">A premium delivery partner built for speed, clarity, and long-term growth.</h2>
              <p>We combine senior strategy, high-performance engineering, and disciplined delivery so your projects move faster and perform better than a typical agency engagement.</p>

              <div className="why-us-stats">
                <div className="why-stat">
                  <strong>180+</strong>
                  <span>Projects launched</span>
                </div>
                <div className="why-stat">
                  <strong>6 countries</strong>
                  <span>Global delivery</span>
                </div>
              </div>

              <Link to="/about" className="btn btn-outline">Meet our Sydney Team</Link>
            </div>

            <div className="why-us-cards">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;

                return (
                  <div className="premium-card why-card" key={index}>
                    <div className="why-icon">
                      <Icon size={20} />
                    </div>
                    <div className="why-card-content">
                      <div className="why-card-top">
                        <h3>{diff.title}</h3>
                        <span className="why-card-stat">{diff.stat}</span>
                      </div>
                      <p>{diff.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process (Milestones) ── */}
      <section className="section process-section process-dark-theme" ref={processRevealRef}>
        <div className="container">
          <div className="process-intro">
            <span className="section-label">Our Process</span>
            <h2 className="h1">A premium development workflow from idea to long-term growth.</h2>
            <p>Every engagement is guided by a clear roadmap, disciplined delivery, and thoughtful collaboration at every stage.</p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="process-step-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="process-step-card">
                    <div className="process-step-icon">
                      <Icon size={18} />
                    </div>
                    <div className="process-step-content">
                      <span className="process-step-number">{step.step}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="process-step-arrow" aria-hidden="true">
                      <ChevronDown size={16} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technologies We Use Section ── */}
      <section className="section tech-section">
        <div className="container">
          <div className="tech-showcase">
            <div className="tech-showcase-copy">
              <span className="section-label">Our Stack</span>
              <h2 className="h1">Modern technology optimized for conversion speed.</h2>
              <p>We build without monolithic templates. We utilize robust libraries and frameworks to deliver lightweight, scalable assets.</p>

              <div className="tech-tabs-list">
                {techCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`tech-tab-btn ${selectedTechTab === cat ? 'active' : ''}`}
                    onClick={() => setSelectedTechTab(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="tech-spotlight-card">
              <div className="tech-spotlight-badge">Recommended stack</div>
              <h3>React, Shopify, and analytics-native delivery.</h3>
              <p>Our stack is chosen to enable fast iteration, clean handoff, and long-term maintainability for ambitious growth teams.</p>
              <div className="tech-pill-row">
                <span>Next.js</span>
                <span>Shopify Plus</span>
                <span>GA4</span>
              </div>
            </div>
          </div>

          <div className="tech-grid">
            {filteredTech.map((tech, index) => (
              <div className="tech-badge-card" key={index}>
                <div className="tech-badge-icon">{tech.logo}</div>
                <h4>{tech.name}</h4>
                <span>{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="section industries-section industries-dark-theme">
        <div className="container">
          <div className="industries-intro">
            <span className="section-label">Industries We Serve</span>
            <h2 className="h1">Tailored search strategies for target sectors.</h2>
            <p>We configure custom conversion copy and keywords mapped to specific business models to optimize high-intent actions.</p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, index) => {
              const IconComp = ind.icon;
              const layoutClass = index === 0 ? 'industry-card industry-card-wide' : index === 2 ? 'industry-card industry-card-tall' : 'industry-card';

              return (
                <div className={`premium-card ${layoutClass} interactive-hover`} key={index} onMouseMove={handlePointerMove}>
                  <div className="industry-icon">
                    <IconComp size={20} />
                  </div>
                  <h3>{ind.title}</h3>
                  <p>{ind.text}</p>
                  <div className="industry-stat">
                    <span>Performance</span>
                    <strong>{ind.metric}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company Statistics (Animated count ups) ── */}
      <section className="stats-section" ref={statsRevealRef}>
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-number-large"><CountUp end={12} suffix="+" /></div>
            <div className="stat-description">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><CountUp end={180} suffix="+" /></div>
            <div className="stat-description">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><CountUp end={6} suffix="" /></div>
            <div className="stat-description">Countries Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-number-large"><span>$</span><CountUp end={12} suffix="M+" /></div>
            <div className="stat-description">Ads Capital Directed</div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section home-testimonial-section">
        <div className="container">
          <div className="testimonials-intro">
            <span className="section-label">Success Proof</span>
            <h2 className="h1">Premium client stories with measurable outcomes.</h2>
            <p>Each engagement is shaped around business goals, clear execution, and results that matter to the people behind the brand.</p>
          </div>

          <div className="testimonial-panel-outer">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="testimonial-card-premium"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease }}
              >
                <div className="testimonial-visual">
                  <img src={testimonials[activeTestimonial].photo} alt={`${testimonials[activeTestimonial].name} from ${testimonials[activeTestimonial].company}`} />
                  <div className="testimonial-photo-overlay">
                    <Stars rating={testimonials[activeTestimonial].rating} />
                    <span>{testimonials[activeTestimonial].industry}</span>
                  </div>
                </div>

                <div className="testimonial-content">
                  <div className="testimonial-meta-row">
                    <div>
                      <p className="testimonial-company">{testimonials[activeTestimonial].company}</p>
                      <p className="testimonial-project-type">{testimonials[activeTestimonial].projectType}</p>
                    </div>
                    <div className="testimonial-location-pill">{testimonials[activeTestimonial].country}</div>
                  </div>

                  <blockquote>“{testimonials[activeTestimonial].quote}”</blockquote>

                  <div className="testimonial-results-block">
                    <span className="testimonial-results-label">Business results</span>
                    <ul>
                      {testimonials[activeTestimonial].results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="testimonial-author-box">
                    <div className="author-meta">
                      <strong>{testimonials[activeTestimonial].name}</strong>
                      <span>{testimonials[activeTestimonial].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-controls">
              <button
                className="testimonial-nav-button"
                type="button"
                onClick={() => setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length)}
                aria-label="Show previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>

              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={activeTestimonial === index ? 'active' : ''}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>

              <button
                className="testimonial-nav-button"
                type="button"
                onClick={() => setActiveTestimonial((current) => (current + 1) % testimonials.length)}
                aria-label="Show next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accordion FAQ Section ── */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-grid-layout">
            <div className="faq-intro-column">
              <span className="section-label">FAQ</span>
              <h2 className="h1">Common questions answered clearly.</h2>
              <p>Find straightforward explanations about our project strategies, platforms, timelines, and services.</p>
            </div>

            <div className="faq-accordion-column">
              <div className="faq-accordion-container">
                {faqs.map((faq, index) => (
                  <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                    <button className="faq-trigger" onClick={() => toggleFaq(index)} type="button">
                      <h3>{faq.question}</h3>
                      <div className="faq-icon-holder">
                        {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>
                    <div className="faq-content" style={{ maxHeight: openFaq === index ? '300px' : '0' }}>
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
