import request from './request';

export interface LoginData {
	username: string;
	password: string;
}

export function login(data: LoginData) {
	return request({
		url: '/login',
		method: 'post',
		data,
	});
}

export function logout() {
	return request({
		url: '/logout',
		method: 'get',
	});
}

export function getUserInfo() {
	return request({
		url: '/getUserInfo',
		method: 'get',
	});
}
