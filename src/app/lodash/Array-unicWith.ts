import removeAt from './Array-removeAt';
import lastIndexOfWith from './Array-lastIndexOfWith';

const unicWith = (array: Array<any>, comparator: Function): Array<any> => {
	if(!array) throw new Error("Not an Array");
	if(array.length === 1) return array;
	let contestants: Array<any> = [...array];
	let unique: Array<any> = [];
	while(contestants.length>=1) {
		if(lastIndexOfWith(contestants,contestants[0],comparator) === 0) {
			unique.push(contestants.shift());
		}
		else {
			contestants = removeAt(contestants,[lastIndexOfWith(contestants,contestants[0],comparator)]);
		}
	}
	return unique;
};

export default unicWith;
