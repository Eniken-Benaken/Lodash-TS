export const fill = (arrayToFill: Array<any>, valueToFillWith: any, startPosition?: number, endPosition?: number ) => {
	let sPosition: number | undefined  = startPosition;
	if(sPosition === undefined) sPosition = 0;
	let ePosition: number | undefined = endPosition;
	if(ePosition === undefined) ePosition = arrayToFill.length;
	else ePosition++;
	for (let i:number = sPosition; i<ePosition; i++) {
		arrayToFill[i] = valueToFillWith;
	}
	console.log(arrayToFill)
}