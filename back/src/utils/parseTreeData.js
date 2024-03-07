export const parseTreeData = (path, models) => {
	const pathes = path.match(/(?!\/)[\-a-z\d%_.~+]+/g);
	let content, tree; 

	if (pathes){
		content = getContent(pathes, models);
		if (typeof content === "string"){
			tree = getTreeData(pathes, models);
			return {tree, content}; 
		} else {
			throw new Error("Не верный маршрут");
		}		
	} else {
		content = "";
		tree = getFirstBranchTreeData(models);
		return {tree, content};
	}

}

const getContent = (pathes, models) => {	
	for(let i = 0; i < models.length; i++){
		if ( i < models.length-1 && pathes.length > 1){			
			if (!Array.isArray(models[i]) && models[i].route === pathes[0] && Array.isArray(models[i+1])){
				// console.log("папка ->", pathes[0]);					
				return getContent(pathes.slice(1), models[i+1]);					
			}
		}
		if (pathes.length === 1 && !Array.isArray(models[i]) && models[i].route === pathes[0]) {
			// console.log("Последний пункт", pathes[0]);
			return models[i].content;
		}
	}
	return false;
}

const getTreeData = (pathes, models) => {
	const tree = [];
	for(let i = 0; i < models.length; i++){
		if (!Array.isArray(models[i])){
			let menuItem = {menuName:models[i].menuName, route:models[i].route};
			if (pathes.length === 1 && pathes == models[i].route) menuItem.active=true;
			tree.push(menuItem);
		}

		if (i < models.length-1 && Array.isArray(models[i+1])){
			tree.push(((models[i].route === pathes[0])?getTreeData(pathes.slice(1), models[i+1]):[]));
		}
	}

	return tree;	
}

const getFirstBranchTreeData = (models) => models.map(model=>(!Array.isArray(model))?{menuName:model.menuName, route:model.route}:[]);





 







