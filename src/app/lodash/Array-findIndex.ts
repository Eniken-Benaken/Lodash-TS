const findIndex = (array: Array<any>, checkingFunc: Function, startIndex?: number): number => {
	/**
	 * Looks for match using checkingFunc starting from startIndex or from 0
	 */
	let sIndex: number | undefined = startIndex;
	if(sIndex === undefined) sIndex = 0;
	for (let i =sIndex; i<array.length; i++) {
		if(checkingFunc(array[i])) return i;
	}
	return -1;
}

export default findIndex;
