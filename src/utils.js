/**
 * Returns an array of integers from 0 (included) to n (excluded).
 *
 * @param {number} n
 * @returns {number[]}
 */
export function range(n) {
  return [...Array(n).keys()];
}

/**
 * Pads an integer with leading zeros.
 *
 * @param {number} n
 * @param {number} totalNumberOfDigits - The total number of digits desired; leading zeros are added if necessary.
 * @returns {string}
 */
export function padIntegerWithLeadingZeros(n, totalNumberOfDigits = 2) {
  return String(n).padStart(totalNumberOfDigits, "0");
}
