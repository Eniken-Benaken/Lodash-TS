const takeRightWhile = (array:Array<any>, predicatee: Function): Array<any> => {
	let removed: Array<any> = [];
	while(predicatee(array[array.length-1])) removed.push(array.pop());
	return removed;
}

export default takeRightWhile;
