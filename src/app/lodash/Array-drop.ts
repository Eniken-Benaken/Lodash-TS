export const drop = (array:Array<any>, howManyToDrop: number) => {
	let slice: Array<any> = [];
	for (let i=howManyToDrop; i<array.length; i++) slice.push(array[i]);
	console.log(slice);
}