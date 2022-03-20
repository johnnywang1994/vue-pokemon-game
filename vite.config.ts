import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin as html } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import pkg from './package.json'
import envConfig from './env'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      dts: 'auto-imports.d.ts',
      imports: ['vue'],
    }),
    vue(),
    html({
      minify: isProd,
      inject: { data: envConfig.templateData },
    }),
    legacy({
      targets: (pkg as any).browserslist,
    }),
  ],
  define: {
    'process.env': envConfig.defineVariables || {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: envConfig.scssPrefix
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // './message': resolve(
      //   __dirname,
      //   `./src/i18n/${isProd ? 'prod' : 'dev'}.ts`
      // ),
    }
  },
  build: {
    assetsDir: envConfig.assetsDir,
  },
})
