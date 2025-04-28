import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <<< BU SATIRI EKLEDİK

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),  // <<< BU SATIRI DÜZELTTİK
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/test/**/*.test.js'],
  }
});
