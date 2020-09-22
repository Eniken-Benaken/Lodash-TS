import toStr from './toStr';

const join = (array: Array<any>, separator?: string):string => {
	if(Array.isArray(array)) {
		let str: string = "";
		let preMaxCount = array.length-1;
		if(!separator) return toStr(array);
		else {
			for (let i = 0; i < array.length; i++) {
				if(i<preMaxCount)	str=`${str}${toStr(array[i])}${separator}`;
				else	str=`${str}${toStr(array[i])}`;
			}
		}
		return str;
	}
	else throw new Error("Not an Array");
}

export default join;
