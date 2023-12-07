module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		'eslint-config-prettier',
		'eslint:recommended', // 使用推荐的eslint
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended', // 使用插件支持vue3
		'plugin:vue/vue3-essential',
		//1.继承.prettierrc.js文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
		'plugin:prettier/recommended',
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": 'vue-eslint-parser',
	"parserOptions": {
		"ecmaVersion": "latest",
		"parser": "@typescript-eslint/parser",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"vue"
	],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
	"rules": {
		/**
		 * "off" or 0 - 关闭规则
		 * "warn" or 1 - 将规则视为一个警告（不会导致程序退出）
		 * "error" or 2 - 将规则视为一个错误 (当被触发的时候，程序会退出)
		 */
		'prettier/prettier': 1,
		'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'warn'] }] : 'off', //生产模式不允许使用log
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //生产默认不允许使用debugger
		'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], //变量声明未使用
		'@typescript-eslint/no-explicit-any': 'off', // 允许ts使用any
		// 'vue/multi-word-component-names': off, off可以关闭组件名称校验
		// 组件名称校验
		'vue/multi-word-component-names': ['error', {
			ignores: ['index'] // 需要忽略的组件名
		}]
	}
};
