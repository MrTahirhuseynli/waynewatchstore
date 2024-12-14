import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: true, // Paket analizi otomatik açılır
    }),
  ],
  publicDir: 'src/public', // Statik dosyalar için doğru dizin
  server: {
    port: 3000, // Varsayılan port
    cors: true, // CORS desteği
    
  },
  optimizeDeps: {
    include: ['swiper/react', 'swiper'], // Sık kullanılan bağımlılıklar
  },
  build: {
    minify: 'esbuild', // Hızlı ve etkili minifikasyon
    sourcemap: false, // Üretim için source map kapalı
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Üçüncü taraf bağımlılıkları gruplandır
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
});
