/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 12:05:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:25:49
 * @Description:模糊查询用户
 * @Email: ndliujunqi@outlook.com
 */

import MODULE_URL from '.';
import OLPRequest from '../../request';

// interface fuzzyQueryParams {
//   pageNum: number;
//   pageSize: number;
//   course?: string;
//   nickname?: string;
//   school?: string;
//   username?: string;
// }

const fuzzyQueryUsers = (data) => {
  return OLPRequest({
    url: MODULE_URL + `/like`,
    method: 'GET',
    data,
  });
};

export default fuzzyQueryUsers;
