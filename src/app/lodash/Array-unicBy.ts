import removeAt from './Array-removeAt';
import lastIndexOfBy from './Array-lastIndexOfBy';

const unicBy = (array: Array<any>, iteratee: Function): Array<any> => {
	if(!array) throw new Error("Not an Array");
	if(array.length === 1) return array;
	let contestants: Array<any> = [...array];
	let unique: Array<any> = [];
	while(contestants.length>=1) {
		if(lastIndexOfBy(contestants,contestants[0],iteratee) === 0) {
			unique.push(contestants.shift());
		}
		else {
			contestants = removeAt(contestants,[lastIndexOfBy(contestants,contestants[0],iteratee)]);
		}
	}
	return unique;
};

export default unicBy;
