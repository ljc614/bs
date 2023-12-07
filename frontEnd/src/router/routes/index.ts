import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router';
import { DEFAULT_LAYOUT } from './base';

const externalModules = import.meta.glob('./externalModules/*.ts', {
	eager: true,
}); // 外部站点

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
	Object.keys(_modules).forEach((key) => {
		const defaultModule = _modules[key].default;
		if (!defaultModule) return;
		const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule];
		result.push(...moduleList);
	});
	return result;
}

export const appExternalRoutes: RouteRecordNormalized[] = formatModules(externalModules, []);

type routerBuff = {
	isRoot?: boolean; // 是否是根路由
	weight?: number; // 权重 用于生成面包屑
};

type PageRouterConfig = RouteRecordRaw & { meta: routerBuff; children?: PageRouterConfig[] };

// 这里可以用于生成菜单项
export const appRoutes: PageRouterConfig[] = [
	{
		path: '/home',
		name: 'home',
		component: DEFAULT_LAYOUT,
		redirect: '/home',
		meta: {
			locale: '首页',
			requiresAuth: true,
			icon: 'icon-normal',
			order: 0,
		},
		children: [
			{
				path: '',
				name: '',
				component: () => {
					return null;
				},
				// component: () => import(''), 组件
				meta: {
					locale: '首页',
					requiresAuth: true,
					icon: 'icon-overview',
					roles: ['*'],
					weight: 1,
					isRoot: true,
					ignoreCache: true,
				},
			},
		],
	},
];
