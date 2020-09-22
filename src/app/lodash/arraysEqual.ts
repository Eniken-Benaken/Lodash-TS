import isObject from './isObject';
import objEquals from './objEquals';
import flattenDeep from './Array-flattenDeep';

const arraysEqual = (arr1: Array<any>, arr2: Array<any>):boolean => {
	/** 
	 * if for some reason we didn't get the arrays
	 * but for some reason got falsey values
	 * we compare them with Object.is
	*/
	if(!arr1 && !arr2) {
		if(Object.is(arr1,arr2)) return true;
		else return false;
	}
	/**
	 * compare initial arrays length 
	 * if != r: false;
	 */
	if(arr1.length !== arr2.length) return false;
	/**
	 * flatten both arrays
	 * checking if length is still equals;
	 */
	let array1: Array<any> = flattenDeep(arr1);
	let array2: Array<any> = flattenDeep(arr2);
	if(array1.length !== array2.length) return false;
	
	/**
	 * check every item 
	 * if Object call objEquals which recursively checks if objs are equal
	 * else check equality using Object.is
	 */
	for (let i = 0; i < array1.length; i++) {
		if(isObject(array1[i])) {
			if(isObject(array1[i]) !== isObject(array2[i])) return false;
			else if(!objEquals(array1[i],array2[i])) return false;
			else continue;
		} 
		if(!Object.is(array1[i],array2[i])) return false;
	}	
	return true;
}

export default arraysEqual;
