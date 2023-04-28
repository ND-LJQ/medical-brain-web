/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 15:13:32
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:45:00
 * @Description: 用户Store模块
 * @Email: Rv_Jiang@outlook.com
 */
import { USER_ROLE } from '../../utils/constants';
import storage from '../../utils/storage/index';

const UserInfo = {
	uid: '',
	token: '',
};

export const userStore = {
	namespaced: true,
	state: {
		userId: storage.get('userId'),
		token: storage.get('token'),
	},
	getters: {
		userId: (state) => state.userId || '',
		token: (state) => state.token || '',

		/* 权限判断-start */
		// 判断当前用户是否可身份验证
		isAuthenticated: (state, getters) => {
			return !!getters.token;
		},
		/* 权限判断-end */
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			storage.set('token', token);
		},
		setUId(state, uId) {
			state.userId = uId;
			storage.set('userId', uId);
		},
	},
	actions: {
		/* 用户信息修改-start */
		// 修改用户信息
		setUserInfo({ commit }, userInfo) {
			commit('setToken', userInfo.token);
			commit('setUId', userInfo.uid);
		},
		// 清空用户信息和token
		clearUserInfo({ commit }) {
			console.log('退出登录');
			commit('setToken', '');
			commit('setUId', '');
		},

		setToken({ commit }, token) {
			commit('setToken', token);
		},
		setUId({ commit }, uid) {
			commit('setUId', uid);
		},
		/* 用户信息修改-end */
	},
};

export default userStore;
