/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:07:34
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 13:22:28
 * @Description:第三方账户的绑定，要把前面的发送过去的uuid和source返回过来
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
import MODULE_URL from './index';

export const bindUser = (data) => {
	return OLPRequest({
		url: MODULE_URL,
		method: 'GET',
		data,
	});
};
