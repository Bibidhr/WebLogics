const fs = require('fs');
const path = require('path');

const homeFile = 'c:/Users/user/Documents/New/src/pages/Home/Home.jsx';
let content = fs.readFileSync(homeFile, 'utf8');
let lines = content.split('\n');

const imports = `import { logos } from '../../data/logos';
import { projects } from '../../data/projects';
import { testimonials } from '../../data/testimonials';
import { services as servicesData } from '../../data/services';
import { differentiators as diffData } from '../../data/differentiators';
import { processSteps as processData } from '../../data/process';
import { techStack } from '../../data/technologies';
import { industries as industriesData } from '../../data/industries';
import { faqs } from '../../data/faqs';
import { ease, fadeUp, staggerContainer } from '../../data/animations';`;

lines.splice(35, 0, imports);

const startIdx = lines.findIndex(l => l.startsWith('const ease ='));
const endIdx = lines.findIndex(l => l.startsWith('function SectionReveal'));

lines.splice(startIdx, endIdx - startIdx);

const compStart = lines.findIndex(l => l.includes('export default function Home() {'));
const iconMap = `  const iconMap = { Code2, Search, Target, Share2, ShoppingBag, BarChart3, Layers, Mail, ShieldCheck, Handshake, Zap, Compass, Palette, Rocket, LifeBuoy, Cpu, Globe2, Award };
  const services = servicesData.map(s => ({ ...s, Icon: iconMap[s.iconName] }));
  const differentiators = diffData.map(d => ({ ...d, icon: iconMap[d.iconName] }));
  const processSteps = processData.map(p => ({ ...p, icon: iconMap[p.iconName] }));
  const industries = industriesData.map(i => ({ ...i, icon: iconMap[i.iconName] }));`;

lines.splice(compStart + 1, 0, iconMap);
fs.writeFileSync(homeFile, lines.join('\n'));
console.log('Home.jsx updated');

// Blog.jsx
const blogFile = 'c:/Users/user/Documents/New/src/pages/Blog/Blog.jsx';
let blogLines = fs.readFileSync(blogFile, 'utf8').split('\n');
blogLines.splice(3, 0, "import { posts } from '../../data/posts';");
const bStart = blogLines.findIndex(l => l.startsWith('const posts ='));
const bEnd = blogLines.findIndex(l => l.startsWith('export default function Blog() {'));
blogLines.splice(bStart, bEnd - bStart);
fs.writeFileSync(blogFile, blogLines.join('\n'));
console.log('Blog.jsx updated');

// Careers.jsx
const careersFile = 'c:/Users/user/Documents/New/src/pages/Careers/Careers.jsx';
let cLines = fs.readFileSync(careersFile, 'utf8').split('\n');
cLines.splice(3, 0, "import { jobs } from '../../data/jobs';");
const cStart = cLines.findIndex(l => l.startsWith('const jobs ='));
const cEnd = cLines.findIndex(l => l.startsWith('export default function Careers() {'));
cLines.splice(cStart, cEnd - cStart);
fs.writeFileSync(careersFile, cLines.join('\n'));
console.log('Careers.jsx updated');

// About.jsx
const aboutFile = 'c:/Users/user/Documents/New/src/pages/About/About.jsx';
let aLines = fs.readFileSync(aboutFile, 'utf8').split('\n');
aLines.splice(5, 0, "import { team, locationChips } from '../../data/team';\nimport { fadeUp, staggerContainer } from '../../data/animations';");
let aContent = aLines.join('\n');
aContent = aContent.replace(/const fadeUp = {[\s\S]*?};\n/, '');
aContent = aContent.replace(/const staggerContainer = {[\s\S]*?};\n/, '');
aContent = aContent.replace(/const locationChips = \[[\s\S]*?\];\n/, '');
aContent = aContent.replace(/  const team = \[[\s\S]*?\];\n\n/, '');
fs.writeFileSync(aboutFile, aContent);
console.log('About.jsx updated');

// CaseStudies.jsx
const csFile = 'c:/Users/user/Documents/New/src/pages/CaseStudies/CaseStudies.jsx';
let csLines = fs.readFileSync(csFile, 'utf8').split('\n');
csLines.splice(4, 0, "import { caseStudies } from '../../data/caseStudies';\nimport { fadeUp, staggerContainer } from '../../data/animations';");
let csContent = csLines.join('\n');
csContent = csContent.replace(/const fadeUp = {[\s\S]*?};\n/, '');
csContent = csContent.replace(/const staggerContainer = {[\s\S]*?};\n/, '');
csContent = csContent.replace(/  const caseStudies = \[[\s\S]*?\];\n/, '');
fs.writeFileSync(csFile, csContent);
console.log('CaseStudies.jsx updated');

// Contact.jsx
const contactFile = 'c:/Users/user/Documents/New/src/pages/Contact/Contact.jsx';
let conContent = fs.readFileSync(contactFile, 'utf8');
conContent = conContent.replace("import './Contact.css';", "import './Contact.css';\nimport { fadeUp } from '../../data/animations';");
conContent = conContent.replace(/const fadeUp = {[\s\S]*?};\n/, '');
fs.writeFileSync(contactFile, conContent);
console.log('Contact.jsx updated');
