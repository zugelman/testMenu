import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import { treedataReducer } from './treedata';


const reducer = combineReducers({
  treedata: treedataReducer
});

const composeEnhancers = composeWithDevTools({ name: 'TestMenu' });
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default { store };
