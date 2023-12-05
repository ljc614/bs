import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      // vue
      vue(),
      //tsx
    vueJsx(),
      // 用于使用svg图标
    svgLoader(),
      // 代码校验
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
  ],

  css: {
    // 全局引入样式
    preprocessorOptions: {
      additionalData: '@import "@/assets/scss/globalVar.scss";@import "@/assets/scss/globalMixin.scss";'
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': '/src',
    },
  },
})
