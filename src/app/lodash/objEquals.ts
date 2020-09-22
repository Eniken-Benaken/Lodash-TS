import isObject from './isObject';
import arraysEqual from './arraysEqual';
const objEquals = (a: Object, b: Object):boolean => {
	/** 
	 * if for some reason we didn't get the arrays
	 * but for some reason got falsey values
	 * we compare them with Object.is
	*/
	if(!a && !b) {
		if(Object.is(a,b)) return true;
		else return false;
	}
	
	/**
	 * extracting propertyNames of Objects
	 * if propertyNames lists aren`t equal => false, else continue comparation;
	 */
	let aPropNames: Array<string> = Object.getOwnPropertyNames(a);
	let bPropNames: Array<string> = Object.getOwnPropertyNames(b);
	if(aPropNames.length !== bPropNames.length) return false;
	/**
	 * We will check every prop for equality
	 * if the value is Object objEquals is called recursively
	 * if the value is Array arraysEqual is called
	 * if !Array|Object check values equality using sameValueZero algorithm
	 */
	for (let i = 0; i < aPropNames.length; i++) {
		let propName: string = aPropNames[i];
		if(Array.isArray((a as any)[propName])) {
			if(Array.isArray((a as any)[propName]) !== Array.isArray((b as any)[propName])) return false;
			else if(!arraysEqual((a as any)[propName],(b as any)[propName])) return false;
		}
		if(isObject((a as any)[propName])) {
			if(isObject((a as any)[propName]) !== isObject((b as any)[propName])) return false;
			else if(!objEquals((a as any)[propName],(b as any)[propName])) return false;
			else continue;
		}
		if(!Object.is((a as any)[propName],(b as any)[propName])) return false;		
	}
	return true;
};

export default objEquals;
