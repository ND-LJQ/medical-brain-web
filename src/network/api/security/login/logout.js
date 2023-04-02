/*
 * @Author: ND_LJQ
 * @Date: 2022-07-17 09:41:37
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:24:11
 * @Description:用户注销
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
import MODULE_URL from './index';

export const userLogout = (token) => {
	return OLPRequest({
		url: MODULE_URL + '/logout',
		method: 'POST',
		headers: {
			token,
		},
	});
};
