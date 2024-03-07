import { 
  SET_CONTENT,
  SET_TREE_DATA } from './actions';


const initialState = {
	tree:[],	
	content: ""
};

export const treedataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      return {
            ...state,
            content: action.payload   
      }; 
    case SET_TREE_DATA:
      return action.payload;        
    default:
      return state;
  }
};