import { API_ROUTES } from '../consts';
import { ApiHelper, generateQuery } from '../utils';

export const getTree = (filters) => {
	const queryString = generateQuery(filters);
	return ApiHelper.get(`${API_ROUTES.GET_TREE}${queryString}`); 
}