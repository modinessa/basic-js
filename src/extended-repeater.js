const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str);
  let newStr = "";

  let addition =
    `${options.addition}` != "undefined" ? String(options.addition) : "";

  let repitedAddition = addition;

  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : "+";
  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const additionSeparator = options.additionSeparator
    ? options.additionSeparator.toString()
    : "|";

  let i = 0;
  while (i < additionRepeatTimes - 1) {
    repitedAddition = repitedAddition + additionSeparator + addition;
    i++;
  }

  if (addition) {
    string = string + repitedAddition;
  }

  let j = 0;
  while (j < repeatTimes) {
    if (j == 0) {
      newStr = string;
    } else {
      newStr = newStr + separator + string;
    }
    j++;
  }

  return newStr;
}

//----- DEBUGGING

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: (hint) =>
//     hint !== "number" ? "STRING_OR_DEFAULT" : "NUMBER",
// };

// console.log(
//   repeater(objWithSpecificCoercion, {
//     repeatTimes: 2,
//     addition: objWithSpecificCoercion,
//   })
// );

module.exports = {
  repeater,
};
