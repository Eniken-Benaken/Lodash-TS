import removeAt from './Array-removeAt';
import lastIndexOf from './Array-lastIndexOf';

const unic = (array: Array<any>): Array<any> => {
	if(!array) throw new Error("Not an Array");
	if(array.length === 1) return array;
	let contestants: Array<any> = [...array];
	let unique: Array<any> = [];
	while(contestants.length>=1) {
		if(lastIndexOf(contestants,contestants[0]) === 0) {
			unique.push(contestants.shift());
		}
		else {
			contestants = removeAt(contestants,[lastIndexOf(contestants,contestants[0])]);
		}
	}
	return unique;
};

export default unic;
