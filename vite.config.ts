// vite.config.ts

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Reemplaza 'nombre-de-tu-repo' con el nombre exacto de tu repositorio en GitHub
// Ejemplo: si tu URL es github.com/LouizM/landing-aqua, usa 'landing-aqua'
const repoName = 'landing'; 

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        // AÑADE ESTA LÍNEA CLAVE:
        base: `/${repoName}/`,

      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
