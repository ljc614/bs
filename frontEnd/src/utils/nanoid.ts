import { nanoid, customAlphabet } from 'nanoid';

/**
 * @description 获取nanoid
 */
export function getNanoid(): string {
	return nanoid();
}

/**
 * @description 获取唯一名字
 * @param {number} size 名字的长度
 */
export function getUUName(size: number): string {
	const nano = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);
	return nano(size);
}
