import React from 'react';
import { MenuItem } from '../MenuItem';
import styles from './Menu.module.sass';
import classnames from 'classnames';


export const Menu = ({tree}) => {

	let globalIndex = 0;

	const parseTree = (tree, path="", shift=[]) => {
		const components = [];		
		
		for (let i = 0; i < tree.length; i++){			

			if (!Array.isArray(tree[i])){						
				components.push(
					<React.Fragment key={globalIndex}>
						<div className={classnames(styles.wrapdelimetr)}>
							{shift.map((type, index)=><div key={index} className={classnames({
								[styles["emptysmall"]]: type==="empty",
								[styles["verticalsmall"]]: type==="line",
							})}></div>)}
							{(globalIndex > 0) && (<div className={classnames(styles.verticalsmall)}></div>)}
						</div>					
						<div className={classnames(styles.wrapitem)}>
							{shift.map((type, index)=><div key={index} className={classnames({
								[styles["emptybig"]]: type==="empty",
								[styles["verticalbig"]]: type==="line",
							})}></div>)}

							{(globalIndex > 0) && (<div className={classnames((((i === tree.length-2 && Array.isArray(tree[i+1])) || i >= tree.length-1)?styles.leftcorner:styles.tee))}></div>)}			
							<MenuItem 
								menuName={tree[i].menuName}
								link={`${path?path+"/":path}${tree[i].route}`}
								stateFolder={(!(i < tree.length-1 && Array.isArray(tree[i+1])))?false:((tree[i+1].length)?"open":"close")}
								active={tree[i].active}								
							/>
						</div>
					</React.Fragment>				
				);
				globalIndex++;

			} else if(tree[i].length){
				let tempShift = (globalIndex > 1)? [...shift, ((i < tree.length-1)?"line":"empty")] : [...shift];
				components.push(parseTree(tree[i], `${path}/${tree[i-1].route}`, tempShift));
			}			
		}
		
		return components;
	}

	return(
		<div className={classnames(styles.menu)}>
		{parseTree(tree)}
		</div>
	);	
}