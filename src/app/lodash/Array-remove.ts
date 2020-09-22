const remove = (array: Array<any>, predicatee?: Function):Array<any> => {
	let removed: Array<any> = []
	if(!predicatee) return array;
	else {
		array = array.filter(item => {
			if(!predicatee(item)) return true;
			else {
				removed.push(item);
				return false;
			}
		})
	}
	return removed;
};

export default remove;
