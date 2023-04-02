/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 15:04:17
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 16:59:04
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
import obj from './index';

export const fileDownload = (data) => {
	return OLPRequest({
		url: obj.MODULE_URL + '/',
		method: 'GET',
		data,
	});
};
