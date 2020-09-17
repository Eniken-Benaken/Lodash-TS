import isObject from './isObject';
import objEquals from './objEquals';
import arraysEqual from './arraysEqual';

const Equals = (value1: any, value2: any): boolean => {
	/** 
	 * if for some reason we didn't get the arrays
	 * but for some reason got falsey values
	 * we compare them with Object.is
	*/
	if(!value1 && !value2) {
		if(Object.is(value1,value2)) return true;
		else return false;
	}else if(!value1) return false;
	else if(!value2) return false;
	/**
	 * if value1 is Array
	 * check if value1 === value2
	 */
	if(Array.isArray(value1)) {
		return arraysEqual(value1,value2);
	}
	/**
	 * if value1 is Object
	 * check if value1 === value2
	 */
	if(isObject(value1)) {
		return objEquals(value1,value2);
	}
	/**
	 * check if value1 === value2 using sameValueZero algoritm
	 */
	return Object.is(value1,value2);
};

export default Equals;