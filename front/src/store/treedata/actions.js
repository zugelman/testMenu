import { v4 as uuid } from 'uuid';
import { getTree } from './selectors';
export const SET_CONTENT = '@treedata/SET_CONTENT';
export const SET_TREE_DATA = '@treedata/SET_TREE_DATA';


export const setContent = (payload) => async(dispatch) => {
	dispatch({
		type: SET_CONTENT,
		payload
	});
}

export const setTreeData = (payload) => async(dispatch) => {
	dispatch({
		type: SET_TREE_DATA,
		payload
	});
}




