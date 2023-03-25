/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 10:02:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 10:02:10
 * @Description: 
 * @Email: ndliujunqi@outlook.com
 */

import { createRouter, createWebHistory } from 'vue-router'
// 引入路由各页面配置
import routes from './routes'
// 配置router对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router