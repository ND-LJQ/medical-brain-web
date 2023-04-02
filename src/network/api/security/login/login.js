/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:39:43
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-04 12:56:15
 * @Description:用户登录
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
import MODULE_URL from './index';

export const userLogin = (data) => {
	return OLPRequest({
		url: MODULE_URL + '/login/',
		method: 'POST',
		data,
	});
};
