const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const nArr = `${n}`.split("");
  for (let i = 0; i < nArr.length; i++) {
    const controlArr = [...nArr];
    controlArr.splice(i, 1);
    let controlStr = controlArr.join("");
    max = Math.max(parseInt(controlStr), max);
  }
  return max;
}

module.exports = {
  deleteDigit,
};
