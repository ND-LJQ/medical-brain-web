/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 10:02:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 10:02:10
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { createRouter, createWebHistory } from 'vue-router';
// 引入路由各页面配置
import routes from './routes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ElLoading } from 'element-plus';

NProgress.configure({ showSpinner: false }); // 配置NProgress

// 配置router对象
const router = createRouter({
	history: createWebHistory(),
	routes,
});
const routerVariable = {
	loadingInstance: null,
};

const loadingOptions = {
	lock: true,
	text: 'Loading',
	background: 'rgba(0, 0, 0, 0.7)',
};

//前置路由守卫
router.beforeEach(async (to, from, next) => {
	routerVariable.loadingInstance = ElLoading.service(loadingOptions);
	// 监听路由器准备就绪事件
	// app.config.globalProperties.$isLoading = true;
	// 执行下一个导航钩子函数s
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
	// 关闭loading并继续导航
	routerVariable.loadingInstance.close();
	// 隐藏loading并继续导航
	// app.config.globalProperties.$isLoading = false;
});

export default router;
