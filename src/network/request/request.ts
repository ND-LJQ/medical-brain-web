/*
 * @Author: ND_LJQ
 * @Date: 2022-05-02 07:58:08
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-03 13:37:21
 * @Description:对axios进行二次封装
 * @Email: ndliujunqi@outlook.com
 */

import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestConfig, RequestInterceptors, CancelRequestSource } from './type';

class Request {
	//axios实例
	instance!: AxiosInstance;

	// 拦截器对象
	interceptorsObj?: RequestInterceptors;

	/*
      存放取消方法的集合
    * 在创建请求后将取消请求方法 push 到该集合中
    * 封装一个方法，可以取消请求，传入 url: string|string[] 
    * 在请求之前判断同一URL是否存在，如果存在就取消请求
    */

	cancelRequestSourceList?: CancelRequestSource[];

	/*
      存放所有请求URL的集合
    * 请求之前需要将url push到该集合中
    * 请求完毕后将url从集合中删除
    * 添加在发送请求之前完成，删除在响应之后删除
    */
	requestUrlList?: string[];
	//类拦截器
	// 拦截器的执行顺序为实例请求→类请求→实例响应→类响应
	constructor(config: RequestConfig) {
		this.requestUrlList = [];
		this.cancelRequestSourceList = [];
		this.instance = axios.create(config);
		this.interceptorsObj = config.interceptors;

		// 实例请求拦截器
		this.instance.interceptors.request.use(this.interceptorsObj?.requestInterceptors, this.interceptorsObj?.requestInterceptorsCatch);

		// 全局请求拦截器
		this.instance.interceptors.request.use(
			(res: AxiosRequestConfig) => {
				return res;
			},
			(err: any) => err
		);

		//使用实例响应拦截器
		this.instance.interceptors.response.use(this.interceptorsObj?.responseInterceptors, this.interceptorsObj?.responseInterceptorsCatch);

		// 全局响应拦截器保证最后执行
		this.instance.interceptors.response.use(
			(res: AxiosResponse) => {
				//只返回响应中所需要的data数据
				if (res.status !== 200) {
					return Promise.reject(res.data);
				}
				return res.data;
			},
			(err: any) => err
		);
	}
	/**
	 * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
	 * @param {string} url
	 * @returns {number} 索引位置
	 */
	private getSourceIndex(url: string): number {
		return this.cancelRequestSourceList?.findIndex((item: CancelRequestSource) => {
			return Object.keys(item)[0] === url;
		}) as number;
	}
	/**
	 * @description: 删除 requestUrlList 和 cancelRequestSourceList
	 * @param {string} url
	 * @returns {*}
	 */
	private delUrl(url: string) {
		const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
		const sourceIndex = this.getSourceIndex(url);
		// 删除url和cancel方法
		urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1);
		sourceIndex !== -1 && this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
	}

	request<T>(config: RequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			// 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
			if (config.interceptors?.requestInterceptors) {
				config = config.interceptors.requestInterceptors(config);
			}
			const url = config.url;
			// url存在保存取消请求方法和当前请求url
			if (url) {
				this.requestUrlList?.push(url);
				config.cancelToken = new axios.CancelToken((c) => {
					this.cancelRequestSourceList?.push({
						[url]: c,
					});
				});
			}
			this.instance
				.request<any, T>(config)
				.then((res) => {
					// 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
					if (config.interceptors?.responseInterceptors) {
						res = config.interceptors.responseInterceptors<T>(res);
					}
					resolve(res);
				})
				.catch((err: any) => {
					reject(err);
				})
				.finally(() => {
					url && this.delUrl(url);
				});
		});
	}
	// 取消请求
	cancelRequest(url: string | string[]) {
		if (typeof url === 'string') {
			// 取消单个请求
			const sourceIndex = this.getSourceIndex(url);
			sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]();
		} else {
			// 存在多个需要取消请求的地址
			url.forEach((u) => {
				const sourceIndex = this.getSourceIndex(u);
				sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]();
			});
		}
	}
	// 取消全部请求
	cancelAllRequest() {
		this.cancelRequestSourceList?.forEach((source) => {
			const key = Object.keys(source)[0];
			source[key]();
		});
	}
}

export default Request;
