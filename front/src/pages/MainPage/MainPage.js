import React , { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import styles from './MainPage.module.sass';
import classnames from 'classnames';
import { Menu } from '../../components/Menu';
import { Content } from '../../components/Content';
import { getTree } from '../../api';

export const MainPage = () => {

	const initialState = {
		tree: [],
		content: ""
	}
	const [ tree, setTree ] = useState(initialState);
	const location = useLocation();

	console.log(tree);

	useEffect(()=>{
		(async()=>{
			try{
				const treeData = await getTree({path: location.pathname});
				setTree(treeData);
			}catch(error){
				console.log(error);
			};					
		})();
	}, [location]);

	return(
		<div className={classnames(styles.wrap)}>
			<Menu tree={tree.tree} setTree={setTree}/>
			{/*<Content message={message}/>*/}
		</div>
	);
}

