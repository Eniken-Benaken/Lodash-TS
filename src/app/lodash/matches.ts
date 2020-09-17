/* Match two entries of two Objects: if at least one property has same value = matches */
export const matches = (source: Object) => {
	debugger;
	const match = (comparedObject: Object) => {
		let arrayOfSourceObject:Array<Array<any>> = Object.entries(source);
		let arrayOfComparedObject:Array<Array<any>> = Object.entries(comparedObject);
		arrayOfSourceObject.map(item => {
			for(let entry of arrayOfComparedObject)	{
				if (entry === item) return true;
			}
			return false;
		})
	}
	return match;
}

// const matches = (source) => {
// 	let arrayOfSourceObject = Object.entries(source);
// 	const match = (comparedObject,arrayOfSourceObject) => {
// 		let arrayOfComparedObject = Object.entries(comparedObject);
// 		arrayOfSourceObject.map(item => {
// 			for(let entry of arrayOfComparedObject)	{
// 				if (entry === item) return true;
// 			}
// 			return false;
// 		})
// 	}
// 	return (comparedObject) => match(comparedObject,arrayOfSourceObject);
// }

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {a: 3, b: 3, c: 3};

// arr.map(item => {
// 	let match = matches(obj2);
// 	match(item);
// })

/* Match two entries of two Objects: if at least one property has same value = matches */
// export const matches = (source: Object) => {
// 	const match = (comparedObject: Object) => {
// 		let arrayOfSourceObject:Array<Array<any>> = Object.entries(source);
// 		let arrayOfComparedObject:Array<Array<any>> = Object.entries(comparedObject);
// 		arrayOfSourceObject.map(item => {
// 			for(let entry of arrayOfComparedObject)	{
// 				if (entry === item) return true;
// 			}
// 			return false;
// 		})
// 	}
// 	return match;
// }
