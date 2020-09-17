import intersection from './Array-intersection';
import isObject from './isObject';

const intersectionMulty = (arrays: Array<Array<any>>,iteratee: Function): Array<any> => {
	if(!arrays) return [];
	let result: Array<any> = [];
	if(Array.isArray(arrays)) {
		for (let i = 0; i<arrays.length; i++) {
			if (!Array.isArray(arrays[i])) throw new Error("You passed wrong argument, there must be an array");
			if(i===0) {
				if(!Array.isArray(arrays[i+1])) throw new Error("You passed wrong argument, there must be an array, or at least more than one");				
				result = intersection(
					arrays[i].map(
						item => {
							if(Array.isArray(item) || isObject(item) || !item) return item;
							else return iteratee(item)
						}
					), arrays[i+1].map(
						item => {
							if(Array.isArray(item) || isObject(item) || !item) return item;
							else return iteratee(item)
						}
					)
				);
			}
			if(i===1) continue;
			else result = intersection(result,arrays[i].map(item => iteratee(item)))
		}
		return result;
	}
	else return result;
}

export default intersectionMulty;