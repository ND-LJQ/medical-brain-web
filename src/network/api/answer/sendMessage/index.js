/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 15:40:33
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 15:42:06
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
const MODULE_URL = '/answer/';

export const sendMessage = (data) => {
	return OLPRequest({
		url: MODULE_URL + '?ask_content=' + `${data}`,
		method: 'GET',
	});
};
