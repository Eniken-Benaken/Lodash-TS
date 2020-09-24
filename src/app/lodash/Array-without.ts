import Equals from './Equals';

const without = (array: Array<any>,values:Array<any>): Array<any> => {
	let arrayWithout: Array<any> = [...array];
	for (let value of values) {
		arrayWithout = arrayWithout.filter(entry => {
			if(Equals(value,entry)) return false;
			else return true;
		});
	}
	return arrayWithout;
}

export default without;
