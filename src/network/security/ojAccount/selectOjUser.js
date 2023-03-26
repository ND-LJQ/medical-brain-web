/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 10:41:04
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-26 19:38:45
 * @Description:查询单个用户
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '../../request';

const selectOjUser = (data) => {
    return OLPRequest({
        url: MODULE_URL + `/${data}`,
        method: 'GET',
    });
};

export default selectOjUser;