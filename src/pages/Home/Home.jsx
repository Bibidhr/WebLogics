import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
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
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
    quote: 'Weblogics restructured our entire organic lead flow. The new website is clean, looks incredibly professional, and ranks at the top of Google for our installation categories.',
    name: 'David Vance',
    company: 'Premium Garage Doors',
    country: 'Australia',
    project: 'Website Development + Local SEO',
    rating: 5
  },
  {
    quote: 'As an e-commerce brand, speed and reliable tracking are everything. The custom storefront Weblogics developed loads instantly, and their paid campaigns deliver steady returns.',
    name: 'Priya Sharma',
    company: 'Dhaage Sarees',
    country: 'India',
    project: 'Shopify Storefront + Paid Campaigns',
    rating: 5
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
  { title: '12+ Years Enterprise Experience', text: 'Established delivery history across custom development, SEO strategies, paid campaigns, and storefronts.' },
  { title: 'Proven International Portfolio', text: 'Work represented across Australia, India, Canada, the United Kingdom, and the United States.' },
  { title: 'Australian-Based Strategy Team', text: 'Consultation led from North Sydney with transparent, clear communication for corporate stakeholders.' },
  { title: 'Results-Focused Methodology', text: 'Every layout element, service route, and campaign is explicitly tied to sales, visibility, or trust.' }
];

const processSteps = [
  { step: '01', title: 'Discovery & Analytics Audit', text: 'We map your business model, current web performance, conversion metrics, and valuable client actions.' },
  { step: '02', title: 'Technical Strategy Mapping', text: 'We define the landing page layout, offer hierarchy, high-intent keywords, campaign budget, and tracking setup.' },
  { step: '03', title: 'Design & Custom Engineering', text: 'We design the user experience, write professional copy, and engineer custom assets in React or Shopify.' },
  { step: '04', title: 'Integrations & Quality Control', text: 'We audit load times, responsiveness, API sync routes, forms, search readiness, and tracking before launch.' },
  { step: '05', title: 'Post-Launch Performance Tuning', text: 'We monitor organic indices, tune search bids, optimize conversion copy, and support digital development.' }
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
      <section className="home-hero-section">
        <div className="hero-gradient-mesh"></div>
        <div className="container hero-grid">
          <motion.div className="hero-copy" {...heroMotion}>
            <motion.div className="hero-badge" variants={fadeUp}>
              <Award size={14} /> Enterprise Digital Growth Agency
            </motion.div>
            <motion.h1 className="display display-light" variants={fadeUp}>
              Websites, SEO, and paid media built to <em>generate better leads</em>.
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
            
            <motion.div className="hero-stats-mini" variants={fadeUp}>
              <div className="stat-item">
                <div className="stat-num"><CountUp end={12} suffix="+" /></div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num"><CountUp end={180} suffix="+" /></div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num"><span>$</span><CountUp end={12} suffix="M+" /></div>
                <div className="stat-label">Managed Ads</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Floating Dashboard visual */}
          <div className="hero-visual-wrapper">
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
                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#FFFFFF' }}>+142% Traffic</strong>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)' }}>Local search rankings</span>
              </div>
            </div>

            <div className="hero-floater floater-leads">
              <div className="growth-label">
                <span>Leads Captured</span>
                <span>Live</span>
              </div>
              <div className="growth-num">+218% YoY</div>
              <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '82%', height: '100%', background: '#10B981' }}></div>
              </div>
            </div>

            <div className="hero-floater floater-trust">
              <div className="stars">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <span>5.0 rating</span>
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
            <h2 className="h1 h1-light">Bespoke digital solutions engineered to convert.</h2>
            <p>We deliver fast, secure web frameworks and technical search strategies that directly produce inquiries.</p>
          </div>
          <div className="divider-dots"><span></span></div>

          <div className="services-glass-grid">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.Icon;
              return (
                <div className="service-glass-card" key={index}>
                  <div className="service-glass-icon"><Icon size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
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

          <div className="services-glass-grid-bottom">
            {services.slice(3, 5).map((service, index) => {
              const Icon = service.Icon;
              return (
                <div className="service-glass-card" key={index + 3}>
                  <div className="service-glass-icon"><Icon size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
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

      {/* ── Portfolio Section (Browser shell mockups) ── */}
      {/* ── Portfolio Section (Featured + Grid Layout) ── */}
      <section className="section home-portfolio-section">
        <div className="container">
          <div className="portfolio-header-layout">
            <div className="left-column">
              <span className="section-label">Selected Projects</span>
              <h2 className="h1">High-performance custom work.</h2>
            </div>
            <p>Filter through our recent digital builds. Each system is designed from the ground up for speed, security, and leads.</p>
          </div>
          <div className="divider-gradient-line mb-8"></div>

          {/* Featured Case Study (First project in list) */}
          {projects.slice(0, 1).map((project, index) => (
            <div className="portfolio-featured-card" key={index}>
              <div className="portfolio-featured-image-col">
                <div className="browser-shell">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <div className="browser-dot red"></div>
                      <div className="browser-dot yellow"></div>
                      <div className="browser-dot green"></div>
                    </div>
                    <div className="browser-bar">www.{project.title.toLowerCase().replace(/\s+/g, '')}.com.au</div>
                  </div>
                  <div className="browser-screen">
                    <div className="portfolio-screenshot">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-featured-info-col">
                <span className="section-label">Featured Project</span>
                <div className="portfolio-tag-row">
                  <span className="premium-tag">{project.category}</span>
                  <span className="premium-tag">{project.country}</span>
                </div>
                <h2>{project.title}</h2>
                <p className="body">{project.description}</p>
                
                <div className="portfolio-featured-metrics">
                  <div className="portfolio-metrics-badge">
                    <span>Attributed Result</span>
                    <strong>{project.result}</strong>
                  </div>
                  <Link to="/case-studies" className="btn btn-primary">
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Remaining Projects Grid */}
          <div className="portfolio-grid-home">
            {projects.slice(1).map((project, index) => (
              <div className="portfolio-mockup-card" key={index}>
                <div className="portfolio-shell-wrapper">
                  <div className="browser-shell">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <div className="browser-dot red"></div>
                        <div className="browser-dot yellow"></div>
                        <div className="browser-dot green"></div>
                      </div>
                      <div className="browser-bar">www.{project.title.toLowerCase().replace(/\s+/g, '')}.com.au</div>
                    </div>
                    <div className="browser-screen">
                      <div className="portfolio-screenshot">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-mockup-info">
                  <div className="portfolio-tag-row">
                    <span className="premium-tag">{project.category}</span>
                    <span className="premium-tag">{project.country}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-meta-bar">
                    <div className="portfolio-metrics-badge">
                      <span>Attributed Result</span>
                      <strong>{project.result}</strong>
                    </div>
                    <Link to="/case-studies" className="portfolio-cta-link">
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-outline btn-lg">Browse Full Case Studies</Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-us-section">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-sticky">
              <span className="section-label">Why Choose Us</span>
              <h2 className="h1">Senior consulting, tailored codebases, and direct results.</h2>
              <p>We are a dedicated growth partner, not a one-off template builder. We specialize in planning, structuring, and delivering custom campaigns designed to scale with your business operations.</p>
              <Link to="/about" className="btn btn-outline">Meet our Sydney Team</Link>
            </div>

            <div className="why-us-cards">
              {differentiators.map((diff, index) => (
                <div className="premium-card why-card" key={index}>
                  <div className="why-icon">
                    <Check size={20} />
                  </div>
                  <div className="why-card-content">
                    <h3>{diff.title}</h3>
                    <p>{diff.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process (Milestones) ── */}
      <section className="section process-section process-dark-theme">
        <div className="container">
          <div className="process-intro">
            <span className="section-label">Our Process</span>
            <h2 className="h1">A structured digital roadmap.</h2>
            <p>Our projects follow a structured five-step lifecycle to guarantee transparency, technical efficiency, and clean deployment.</p>
          </div>

          <div className="timeline-track-wrap">
            <div className="timeline-line"></div>
            {processSteps.map((step, index) => (
              <div className="timeline-step" key={index}>
                <div className="timeline-bubble">{step.step}</div>
                <div className="premium-card timeline-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies We Use Section ── */}
      <section className="section tech-section">
        <div className="container">
          <div className="tech-intro">
            <span className="section-label">Our Stack</span>
            <h2 className="h1">Modern technology optimized for conversion speed.</h2>
            <p>We build without monolithic templates. We utilize robust libraries and frameworks to deliver lightweight, scalable assets.</p>
          </div>

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
              return (
                <div className="premium-card industry-card" key={index}>
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
      <section className="stats-section">
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
            <h2 className="h1">Client results backed by work.</h2>
            <p>Read specific reviews from business owners who partnered with Weblogics for websites, search SEO, and campaigns.</p>
          </div>

          <div className="testimonial-panel-outer">
            <div className="testimonial-card-premium">
              <Stars rating={testimonials[activeTestimonial].rating} />
              <blockquote>"{testimonials[activeTestimonial].quote}"</blockquote>
              <div className="testimonial-author-box">
                <div className="author-avatar">{testimonials[activeTestimonial].company.slice(0, 2).toUpperCase()}</div>
                <div className="author-meta">
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].company} — {testimonials[activeTestimonial].country}</span>
                  <small>{testimonials[activeTestimonial].project}</small>
                </div>
              </div>
            </div>
            
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
