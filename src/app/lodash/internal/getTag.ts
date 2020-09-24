const toString = Object.prototype.toString;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 * COPIED FROM https://github.com/lodash/lodash/blob/86a852fe763935bb64c12589df5391fd7d3bb14d/.internal/getTag.js#L10
 * and refactored a bit ^_^
 */
const getTag = (value: any) => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value);
}

export default getTag;
