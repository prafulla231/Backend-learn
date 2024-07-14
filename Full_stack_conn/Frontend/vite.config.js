import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{ //server ko lagega reuest local host se hi aa rahi hai..thats the magic
    proxy:{
      '/api' : 'http://localhost:3000'//.../api ke pehle ye string append ho jayegi 
    }
  },
  plugins: [react()],
})
