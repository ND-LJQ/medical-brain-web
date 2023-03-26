/*
 * @Author: ND_LJQ
 * @Date: 2022-07-17 09:41:37
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:18:05
 * @Description:用户注销
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '../../request';

export const userLogout = (token) => {
  return OLPRequest({
    url: BASE_URL + '/logout',
    method: 'POST',
    headers: {
      token,
    },
  });
};
