/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 16:54:30
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-26 23:04:03
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/index.vue'),
	},
	{
		path: '/dataup',
		name: 'upload',
		component: () => import('../views/dataUpload.vue'),
	},
	{
		path: '/knowledgemap',
		name: 'knowledgeMap',
		component: () => import('../views/knowledgeMap.vue'),
	},
	{
		path: '/datasearch',
		name: 'datasearch',
		component: () => import('../views/dataSearch.vue'),
	},
	{
		path: '/smartqa',
		name: 'smartqa',
		component: () => import('../views/wisdomQA.vue'),
	},
	{
		path: '/viewpdf',
		name: 'viewpdf',
		component: () => import('../views/pdf.vue'),
	},
];
export default routes;
