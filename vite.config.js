import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/theBestCarRentalEver',
  resolve: {
    alias: { src: '/src' },
  },
});
