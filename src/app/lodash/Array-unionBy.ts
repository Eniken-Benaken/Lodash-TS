import pull from './Array-pull';
import lastIndexOfBy from './Array-lastIndexOfBy';

const unionBy = (arrays: Array<Array<any>>,iteratee: Function): Array<any> => {
	let contestants: Array<any> = [];
	if(arrays.length === 1) return arrays[0];
	for (let i = 0; i<arrays.length; i++) {
		contestants = [...contestants,...arrays[i]];
	}
	let unic: Array<any> = [];
	while(contestants.length>=1) {
		if(lastIndexOfBy(contestants,contestants[0],iteratee) === 0) {
			unic.push(contestants.shift());
		}
		else {
			contestants = pull(contestants,contestants[0]);
		}
	}
	return unic;
};

export default unionBy;
