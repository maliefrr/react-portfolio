import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base path to use relative path
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/', // Replace 'your-repo-name' with your GitHub repository name
});
