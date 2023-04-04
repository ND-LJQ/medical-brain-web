/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 09:34:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-03 06:34:46
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
// 全局重置样式
import './assets/styles/reset/index.scss';
// ElementPlus 响应式隐藏class
import 'element-plus/theme-chalk/display.css';
//ElementPlus Icon
import * as Elicons from '@element-plus/icons-vue';
// 自定义主题
import './assets/styles/element/index.scss';
// loading自定义组件
import Loading from './components/common/loading/index.vue';
// 引入动画库animate.css
import 'animate.css';

const app = createApp(App);

//全局注册elementplus icon
const _Elicons = Elicons;
Object.keys(Elicons).forEach((key) => {
	app.component(key, _Elicons[key]);
});

app.component('Loading', Loading);

app.use(router).use(store).mount('#app');
