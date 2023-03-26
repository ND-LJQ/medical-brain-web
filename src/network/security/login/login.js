/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:39:43
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:17:42
 * @Description:用户登录
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '../../request';


export const userLogin = (data) => {
  return OLPRequest({
    url: BASE_URL + '/login',
    method: 'POST',
    data,
  });
};
