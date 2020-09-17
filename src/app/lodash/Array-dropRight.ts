export const dropRight = (array:Array<any>, howManyToDrop: number) => {
	let slice: Array<any> = [];
	for (let i=array.length-howManyToDrop-1; i>=0; i--) slice[i] = array[i];
	console.log(slice);
}