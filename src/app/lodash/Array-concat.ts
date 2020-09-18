const concat = (arrayToConcatWith:Array<any>,...values:any) => {
	return [...arrayToConcatWith,...values];
};

export default concat;
