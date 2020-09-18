const dropRight = (array:Array<any>, howManyToDrop: number) => {
	//returns slice of array with howManyToDrop items dropped from the end
	return array.slice(0,array.length - howManyToDrop);
};

export default dropRight;
