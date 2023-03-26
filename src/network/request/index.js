/*
 * @Author: ND_LJQ
 * @Date: 2022-09-05 17:26:49
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:33:18
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import storage from '../../utils/storage';
import { useGetters } from '../../utils/useMapper';

class Request {
    constructor(config) {
        this.config = config;
        this.interceptors = {
            requestInterceptors: config.interceptors.requestInterceptors || ((config) => config),
            responseInterceptors: config.interceptors.responseInterceptors || ((result) => result),
        };
    }

    request(config) {
        return new Promise((resolve, reject) => {
            config = this.interceptors.requestInterceptors(config);
            setTimeout(() => {
                let result = this.config.data;
                if (config.url === '/error') {
                    result = {
                        code: 500,
                        message: '请求出错',
                        data: null,
                        msg: '请求出错',
                    };
                } else if (config.url === '/timeout') {
                    result = {
                        code: 408,
                        message: '请求超时',
                        data: null,
                        msg: '请求超时',
                    };
                } else {
                    result = {
                        code: 200,
                        message: '请求成功',
                        data: config.data,
                        msg: '请求成功',
                    };
                }
                result = this.interceptors.responseInterceptors(result);
                if (result.code === 200) {
                    resolve(result);
                } else {
                    reject(result);
                }
            }, this.config.timeout);
        });
    }

    cancelRequest(url) {
        console.log('取消请求', url);
    }

    cancelAllRequest() {
        console.log('取消所有请求');
    }
}


function computed(fn) {
    return fn();
}

function useMapper(mapperFn, namespace, mapper) {
    let storeFns;
    if (namespace) {
        storeFns = mapperFn(namespace, mapper);
    } else {
        storeFns = mapperFn(mapper);
    }
    const storeState = {};
    Object.keys(storeFns).forEach(key => {
        const fn = storeFns[key].bind({ $store: store });
        storeState[key] = computed(fn);
    });
    return storeState;
}

const request = new Request({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 60 * 5,
    interceptors: {
        requestInterceptors: config => {
            const userStore = useGetters('userStore', ['token']);
            if (config.headers) {
                config.headers.token = userStore.token.value;
            } else {
                config.headers = { token: userStore.token.value };
            }
            return config;
        },
        responseInterceptors: result => {
            return result;
        },
    },
});

const OLPRequest = (config) => {
    const { method = 'GET' } = config;
    if (method === 'get' || method === 'GET') {
        config.params = config.data;
    }
    return request.request(config);
};

const cancelRequest = (url) => {
    return request.cancelRequest(url);
};

const cancelAllRequest = () => {
    return request.cancelAllRequest();
};

export default OLPRequest;