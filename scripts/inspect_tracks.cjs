
const fs = require('fs');
const data = fs.readFileSync('d:/New folder/aryan-portfolio-vite/public/models/character.glb');
const content = data.toString('latin1');

console.log('--- ANIMATION TRACK INSPECTION ---');
// Find track names which usually follow the pattern .name in JSON
// In GLB/JSON they are often like "nodeName.rotation" or "nodeName.position"
const tracks = [];
const trackRegex = /"([^"]+\.(?:rotation|position|quaternion|scale))"/g;
let match;
while ((match = trackRegex.exec(content)) !== null) {
    tracks.push(match[1]);
}

const uniqueTracks = [...new Set(tracks)];
console.log(JSON.stringify(uniqueTracks, null, 2));
