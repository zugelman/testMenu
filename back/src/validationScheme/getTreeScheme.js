import { object, string, number, date } from 'yup';

const testName = "test-name";
let errorMessage = "";

function validatePath(path){

	let pathNotCorrect = "Не верно указан Путь";
	let pathIsEmpty = "Укажите Путь";
	let rule = new RegExp(/^[\/\-a-z\d%_.~+]+$/g);
		
	let isEmpty = (path === "" || !Boolean(path));
	let isIncorrect = !path.match(rule);

	if (isEmpty){
		errorMessage = pathIsEmpty;
	} else if (isIncorrect){
		errorMessage = pathNotCorrect;
	} else {
		return true;
	}

	return false;
}

export const getTreeScheme = object({
	path: string().test(testName, ()=>errorMessage, validatePath)
});