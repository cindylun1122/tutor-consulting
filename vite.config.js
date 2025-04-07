import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/tutor-consulting/', // make sure this matches your GitHub repo name!
    plugins: [react()],
})