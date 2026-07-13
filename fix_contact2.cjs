const fs = require('fs');
const contactFile = 'c:/Users/user/Documents/New/src/pages/Contact/Contact.jsx';
let conLines = fs.readFileSync(contactFile, 'utf8').split('\n');
const fadeStart = conLines.findIndex(l => l.includes('const fadeUp = {'));
if (fadeStart !== -1) {
  const fadeEnd = conLines.findIndex((l, i) => i > fadeStart && l.includes('};'));
  conLines.splice(fadeStart, fadeEnd - fadeStart + 1);
}
fs.writeFileSync(contactFile, conLines.join('\n'));
console.log('Contact.jsx cleaned');
