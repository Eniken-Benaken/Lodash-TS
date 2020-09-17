/**
 * Attempt to create SameValueZero indexOf using [ES6]Sets
 */
import Equals from './Equals';
const indexOf = (array: Array<any>,value: any, startIndex?: number) => {
	/**
	 * if array is empty return -1
	 */
	let length: number | undefined = array == null ? 0 : array.length; 
	if (!length) return -1;

	/**
	 * if startIndex isn't specified set index to 0
	 */
	let index: number | undefined = startIndex == null ? 0 : startIndex;

	/**
	 * if index is Positive 
	 * start checking every item of array for equality with value
	 */
	if(index >= 0) {
	for (index; index<array.length;index++) {
		if (Equals(array[index],value)) return index;
	}
	return -1;
	} 
	/**
	 * if startIndex is Negative 
	 * startIndex is used as an offset from the end of array
	 */
	else {		
		index = array.length-1+index;
		for (index; index<array.length; index++) {
			if (Equals(array[index],value)) return index;
		}
		return -1;
	}
};
export default indexOf;