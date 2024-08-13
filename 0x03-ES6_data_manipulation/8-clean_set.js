/**
 * Cleans a set by filtering out values that do not start with a given string and returns a hyphen-separated string of the remaining values.
 *
 * @param {Set} set - The set to be cleaned.
 * @param {string} startString - The string that the values in the set should start with.
 * @returns {string} - A hyphen-separated string of the values in the set that start with the given string.
 */
function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
} export default cleanSet;
