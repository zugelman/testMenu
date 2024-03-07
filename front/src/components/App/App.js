import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '../Layout';
import { Content } from '../Content';
import { ROUTES } from '../../consts';
import storeConfig from '../../store';
const { store } = storeConfig;

export function App() { 
  return (
  	<Provider store={store}>
	    <Router>      
	      <Routes>
	        <Route path={`${ROUTES.MAIN}`} element={<Layout/>}>
		        <Route path="*" element={<Content/>}/> 
	        </Route>       
	      </Routes>
	    </Router>
    </Provider>
  );
}
