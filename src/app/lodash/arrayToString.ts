import objToString from './objectToString';
import isObject from './isObject';

const arrayToString = (array: Array<any>):string => {
	let str: string = '[';
	if(Array.isArray(array)) {
		let preMaxCount = array.length-1;
		for (let i = 0; i<array.length;i++) {
			if(i<preMaxCount) {
				if(Array.isArray(array[i])) {
					str=str+arrayToString(array[i])+",";
					continue;
				}
				if(isObject(array[i])) {
					str=str+objToString(array[i])+",";
					continue;
				}
				if(typeof array[i] === 'string') {
					str=`${str}"${array[i]}",`;
					continue;
				}
				if(typeof array[i] === "undefined" || isNaN(array[i]) || !isFinite(array[i])) {
					str=str+array[i]+",";
					continue;
				}
				str=str+JSON.stringify(array[i])+",";
			}
			else {
				if(Array.isArray(array[i])) {
					str=str+arrayToString(array[i])+"]";
					continue;
				}
				if(isObject(array[i])) {
					str=str+objToString(array[i])+"]";
					continue;						
				}
				if(typeof array[i] === 'string') {
					str=`${str}"${array[i]}"]`;
					continue;
				}
				if(typeof array[i] === "undefined" || isNaN(array[i]) || !isFinite(array[i])) {
					str=str+array[i]+"]";
					continue;
				}
				str=str+JSON.stringify(array[i])+"]";
			}
		}
	}
	else throw new Error("Not an Array");
	return str;
}

export default arrayToString;
