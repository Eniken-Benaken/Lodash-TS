import isObject from './isObject';
import Equals from './Equals';
import difference from './Array-difference';
import differenceWith from './Array-differenceWith';

const differenceBy = (array1:Array<any>, array2:Array<any>, iteratee:Function) => {
	/**
	 * Func applies iteratee to every element in both arrays
	 * then arrays compared to find unic for the array1 values
	 * ! Iteratee will not be applied to Arrays, objects or falsey values
	 */
	let iteratedArray1:Array<any> = array1.map(item => {
		if(isObject(item)) return item;
		if(Array.isArray(item)) return item;
		if(!item) return item;
		else return iteratee(item);
	});
	let iteratedArray2:Array<any> = array2.map(item => {
		if(isObject(item)) return item;
		if(Array.isArray(item)) return item;
		if(!item) return item;
		else return iteratee(item);
	});
	let different = difference(iteratedArray1,...iteratedArray2);
	return different;
};

export default differenceBy;
