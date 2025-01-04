import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './stats.html',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          '@apollo/client': ['@apollo/client'],
          graphql: ['graphql'],
          'react-router-dom': ['react-router-dom'],
        },
      },
    },
  },
});
