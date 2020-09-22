const isObject = (value: Object):boolean => {
	/**
	 * avoiding triggering on Arrays
	 * avoiding typeof null === 'Object'
	 */
	if(Array.isArray(value)) return false;
	const type: string = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export default isObject;
