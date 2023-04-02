/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 16:32:11
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 16:32:21
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface RequestInterceptors {
	// 请求拦截
	requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	requestInterceptorsCatch?: (err: any) => any;

	//响应拦截
	responseInterceptors?: <T = AxiosResponse>(config: T) => T;
	responseInterceptorsCatch?: (err: any) => any;
}

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
	interceptors?: RequestInterceptors;
}

//取消请求
export interface CancelRequestSource {
	[index: string]: () => void;
}
