const fill = (arrayToFill: Array<any>, valueToFillWith: any, startPosition?: number, endPosition?: number ) => {
	/**
	 * func fills passed arrayToFill with valueToFillWith(returns MODIFIED version)
	 * starting from startPosition(if it's undefined => form 0)
	 * ending with endPosition(if it's undefined => fills to the end of array)
	 */
	let sPosition: number | undefined  = startPosition;
	if(sPosition === undefined) sPosition = 0;
	let ePosition: number | undefined = endPosition;
	if(ePosition === undefined) ePosition = arrayToFill.length;
	else ePosition++;
	for (let i:number = sPosition; i<ePosition; i++) {
		arrayToFill[i] = valueToFillWith;
	}
}

export default fill;
