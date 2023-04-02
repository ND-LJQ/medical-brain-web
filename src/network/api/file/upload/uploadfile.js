/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 13:34:42
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 16:55:42
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import OLPRequest from '../../../request/index';
import obj from './index';

export const fileUpload = (data) => {
	return OLPRequest({
		url: obj.MODULE_URL + '/testfile/',
		method: 'POST',
		data,
	});
};
