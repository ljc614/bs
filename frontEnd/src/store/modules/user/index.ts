import { defineStore } from 'pinia';
import { login as userLogin, logout as userLogout, getUserInfo, LoginData } from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { UserState } from './types';

const useUserStore = defineStore('user', {
	state: (): UserState => ({
		alias: undefined,
		avatar: undefined,
		id: undefined,
		mail: undefined,
		name: undefined,
		uid: undefined,
		role: '',
	}),

	getters: {
		userInfo(state: UserState): UserState {
			return { ...state };
		},
	},

	actions: {
		switchRoles() {
			return new Promise((resolve) => {
				this.role = this.role === 'user' ? 'admin' : 'user';
				resolve(this.role);
			});
		},
		// Set user's information
		setInfo(partial: Partial<UserState>) {
			this.$patch(partial);
		},

		// Reset user's information
		resetInfo() {
			this.$reset(); // 重置 pinia 状态
		},

		// Get user's information
		async info() {
			const res = await getUserInfo();

			this.setInfo(res.message);
		},

		// Login
		async login(loginForm: LoginData) {
			try {
				const res = await userLogin(loginForm);
				setToken(res.message.token);
			} catch (err) {
				clearToken();
				throw err;
			}
		},
		logoutCallBack() {
			this.resetInfo();
			clearToken();
		},
		// Logout
		async logout() {
			try {
				await userLogout();
			} finally {
				this.logoutCallBack();
			}
		},
	},
});

export default useUserStore;
