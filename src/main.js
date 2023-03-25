import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
// 全局重置样式
import './assets/styles/reset/index.scss';
// ElementPlus 响应式隐藏class
import 'element-plus/theme-chalk/display.css';
//ElementPlus Icon
import * as Elicons from '@element-plus/icons-vue';
// 自定义主题
import './assets/styles/element/index.scss';


const app = createApp(App);

//全局注册elementplus icon
const _Elicons = Elicons;
Object.keys(Elicons).forEach(key => {
    app.component(key, _Elicons[key]);
});

app.use(router).mount('#app')