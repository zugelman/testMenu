import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '../../store/treedata';
import styles from './Content.module.sass';
import classnames from 'classnames';
export const Content = () => {
	const content = useSelector(getContent);
	return(
		<div className={classnames(styles.wrap)}>
			<div className={classnames(styles.textcontent)}>{content}</div>
		</div>
	);
}