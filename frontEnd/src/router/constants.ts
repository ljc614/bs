export const WHITE_LIST = [
	// 白名单路由, 不需要权限
	{ name: 'notFound', children: [] },
	{ name: 'login', children: [] },
];

export const NOT_FOUND = {
	name: 'notFound', // 未找到
};

export const REDIRECT_ROUTE_NAME = 'Redirect'; // 重定向路由名称

export const DEFAULT_ROUTE_NAME = 'dashboard'; // 默认路由名称

export const DEFAULT_ROUTE = {
	// 默认路由
	title: '主页',
	name: DEFAULT_ROUTE_NAME,
	fullPath: '/home',
};
