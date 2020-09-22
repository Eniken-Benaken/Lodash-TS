const pullAt = (array: Array<any>,values:Array<number>): Array<any> => {
	console.log(array);
	let removed: Array<any> = [];
	for (let value of values) {
		removed.push(...array.splice(value,1));
	}
	console.log(array);
	return removed;
}

export default pullAt;
