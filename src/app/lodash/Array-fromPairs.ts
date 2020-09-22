// const fromPairs = (array: Array<any>) => {
// 	let obj: any = {};
// 	for (let item of array) {
// 		if (Array.isArray(item) && item.length === 2) {
// 			let pair: Array<any> = item;
// 			obj[pair[0]] = pair[1];
// 		}
// 	}
// 	console.log(obj);
// 	return obj;
// };
const fromPairs = (array: Array<any>) => {
	let obj: Object = {};
	for (let item of array) {
		if (Array.isArray(item) && item.length === 2) {
			obj = Object.assign(obj,{[item[0]]:item[1]});
		}
	}
	console.log(obj);
	return obj;
};

export default fromPairs;
