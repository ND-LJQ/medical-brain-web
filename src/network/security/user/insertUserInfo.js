/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:29:33
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:25:07
 * @Description:增加用户
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '../../request';

// interface insertUserInfoParams {
//   // 昵称
//   nickname: string;
//   // 密码
//   password: string;
//   // 用户名
//   username: string;
// }

const addUser = (data) => {
  return OLPRequest({
    url: BASE_URL + '/useradd',
    method: 'POST',
    data,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export default addUser;
