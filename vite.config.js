import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://alexmak889.github.io/', // Replace with your GitHub repository name
});