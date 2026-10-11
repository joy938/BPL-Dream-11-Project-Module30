import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই ইম্পোর্টটি ঠিক আছে কি না দেখুন

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // প্লাগইন লিস্টে এটি এভাবে থাকতে হবে
  ],
})
