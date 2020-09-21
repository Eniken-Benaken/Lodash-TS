import isObject from './isObject';
import arrayToString from './arrayToString';
import objToString from './objectToString';

const toStr = (someValue: any) => {
	if(Array.isArray(someValue)) return arrayToString(someValue);
	if(isObject(someValue)) return objToString(someValue);
	if(typeof someValue === 'string') return `"${someValue}"`;
	if(typeof someValue === "undefined" || isNaN(someValue) || !isFinite(someValue)) return ""+someValue;
	else return JSON.stringify(someValue);
}

export default toStr;
