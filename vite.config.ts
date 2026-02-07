import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer(),
            ],
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: true,
        port: 3000,
    },
    preview: {
        port: 4174,
        host: true
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('three')) return 'vendor-three';
                        if (id.includes('gsap') || id.includes('ScrollTrigger')) return 'vendor-gsap';
                        return 'vendor';
                    }
                }
            }
        },
        chunkSizeWarningLimit: 1000
    }
})
