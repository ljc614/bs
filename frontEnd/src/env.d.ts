/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string;
}

// declare module 'xxxxx'; 可以用来声明包名

interface Window {
	// 这里定义Window对象的属性
	userName: string;
}
