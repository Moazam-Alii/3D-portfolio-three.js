import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext' // allow top-level await in deps
        },
        include: ['three'] // ensure three.js gets processed
    },
    build: {
        target: 'esnext' // allow top-level await in build output
    }
})
