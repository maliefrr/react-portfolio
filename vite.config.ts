import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/', // Replace "your-repo-name" with your actual repository name
  plugins: [react()],
  server: {
    // Set correct MIME type for JavaScript modules
    fs: {
      strict: false,
    },
    // Optionally, if you encounter any issues with image MIME types, you can set them as well
    proxy: {
       '/image': {
         target: '/react-portfolio/image',
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/image/, ''),
       },
     },
  },
});
