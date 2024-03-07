import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.sass';
import classnames from 'classnames';
import CloseFolder from '../../assets/closefolder.svg';
import OpenFolder from '../../assets/openfolder.svg';

export const MenuItem = ({menuName, link, stateFolder, active}) => {
	return(
		<Link className={classnames(styles.wrapitem, {
			[styles["active"]]: active 
		})}
		to={link}
		>
			{Boolean(stateFolder) && (<img src={(stateFolder==="close")?CloseFolder:OpenFolder} alt="folder" className={classnames(styles.iconfolder)}/>) }
			<span className={classnames(styles.textitem)}>{menuName}</span>		
		</Link>
	);
}