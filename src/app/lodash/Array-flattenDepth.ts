import flatten from './Array-flatten';
const flattenDepth = (array: Array<any>, depth: number): Array<any> => {
	/**
	 * flatten array depth times
	 */
	let arrayToFlatten = [...array];
	for(let i = 0; i < depth; i++) {
		arrayToFlatten = flatten(arrayToFlatten);
	}
	return arrayToFlatten;
}

export default flattenDepth;
