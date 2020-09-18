const compact = (arrayToComPact: Array<any>) => {
	/** 
	 * this func filterts array from falsy values
	 */
	const removeFalsyValues = (value:any):boolean => {
		if(!value) return false;
		else return true;
	}	
	return arrayToComPact.filter(value => removeFalsyValues(value));
}

export default compact;
