import Equals from './Equals';

const pullAllWith = (array: Array<any>,values:Array<any>,Comparator?: Function): Array<any> => {
	if(!Comparator) {
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
				if(Comparator(value,entry)) return false;
				else return true;
			});
		}
	}
	return array;
}

export default pullAllWith;
