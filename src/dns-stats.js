const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dict = {};
  domains.forEach((domain) => {
    let domainArr = domain.split(".").reverse();
    let newDomain = "";
    let i = 0;
    while (i < domainArr.length) {
      newDomain = newDomain + "." + domainArr[i];
      dict[newDomain] = newDomain in dict ? dict[newDomain] + 1 : 1;
      i++;
    }
  });
  return dict;
}

module.exports = {
  getDNSStats,
};
