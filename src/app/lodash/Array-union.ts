import Equals from './Equals';
import pull from './Array-pull';

const union = (arrays: Array<Array<any>>): Array<any> => {
	let set = new Set(arrays[0]);
	let contestants: Array<any> = [];
	if(arrays.length === 1) return [...set];
	for (let i = 1; i<arrays.length; i++) {
		contestants = [...contestants,...arrays[i]];
	}
	for (let item of contestants) {
		for(let entry of set) {
			if(Equals(entry,item)) { 
				set.delete(entry);
				contestants = pull(contestants,item);
				break;
			}
		}
	}
	for (let j = 0; j<contestants.length; j++){
		if(contestants.length>1) {
			for (let i = 1; i<contestants.length; i++) {
				if(Equals(contestants[j],contestants[i])) {
					contestants = pull(contestants, contestants[i]);
				}
			}
		}
	}
	return [...set,...contestants];
};

export default union;
