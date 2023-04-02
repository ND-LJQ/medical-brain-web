/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:11:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 13:35:56
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { bindUser } from './bindUser';
import { userLogin } from './login';
import { userLogout } from './logout';
import { renderUser } from './render';
import { userRegister } from './register';

const LoginAPI = {
	bindUser,
	userLogin,
	userLogout,
	renderUser,
	userRegister,
};
const MODULE_URL = '/login';
export default { LoginAPI, MODULE_URL };
