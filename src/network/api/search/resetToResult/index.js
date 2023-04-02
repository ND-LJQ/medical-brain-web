/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 15:30:49
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 15:33:23
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
const MODULE_URL = '/context/';

export const resetToResult = (data) => {
	return OLPRequest({
		url: MODULE_URL,
		method: 'GET',
		data,
	});
};
