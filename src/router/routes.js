/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 16:54:30
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 16:54:30
 * @Description: 
 * @Email: ndliujunqi@outlook.com
 */

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/index.vue'),

    },
    {
        path: '/dataup',
        name: 'upload',
        component: () =>
            import ('../views/dataUpload.vue'),
    },
    {
        path: '/knowledgemap',
        name: 'knowledgeMap',
        component: () =>
            import ('../views/knowledgeMap.vue'),
    }
]
export default routes