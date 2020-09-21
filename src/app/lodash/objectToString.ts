import arrayToString from './arrayToString';
import isObject from './isObject';
const objToString = (obj: Object) => {
	let str: string = "{";
	let propNames: Array<string> = Object.getOwnPropertyNames(obj);
	let preMaxCount = propNames.length - 1;
	let count: number = 0;

	if(Array.isArray(obj)) throw new Error("To make array a string use arrayToString module;");
	if(obj === null || !obj) throw new Error("This function Doesn't accept falsy values");
	for (let [propName,value] of Object.entries(obj)) {
		if(count < preMaxCount) {
			if (Array.isArray(value)) {
				str=`${str}${propName}: ${arrayToString(value)},`;
				count++;
				continue;				
			}
			if(isObject(value)) {
				str=`${str}${propName}: ${objToString(value)},`;
				count++;
				continue;
			}
			if(typeof value === 'string') {
				str=`${str}${propName}: "${value}",`;
				count++;
				continue;
			}
			if(typeof value === "undefined" || isNaN(value as any) || !isFinite(value as any)) {
				str=`${str}${propName}: ${value},`;
				count++;
				continue;
			}
			else {
				str=`${str}${propName}: ${JSON.stringify(value)},`;
				count++;
				continue;
			}
		}
		else {
			if(Array.isArray(value)) {
				str=`${str}${propName}: ${arrayToString(value)}}`;
				count++;
				continue;	
			}
			if(isObject(value)) {
				str=`${str}${propName}: ${objToString(value)}}`;
				count++;
				continue;
			}
			if(typeof value === 'string') {
				str=`${str}${propName}: "${value}"}`;
				count++;
				continue;
			}
			if(typeof value === "undefined" || isNaN(value as any) || !isFinite(value as any)) {
				str=`${str}${propName}: ${value}}`;
				count++;
				continue;
			}
			else {
				str=`${str}${propName}: ${JSON.stringify(value)},`;
				count++;
				continue;
			}
		}
	}
	return str;
}

export default objToString;
