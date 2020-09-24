import pull from './Array-pull';
import lastIndexOfWith from './Array-lastIndexOfWith';

const unionBy = (arrays: Array<Array<any>>,comparator: Function): Array<any> => {
	let contestants: Array<any> = [];
	if(arrays.length === 1) return arrays[0];
	for (let i = 0; i<arrays.length; i++) {
		contestants = [...contestants,...arrays[i]];
	}
	let unic: Array<any> = [];
	while(contestants.length>=1) {
		if(lastIndexOfWith(contestants,contestants[0],comparator) === 0) {
			unic.push(contestants.shift());
		}
		else {
			contestants = pull(contestants,contestants[0]);
		}
	}
	return unic;
};

export default unionBy;
