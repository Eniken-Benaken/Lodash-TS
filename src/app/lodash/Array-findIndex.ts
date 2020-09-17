export const findIndex = (array: Array<any>, checkingFunc: Function, startIndex?: number): number => {
	let sIndex: number | undefined = startIndex;
	if(sIndex === undefined) sIndex = 0;
	for (let i =sIndex; i<array.length; i++) {
		if(checkingFunc(array[i])) return i;
	}
	return -1;
}