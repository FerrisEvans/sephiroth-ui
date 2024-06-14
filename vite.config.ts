import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import {createSvgIconsPlugin} from "vite-plugin-svg-icons"
import {visualizer} from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true,
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    visualizer({
      open: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src/types'),
    },
  },
  server: {
    // 自动打开浏览器
    open: false,
    proxy: {
      '/api': {
        target: 'https://xxxxxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
