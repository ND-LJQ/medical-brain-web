/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 15:10:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-03 15:31:05
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import OLPRequest from '../../../request/index';
import obj from './index';

export const onlinePreview = (fileName) => {
	return OLPRequest({
		url: obj.MODULE_URL + `/?filename=${fileName.replace(/\.pdf$/, '')}`,
		method: 'GET',
	});
};
