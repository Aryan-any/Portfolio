
const fs = require('fs');
const data = fs.readFileSync('d:/New folder/aryan-portfolio-vite/public/models/character.glb');
const content = data.toString('latin1');
const results = [];
const regex = /"name":"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    results.push(match[1]);
}
console.log(JSON.stringify([...new Set(results)], null, 2));
