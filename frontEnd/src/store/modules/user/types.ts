export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
	alias?: string;
	avatar?: string;
	id?: number;
	mail?: string;
	name?: string;
	uid?: string;
	role?: RoleType;
}
