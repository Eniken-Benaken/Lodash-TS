import Equals from './Equals';

const intersection = (array1: Array<any>,array2: Array<any>): Array<any> => {
	let result: Array<any> = []
	if(!array1 || !array2) return [];
	if(Array.isArray(array1)&&Array.isArray(array2)) {
		for(let i = 0; i<array1.length; i++) {
			for (let j = 0; j<array2.length; j++) {
				if(Equals(array1[i],array2[j])) {
					result.push(array1[i]);
					break;
				}
			}
		}	
		return result;
	}
	else return [];
}

export default intersection;
