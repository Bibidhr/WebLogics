const fs = require('fs');
const contactFile = 'c:/Users/user/Documents/New/src/pages/Contact/Contact.jsx';
let conContent = fs.readFileSync(contactFile, 'utf8');
conContent = conContent.replace("import './Contact.css';", "import './Contact.css';\nimport { fadeUp } from '../../data/animations';");
conContent = conContent.replace(/const fadeUp = {[\s\S]*?};\n/, '');
fs.writeFileSync(contactFile, conContent);
console.log('Contact.jsx updated');
