/*
 * @Author: ND_LJQ
 * @Date: 2022-09-05 17:26:49
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 16:38:12
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import Request from './request';
import storage from '../../utils/storage';
import { useGetters } from '../../utils/useMapper';

const baseUrl = import.meta.env.VITE_BASE_URL;
const request = new Request({
	baseURL: baseUrl,
	timeout: 1000 * 60 * 5,
	interceptors: {
		// 请求拦截器
		requestInterceptors: (config) => {
			const userStore = useGetters('userStore', ['token']);
			if (config.headers) {
				config.headers.token = userStore.token.value;
			} else {
				config.headers = { token: userStore.value };
			}
			return config;
		},
		// 响应拦截器
		responseInterceptors: (result) => {
			return result;
		},
	},
});

/**
 * @description: OLPRequest函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {OLPRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const OLPRequest = (config) => {
	const { method = 'GET' } = config;
	if (method === 'get' || method === 'GET') {
		config.params = config.data;
	}
	return request.request(config);
};

// 取消请求
export const cancelRequest = (url) => {
	return request.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
	return request.cancelAllRequest();
};

export default OLPRequest;
