import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    resolve: {
      alias: {
        // Используем абсолютный путь к папке models
        '@models': path.resolve(__dirname, 'src/models'),
      },
    },
    base:'/new-page/',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: '[name].js',
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    // Перечисляем зависимости для оптимизации
    optimizeDeps: {
      include: ['three', 'three/examples/jsm/loaders/GLTFLoader.js']
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
    ],
  };
});
