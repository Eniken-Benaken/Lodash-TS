const pullAt = (array: Array<any>,values:Array<number>): Array<any> => {
	let removed: Array<any> = [];
	for (let value of values) {
		removed.push(...array.splice(value,1));
	}
	return removed;
}

export default pullAt;
