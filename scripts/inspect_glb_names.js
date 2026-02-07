
const fs = require('fs');
const data = fs.readFileSync('d:/New folder/aryan-portfolio-vite/public/models/character.glb');
const content = data.toString('utf8');
const results = [];
const regex = /"name":"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    results.push(match[1]);
}
console.log(JSON.stringify([...new Set(results)].filter(n => n.includes('Animation') || n.includes('spine') || n.includes('key')), null, 2));
