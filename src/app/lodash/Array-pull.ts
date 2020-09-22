import Equals from './Equals';

const pull = (array: Array<any>,...values:Array<any>): Array<any> => {
	console.log(array);
	for (let value of values) {
		array = array.filter(entry => {
			if(Equals(value,entry)) return false;
			else return true;
		});
	}
	return array;
}

export default pull;
