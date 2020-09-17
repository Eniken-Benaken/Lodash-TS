export const compact = (arrayToComPact: Array<any>) => {
	const removeFalsyValues = (value:any):boolean => {
		if(!value) return false;
		else return true;
	}	
	console.log(arrayToComPact.filter(value => removeFalsyValues(value)));
}