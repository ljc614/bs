import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path'; // npm install @types/node -D 下载这个东西防止报错

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
			additionalData: '@import "@/assets/scss/globalVar.scss";@import "@/assets/scss/globalMixin.scss";',
		},
	},
	resolve: {
		// 路径映射
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, 'src'), // 路径别名
			},
			{
				find: 'assets',
				replacement: resolve(__dirname, 'src/assets'),
			},
			{
				find: 'vue',
				replacement: 'vue/dist/vue.esm-bundler.js', // compile template
			},
		],
		extensions: ['.ts', '.js', '.cjs'],
	},
	define: {
		'process.env': {}, // 定义应用程序可以访问的全局常量
	},
});
