import OLPRequest from '../../../request/index';
import obj from './index';

export const getFileList = (token) => {
	return OLPRequest({
		url: obj.MODULE_URL + '/getallfile/',
		method: 'GET',
		token,
	});
};
