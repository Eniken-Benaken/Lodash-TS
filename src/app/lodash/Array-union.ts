import pull from './Array-pull';
import lastIndexOf from './Array-lastIndexOf';

const union = (arrays: Array<Array<any>>): Array<any> => {
	let contestants: Array<any> = [];
	if(arrays.length === 1) return arrays[0];
	for (let i = 0; i<arrays.length; i++) {
		contestants = [...contestants,...arrays[i]];
	}
	let unic: Array<any> = [];
	while(contestants.length>=1) {
		if(lastIndexOf(contestants,contestants[0]) === 0) {
			unic.push(contestants.shift());
		}
		else {
			contestants = pull(contestants,contestants[0]);
		}
	}
	return unic;
};

export default union;
