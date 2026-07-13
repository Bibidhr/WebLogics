import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../../data/portfolioItems';
import './Portfolio.css';

export default function Portfolio() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImgError = (e) => {
    e.target.src = '/client_preview_1.png';
  };

  const featuredProject = portfolioItems[0];
  const gridProjects = portfolioItems.slice(1);

  // --- Premium Entrance Animation Variants ---
  
  // 1. Entire section (Fade + Y: 40px -> 0, 700ms)
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // 2. Browser mockup (Scale: 0.96 -> 1, Rotate: -2 -> 0, 800ms)
  const desktopMockupVariants = {
    hidden: { scale: 0.96, rotate: -2, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // 3. Phone mockup (Scale: 0.92 -> 1, Fade in, Remains completely static afterward)
  const mobileMockupVariants = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Subtle Parallax on browser image while entering
  const imageParallaxVariants = {
    hidden: { y: 15 },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Content items fade in sequentially
  const contentItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Grid Stagger for secondary projects
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const gridCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="portfolio-page portfolio-premium">
      {/* Premium Header */}
      <section className="portfolio-hero">
        <div className="hero-gradient-mesh"></div>
        <div className="hero-glow-orb orb-1"></div>
        <div className="container relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="section-label section-label-light mx-auto mb-4">Our Work</span>
            <h1 className="display display-light mb-6">Digital Excellence<br/>Delivered Globally.</h1>
            <p className="lead mx-auto lead-light max-w-2xl text-slate-300">
              We partner with ambitious brands to engineer platforms that dominate search, drive conversions, and scale effortlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      {featuredProject && (
        <section className="project-showcase-section featured">
          <div className="container">
            <motion.div 
              className="showcase-shell featured-shell"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={sectionVariants}
            >
              {/* Left Side: Media */}
              <div className="showcase-media">
                <motion.div className="desktop-mockup" variants={desktopMockupVariants}>
                  <div className="browser-header">
                    <div className="browser-dots">
                      <div className="browser-dot red"></div>
                      <div className="browser-dot yellow"></div>
                      <div className="browser-dot green"></div>
                    </div>
                    <div className="browser-bar">www.{featuredProject.title.toLowerCase().replace(/\s+/g, '')}.com</div>
                  </div>
                  <div className="browser-screen">
                    <motion.img
                      src={featuredProject.image}
                      alt={`${featuredProject.title} Interface`}
                      onError={handleImgError}
                      className="project-hero-image"
                      variants={imageParallaxVariants}
                    />
                  </div>
                </motion.div>

                <motion.div className="mobile-mockup" variants={mobileMockupVariants}>
                  <div className="mobile-notch"></div>
                  <div className="mobile-screen">
                    <img
                      src={featuredProject.image}
                      alt={`${featuredProject.title} Mobile Preview`}
                      onError={handleImgError}
                      className="project-mobile-image"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Content */}
              <div className="showcase-content">
                <motion.div className="project-meta-tags" variants={contentItemVariants}>
                  <span className="premium-tag">{featuredProject.country}</span>
                  <span className="premium-tag">{featuredProject.industry}</span>
                </motion.div>
                
                <motion.div className="project-category" variants={contentItemVariants}>
                  {featuredProject.category}
                </motion.div>
                
                <motion.h2 className="project-title" variants={contentItemVariants}>
                  {featuredProject.title}
                </motion.h2>
                
                <motion.p className="project-overview" variants={contentItemVariants}>
                  {featuredProject.overview}
                </motion.p>

                <motion.div className="info-grid" variants={contentItemVariants}>
                  <div className="info-card">
                    <h3>Business Challenge</h3>
                    <p>{featuredProject.challenge}</p>
                  </div>
                  <div className="info-card">
                    <h3>Solution Delivered</h3>
                    <p>{featuredProject.solution}</p>
                  </div>
                </motion.div>

                <motion.div className="tech-stack" variants={contentItemVariants}>
                  {featuredProject.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </motion.div>

                <motion.div className="results-strip" variants={contentItemVariants}>
                  {featuredProject.resultsList.map((result, i) => (
                    <motion.div 
                      className="result-pill" 
                      key={i}
                      variants={contentItemVariants}
                    >
                      <div className="metric-value">{result.metric}</div>
                      <div className="metric-label">{result.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.a 
                  href={featuredProject.ctaHref} 
                  className="btn btn-primary project-cta"
                  variants={contentItemVariants}
                >
                  View Case Study <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Secondary Projects Grid */}
      {gridProjects.length > 0 && (
        <section className="secondary-projects-section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4 text-slate-800">More Proven Results</h2>
              <p className="lead mx-auto text-slate-500 max-w-2xl">
                Explore a selection of our most impactful digital transformations.
              </p>
            </div>

            <motion.div 
              className="portfolio-card-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={gridContainerVariants}
            >
              {gridProjects.map((project) => (
                <motion.div className="portfolio-grid-card" key={project.id} variants={gridCardVariants}>
                  <div className="grid-card-media">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <div className="browser-dot red"></div>
                        <div className="browser-dot yellow"></div>
                        <div className="browser-dot green"></div>
                      </div>
                    </div>
                    <div className="grid-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        onError={handleImgError}
                      />
                    </div>
                  </div>
                  
                  <div className="grid-card-content">
                    <div className="grid-card-meta">
                      <span className="grid-industry-tag">{project.industry}</span>
                    </div>
                    
                    <h3 className="grid-project-title">{project.title}</h3>
                    
                    <div className="grid-tech-stack">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="grid-tech-item">{tech}</span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="grid-tech-item">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                    
                    {project.resultsList && project.resultsList.length > 0 && (
                      <div className="grid-highlight-result">
                        <span className="result-metric">{project.resultsList[0].metric}</span>
                        <span className="result-label">{project.resultsList[0].label}</span>
                      </div>
                    )}
                    
                    <a href={project.ctaHref} className="grid-card-cta">
                      View Project <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Call to Action */}
      <section className="section portfolio-cta text-center">
        <div className="container">
          <h2 className="h2 mb-4">Ready for these kinds of results?</h2>
          <p className="lead mx-auto mb-8 text-slate-400">Let's discuss how we can engineer growth for your business.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Start a Project</a>
        </div>
      </section>
    </div>
  );
}
