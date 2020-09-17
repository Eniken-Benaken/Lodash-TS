const differenceWith = (array1:Array<any>, array2:Array<any>, comparator:Function) => {
	/**
	 * Func looks for the unic values of array1 compared to array2,
	 * using comparator to check equality of entries
	 * if equal found => it's not unic for array1 => so it removed
	 */
	let different = new Set(array1);
	for(let item of different) {
		for(let entry of array2) if(comparator(item,entry)) {
			different.delete(item); break;
		}
	};
	return [...different];
};

export default differenceWith;