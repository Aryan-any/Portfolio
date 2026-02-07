
const fs = require('fs');

function findStrings(buffer, pattern) {
    const strings = [];
    let start = -1;
    for (let i = 0; i < buffer.length; i++) {
        const char = buffer[i];
        if (char >= 32 && char <= 126) {
            if (start === -1) start = i;
        } else {
            if (start !== -1) {
                const s = buffer.slice(start, i).toString();
                if (s.length > 2 && (pattern === '' || s.toLowerCase().includes(pattern.toLowerCase()))) {
                    strings.push(s);
                }
                start = -1;
            }
        }
    }
    return strings;
}

const glbPath = 'd:/New folder/aryan-portfolio-vite/public/models/character.glb';
const data = fs.readFileSync(glbPath);

console.log('--- POTENTIAL ANIMATIONS ---');
const anims = findStrings(data, 'Animation');
const uniqueAnims = [...new Set(anims)];
uniqueAnims.forEach(s => console.log(s));

console.log('\n--- POTENTIAL BONES ---');
const bones = findStrings(data, 'spine');
const uniqueBones = [...new Set(bones)];
uniqueBones.forEach(s => console.log(s));

console.log('\n--- POTENTIAL MESHS ---');
const meshs = findStrings(data, 'mesh');
const uniqueMeshs = [...new Set(meshs)];
uniqueMeshs.forEach(s => console.log(s));
