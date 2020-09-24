const removeAt = (array: Array<any>,values:Array<number>): Array<any> => {
	for (let value of values) {
		array.splice(value,1);
	}
	return array;
}

export default removeAt;
