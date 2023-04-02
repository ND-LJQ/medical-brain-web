import OLPRequest from '../../../request/index';
import obj from './index';

export const onlinePreview = (data) => {
	return OLPRequest({
		url: obj.MODULE_URL + '/',
		method: 'GET',
		data,
	});
};
