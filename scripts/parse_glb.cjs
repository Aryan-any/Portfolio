
const fs = require('fs');
const buffer = fs.readFileSync('d:/New folder/aryan-portfolio-vite/public/models/character.glb');

// GLB layout: Magic (4), Version (4), Length (4), Chunk0Length (4), Chunk0Type (4), Chunk0Data...
const chunk0Length = buffer.readUInt32LE(12);
const chunk0Type = buffer.readUInt32LE(16);

if (chunk0Type === 0x4E4F534A) { // JSON
    const jsonStr = buffer.slice(20, 20 + chunk0Length).toString('utf-8');
    const gltf = JSON.parse(jsonStr);

    console.log('--- ANIMATIONS ---');
    if (gltf.animations) {
        gltf.animations.forEach(anim => {
            console.log(`Animation: ${anim.name}`);
            const trackNodes = anim.channels.map(c => {
                const nodeIdx = c.target.node;
                return gltf.nodes[nodeIdx].name;
            });
            console.log('  Affected Nodes (unique):', [...new Set(trackNodes)].slice(0, 10), '...');
        });
    }

    console.log('\n--- NODES ---');
    gltf.nodes.forEach(node => {
        if (node.name && (node.name.includes('spine') || node.name.includes('thigh') || node.name.includes('foot'))) {
            console.log(`Node: ${node.name}`);
        }
    });
}
