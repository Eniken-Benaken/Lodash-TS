const lastIndexOfWith = (array: Array<any>, value: any, comparator:Function, startIndex?: number) => {
	/**
	 * if array is empty return -1
	 */
	let length: number | undefined = array == null ? 0 : array.length; 
	if (!length) return -1;

	/**
	 * if startIndex isn't specified set index to 0
	 * if negative startIndex goes out of array returns -1 
	 */
	let index: number | undefined = startIndex == null ? array.length-1 : startIndex;
	if(array.length-1+index<0) return -1;
	/**
	 * if index is Positive 
	 * start checking every item of array for equality with value
	 */
	if(index >= 0) {
	for (index; index>=0;index--) {
		if (comparator(array[index],value)) return index;
	}
	return -1;
	} 
	/**
	 * if startIndex is Negative 
	 * startIndex is used as an offset from the end of array
	 */
	else {		
		index = array.length-1+index;
		for (index; index>=0; index--) {
			if (comparator(array[index],value)) return index;
		}
		return -1;
	}
};

export default lastIndexOfWith;
