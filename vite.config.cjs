// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [react()],
//     base: "/theBestCarRentalEver",
//     resolve: {
//         alias: { src: "/src" },
//     },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    cors: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    mimeTypes: {
      'text/jsx': ['jsx'],
    },
  },
});
