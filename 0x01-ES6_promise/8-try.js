/**
 * Function that divides two numbers.
 *
 * @param {number} numerator - The numerator of the division.
 * @param {number} denominator - The denominator of the division.
 * @returns {number} The result of the division.
 * @throws {Error} If the denominator is 0.
 */
function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
}
export default divideFunction;
