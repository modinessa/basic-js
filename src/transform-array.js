const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length == 0) {
    return [];
  }

  let discardNext = false;
  let doubleNext = false;
  let noPrev = false;

  return arr.reduce((newArray, val) => {
    if (discardNext) {
      discardNext = false;
      noPrev = true;
      return newArray;
    }

    switch (val) {
      case "--discard-next":
        discardNext = true;
        noPrev = false;
        return newArray;
      case "--discard-prev":
        if (!noPrev && newArray.length > 0) {
          newArray.pop();
        }
        return newArray;
      case "--double-next":
        doubleNext = true;
        noPrev = false;
        return newArray;
      case "--double-prev":
        if (!noPrev && newArray.length > 0) {
          newArray.push(newArray[newArray.length - 1]);
        }
        noPrev = false;
        return newArray;
      default:
        newArray.push(val);
        if (doubleNext) {
          newArray.push(val);
          doubleNext = false;
        }
        noPrev = false;
        return newArray;
    }
  }, []);
}

module.exports = {
  transform,
};
