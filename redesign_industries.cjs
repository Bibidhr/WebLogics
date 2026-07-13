const fs = require('fs');
const path = require('path');

const homeJsxPath = path.join(__dirname, 'src', 'pages', 'Home', 'Home.jsx');
const homeCssPath = path.join(__dirname, 'src', 'pages', 'Home', 'Home.css');

// 1. Refactor Home.jsx
let jsx = fs.readFileSync(homeJsxPath, 'utf8');

const oldIndustriesCard = `                <motion.div 
                  key={index} 
                  className="industry-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="industry-icon">
                    <Icon size={28} />
                  </div>
                  <h4 className="h5 h1-light mb-2">{industry.name}</h4>
                  <p className="text-sm text-color-inverse-secondary">{industry.description}</p>
                </motion.div>`;

const newIndustriesCard = `                <motion.div 
                  key={index} 
                  className="sector-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="sector-icon">
                    <Icon size={32} />
                  </div>
                  <div className="sector-content">
                    <h4 className="h5 h1-light mb-2">{industry.name}</h4>
                    <p className="text-sm text-color-inverse-secondary mb-4">{industry.description}</p>
                    <Link to="/industries" className="text-accent inline-flex items-center text-sm font-semibold hover:text-white transition-colors">
                      Explore Industry <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>`;

jsx = jsx.replace(oldIndustriesCard, newIndustriesCard);
fs.writeFileSync(homeJsxPath, jsx);
console.log('Updated Home.jsx');

// 2. Refactor Home.css
let css = fs.readFileSync(homeCssPath, 'utf8');

const cssToReplace = `.industry-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-sm);
  padding: 2rem;
  text-align: center;
  transition: background var(--transition-fast), border var(--transition-fast);
}

.industry-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
}

.industry-icon {
  color: var(--accent);
  margin-bottom: 1rem;
  display: inline-flex;
}`;

// Note: capabilities-grid STILL uses .industry-card, so I should NOT remove it completely, but rather append the new .sector-card styles. Wait, if I just append .sector-card, then capabilities cards stay the same (which is good).

const newCssRules = `
/* ── Sector Cards (Industries We Serve) ── */
.sector-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  min-height: 260px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
}

.sector-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-color-inverse-secondary);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sector-content {
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.sector-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.sector-card:hover .sector-icon {
  transform: translate(-50%, calc(-50% - 60px));
  color: var(--accent);
}

.sector-card:hover .sector-content {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
`;

css = css.replace('/* ── 6. Client Testimonials (Soft Gray) ── */', newCssRules + '\n/* ── 6. Client Testimonials (Soft Gray) ── */');

fs.writeFileSync(homeCssPath, css);
console.log('Updated Home.css');
