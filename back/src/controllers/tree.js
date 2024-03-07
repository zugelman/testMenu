import { getTreeScheme } from "../validationScheme/index.js";
import { parseTreeData } from "../utils/index.js";
import { treeModel } from "../models/index.js";

export const getTree = async (req, res) => {
	try{
		const { path } = await getTreeScheme.validate(req.query,{abortEarly: false, stripUnknown: true});
		const treeData = parseTreeData(path, treeModel);		
		res.json({ success: true, ...treeData });
	} catch(error) {
      console.error(error);
      res.status(500).json(error);
	}
}