/*
 * @Author: ND_LJQ
 * @Date: 2023-04-02 13:34:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 15:18:33
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { fileUpload } from './uploadfile';
import { getFileList } from './getFileList';
const MODULE_URL = '/file';

const upload = {
	fileUpload,
	getFileList,
};

export default { MODULE_URL, upload };
