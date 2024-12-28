import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load enviorment variables from dotenv file
dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
