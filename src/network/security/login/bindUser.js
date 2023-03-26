/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:07:34
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:13:25
 * @Description:第三方账户的绑定，要把前面的发送过去的uuid和source返回过来
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '../../request';

export const bindUser = (data) => {
    return OLPRequest({
        url: BASE_URL + '/aliLogin',
        method: 'GET',
        data,
    });
};