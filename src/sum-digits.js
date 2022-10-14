const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let s = n +'';
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += s[i]*1
  }
  // console.log(result);
  if(result > 9){ 
    s = result + ''
    let r = 0
    for (let i = 0; i < s.length; i++) {
      r += s[i]*1
    }
    result = r
  }
  return result;
}

getSumOfDigits(100)

module.exports = {
  getSumOfDigits
};
