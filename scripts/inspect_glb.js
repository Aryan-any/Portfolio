
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import fs from 'fs';
import { JSDOM } from 'jsdom';

// Mock browser environment for Three.js
const dom = new JSDOM();
(global as any).window = dom.window;
(global as any).document = dom.window.document;
(global as any).self = dom.window;
(global as any).navigator = dom.window.navigator;

async function inspectGLB(path: string) {
    const loader = new GLTFLoader();
    const data = fs.readFileSync(path);
    const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);

    loader.parse(arrayBuffer, '', (gltf) => {
        console.log('--- GLTF EXAMINED ---');
        console.log('Animations found:', gltf.animations.length);
        gltf.animations.forEach((clip, i) => {
            console.log(`  ${i}: ${clip.name}`);
        });

        console.log('\nNodes found:');
        gltf.scene.traverse((node) => {
            if (node.name) {
                console.log(`  - ${node.name} (${node.type})`);
            }
        });
    }, (error) => {
        console.error('Error parsing GLTF:', error);
    });
}

const glbPath = 'd:/New folder/aryan-portfolio-vite/public/models/character.glb';
inspectGLB(glbPath);
