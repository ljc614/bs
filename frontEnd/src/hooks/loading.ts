// 加载状态hook
import { ref } from 'vue';

export default function useLoading(initValue = false) {
	const loading = ref(initValue);
	const setLoading = (value: boolean) => {
		loading.value = value;
	};
	const toggle = () => {
		loading.value = !loading.value;
	};
	return {
		loading, // 加载状态 一个boolean值
		setLoading, // 设置加载状态
		toggle, // 加载状态反转
	};
}
