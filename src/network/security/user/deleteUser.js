/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:52:29
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:28:45
 * @Description:删除用户
 * @Email: ndliujunqi@outlook.com
 */

import MODULE_URL from '.';
import OLPRequest from '../../request';

const deleteUserById = (id) => {
    return OLPRequest({
        url: MODULE_URL + `/${id}`,
        method: 'DELETE',
    });
};

export default deleteUserById;