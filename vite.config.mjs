import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  // optimizeDeps: {
  //   include: ['@trendcapital/react-hook-form-mantine'],
  // },
  // ssr: {
  //   noExternal: ['@trendcapital/react-hook-form-mantine'],
  // },
});
