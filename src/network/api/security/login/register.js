/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 13:29:14
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 13:35:26
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import OLPRequest from '../../../request/index';
import MODULE_URL from './index';

export const userRegister = (data) => {
	return OLPRequest({
		url: MODULE_URL + '/register/',
		method: 'POST',
		data,
	});
};
