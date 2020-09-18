import findIndex from "./Array-findIndex";

const findLastIndex = (array: Array<any>, checkingFunc: Function, startIndex?: number): number => {
	/**
	 * Looks for match moving back using checkingFunc 
	 * starting from startIndex or from end
	 */
	let sIndex: number | undefined = startIndex;
	if(sIndex === undefined) sIndex = array.length-1;
	for (let i =sIndex; i>0; i--) {
		if(checkingFunc(array[i])) return i;
	}
	return -1;
}

export default findLastIndex;
