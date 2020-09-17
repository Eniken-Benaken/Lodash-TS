export const findLastIndex = (array: Array<any>, checkingFunc: Function, startIndex?: number): number => {
	let sIndex: number | undefined = startIndex;
	if(sIndex === undefined) sIndex = array.length-1;
	for (let i =sIndex; i>0; i--) {
		if(checkingFunc(array[i])) return i;
	}
	return -1;
}