const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for(let i = 0; i < s1.length; i++){
    for(let k = 0; k < s2.length; k++){
      if(s1[i] === s2[k]){
        count ++;
        
        s2 = s2.slice(0,k) + s2.slice(k+1)
        
        break;
      }
    }
  }
  return count;
}

getCommonCharacterCount('aabcc', 'adcaa')

module.exports = {
  getCommonCharacterCount
};
