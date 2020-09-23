const takeRight = (array:Array<any>, howManyToTake: number): Array<any> => {
	return array.slice(0,array.length-howManyToTake);
}

export default takeRight;
