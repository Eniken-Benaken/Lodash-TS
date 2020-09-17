/* Unic for first compared to others*/
import isObject from './isObject';
import Equals from './Equals';
const difference = (array1:Array<any>, ...values:Array<any>) => {
	/** 
	 * Func looks for values unic for array1 compared to passed values
	*/
	let different = new Set();
	for(let item of array1) {
		different.add(item);
	};
	for (let i = 0; i < values.length; i++) {
		if (Array.isArray(values[i])) different.forEach(item => {
			if(Equals(item,values[i])) {
				different.delete(item);
			}
		});
		if (isObject(values[i])) different.forEach(item => {
			if(Equals(item,values[i])) {
				different.delete(item);
			}
		});
		else different.delete(values[i]);
	}
	return [...different];
};

export default difference;

/* Not included in second*/
// export const difference = (array1: Array<any>, ...values: Array<any>) => {
// 	let different = new Set();
// 	for (let i = 0; i < values.length; i++) {
// 		if (Array.isArray(values[i])) for (let item of values[i]) different.add(item);
// 		else different.add(values[i]);
// 	}
// 	for (let item of array1) {
// 		if (different.has(item)) {
// 			different.delete(item)
// 		}
// 	}
// 	console.log([...different]);
// };