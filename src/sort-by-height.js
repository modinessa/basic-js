const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let list = [];
  const final = [];

  arr.forEach((el) => {
    if (el != -1) {
      list.push(el);
    }
  });
  list = list.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      final.push(list[j]);
      j++;
    } else {
      final.push(-1);
    }
  }
  return final;
}

module.exports = {
  sortByHeight,
};
