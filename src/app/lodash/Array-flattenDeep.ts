import flatten from './Array-flatten';
const flattenDeep = (array: Array<any>):Array<any> => {
	/**
	 * recursively flatten the array
	 */
	let flattenedDeeply: Array<any> = flatten(array);
	for(let entry of flattenedDeeply) {
		if(Array.isArray(entry)) flattenedDeeply = flattenDeep(flattenedDeeply);
	}
	return flattenedDeeply;
}

export default flattenDeep;