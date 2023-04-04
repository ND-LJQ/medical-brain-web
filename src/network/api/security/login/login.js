/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:39:43
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-03 13:38:29
 * @Description:用户登录
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '../../../request/index';
import obj from './index';

export const userLogin = (data) => {
	return OLPRequest({
		url: obj.MODULE_URL + '/login/',
		method: 'POST',
		data,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
};

// return new Promise<ProblemData>(resolve => {
//   OLPRequest({
//     url: MODULE_URL + `/problem/${pid}`,
//     method: 'GET',
//   })
// .then(({ data }: { data: ProblemData }) => resolve(data))
// .catch(err => {
//   ElMessage.error(err);
// });
// });
