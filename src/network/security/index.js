/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 10:03:52
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 22:27:12
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

export const BASE_URL = '/hunauojSecurity/security';

import Login from './login/index';
import User from './user/index';

const SecurityAPI = {
    Login,
    User,
};

export default SecurityAPI;