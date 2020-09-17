import intersection from './Array-intersection';

const intersectionMulty = (arrays: Array<Array<any>>): Array<any> => {
	if(!arrays) return [];
	let result: Array<any> = [];
	if(Array.isArray(arrays)) {
		for (let i = 0; i<arrays.length; i++) {
			if (!Array.isArray(arrays[i])) throw new Error("You passed wrong argument, there must be an array");
			if(i===0) result = intersection(arrays[i],arrays[i+1]);
			if(i===1) continue;
			else result = intersection(result,arrays[i]);
		}
		return result;
	}
	else return result;
}

export default intersectionMulty;