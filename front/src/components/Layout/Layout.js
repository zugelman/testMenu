import React , { useEffect, useState } from "react";
import { useLocation, Outlet } from 'react-router-dom';
import styles from './Layout.module.sass';
import classnames from 'classnames';
import { Menu } from '../../components/Menu';
import { getTree } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getTree as getStateTree, setTreeData } from '../../store/treedata';

export const Layout = () => {

	const dispatch = useDispatch();
	const tree = useSelector(getStateTree);
	const location = useLocation();

	useEffect(()=>{
		(async()=>{
			try{
				const treeData = await getTree({path: location.pathname});
				dispatch(setTreeData(treeData));
			}catch(error){
				console.log(error);				
			};					
		})();
	}, [location]);

	return(
		<div className={classnames(styles.wrap)}>
			<Menu tree={tree}/>
			<Outlet/>
		</div>
	);
}

