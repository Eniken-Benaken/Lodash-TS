const drop = (array:Array<any>, howManyToDrop: number) => {
	//func return array with dropped howManyToDrop items
	return array.slice(howManyToDrop,array.length);
}

export default drop;
