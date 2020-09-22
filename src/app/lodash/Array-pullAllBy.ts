import Equals from './Equals';

const pullAllBy = (array: Array<any>,values:Array<any>,iteratee?: Function): Array<any> => {
	if(!iteratee) {
		for (let value of values) {
			array = array.filter(entry => {
				if(Equals(value,entry)) return false;
				else return true;
			});
		}
	}
	else {
		for (let value of values) {
			array = array.filter(entry => {
				if(Equals(iteratee(value),iteratee(entry))) return false;
				else return true;
			});
		}
	}
	return array;
}

export default pullAllBy;
