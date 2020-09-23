const takeWhile = (array:Array<any>, predicatee: Function): Array<any> => {
	let removed: Array<any> = [];
	while(predicatee(array[0])) removed.push(array.shift());
	return removed;
}

export default takeWhile;
