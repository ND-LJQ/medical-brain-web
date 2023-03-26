/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:16:14
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:34:09
 * @Description:通过用户id查询用户信息
 * @Email: ndliujunqi@outlook.com
 */

import Model from '.';
import OLPRequest from '../../request';

const queryUserByUserId = (id) => {
    return OLPRequest({
            url: Model.MODULE_URL + `/${id}`,
            method: 'GET',
        })
        .then(res => {
            if (res.code == 200) {
                return res.data.nickname;
            }
        })
        .catch(err => {
            console.log(err);
        });
};

export default queryUserByUserId;