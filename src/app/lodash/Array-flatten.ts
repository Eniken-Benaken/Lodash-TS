const flatten = (array: Array<any>) => {
	/**
	 * every item of array is checked for being an array
	 * if subarray found it's entries are pushed to the flattenedArray variable
	 * else push item to flattendeArray
	 */
	let flattenedArray: Array<any> = [];
	for (let item of array) {
		if(Array.isArray(item)) {
			for(let entry of item) {
				flattenedArray.push(entry)
			}
		}
		else flattenedArray.push(item)
	}
	return(flattenedArray);
}

export default flatten;
