
const fs = require('fs');
const data = fs.readFileSync('d:/New folder/aryan-portfolio-vite/public/models/character.glb');
const content = data.toString('latin1'); // Use latin1 to avoid UTF-8 issues with binary data
const results = [];
const regex = /"name":"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    results.push(match[1]);
}
const filtered = [...new Set(results)].filter(n =>
    n.toLowerCase().includes('animation') ||
    n.toLowerCase().includes('bone') ||
    n.toLowerCase().includes('spine') ||
    n.toLowerCase().includes('head') ||
    n.toLowerCase().includes('neck') ||
    n.toLowerCase().includes('key') ||
    n.toLowerCase().includes('intro') ||
    n.toLowerCase().includes('blink') ||
    n.toLowerCase().includes('typing')
);
console.log(JSON.stringify(filtered, null, 2));
