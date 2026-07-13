const fs = require('fs');

// Portfolio.jsx
const portFile = 'c:/Users/user/Documents/New/src/pages/Portfolio/Portfolio.jsx';
let pLines = fs.readFileSync(portFile, 'utf8').split('\n');
const pStart = pLines.findIndex(l => l.startsWith('const portfolioItems ='));
const pEnd = pLines.findIndex(l => l.startsWith('export default function Portfolio() {'));
// Read the data and save to data/projects.js if needed, but portfolioItems are the same as projects or similar. Wait, portfolioItems has different data?
// Let's just create a new data file for portfolio items.
const dataDir = 'c:/Users/user/Documents/New/src/data';
fs.writeFileSync(dataDir + '/portfolioItems.js', 'export ' + pLines.slice(pStart, pEnd).join('\n'));

pLines.splice(3, 0, "import { portfolioItems } from '../../data/portfolioItems';");
// Adjust indices after splice
const pStartNew = pLines.findIndex(l => l.startsWith('const portfolioItems ='));
const pEndNew = pLines.findIndex(l => l.startsWith('export default function Portfolio() {'));
pLines.splice(pStartNew, pEndNew - pStartNew);
fs.writeFileSync(portFile, pLines.join('\n'));
console.log('Portfolio.jsx updated');

// ServiceDetail.jsx
const servFile = 'c:/Users/user/Documents/New/src/pages/Services/ServiceDetail.jsx';
let sLines = fs.readFileSync(servFile, 'utf8').split('\n');
const sStart = sLines.findIndex(l => l.startsWith('const serviceData = {'));
const sEnd = sLines.findIndex(l => l.startsWith('export default function ServiceDetail() {'));
fs.writeFileSync(dataDir + '/serviceDetailData.js', 'export ' + sLines.slice(sStart, sEnd).join('\n'));

sLines.splice(6, 0, "import { serviceData } from '../../data/serviceDetailData';");
const sStartNew = sLines.findIndex(l => l.startsWith('const serviceData = {'));
const sEndNew = sLines.findIndex(l => l.startsWith('export default function ServiceDetail() {'));
sLines.splice(sStartNew, sEndNew - sStartNew);
fs.writeFileSync(servFile, sLines.join('\n'));
console.log('ServiceDetail.jsx updated');
