const isObject = (value: Object):boolean => {
	/**
	 * avoiding typeof null === 'Object'
	 */
	const type: string = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export default isObject;