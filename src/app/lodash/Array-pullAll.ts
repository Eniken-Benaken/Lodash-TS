import Equals from './Equals';

const pullAll = (array: Array<any>,values:Array<any>): Array<any> => {
	for (let value of values) {
		array = array.filter(entry => {
			if(Equals(value,entry)) return false;
			else return true;
		});
	}
	return array;
}

export default pullAll;
