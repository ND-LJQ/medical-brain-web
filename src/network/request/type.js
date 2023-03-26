/*
 * @Author: ND_LJQ
 * @Date: 2022-05-02 08:31:42
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-02 11:15:51
 * @Description:实例拦截器类的定义
 * @Email: ndliujunqi@outlook.com
 */
// 请求拦截器的接口定义
var RequestInterceptors = {
    // 请求拦截器
    requestInterceptors: function(config) { return config; },
    requestInterceptorsCatch: function(err) { return err; },

    // 响应拦截器
    responseInterceptors: function(config) { return config; },
    responseInterceptorsCatch: function(err) { return err; },
};

// 自定义传入参数的接口定义
var RequestConfig = {
    interceptors: RequestInterceptors,
};

// 取消请求的接口定义
var CancelRequestSource = {};