export const concat = (arrayToConcatWith:Array<any>,...values:any) => {
	let array = [...arrayToConcatWith];
	for(let value of values) {
		debugger;
		array.push(value);
	}
	console.log(array); //return it
}