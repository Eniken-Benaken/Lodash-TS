const isBoolean = (value: boolean) => {
	if(value === true || value === false) return true;
	else return false;
	// if(typeof value === "boolean") return true;
	// else return false;
}

export default isBoolean;
