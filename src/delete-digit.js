const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');,
  // remove line with error and write your code here
  let arr = [];
  let str = String(n);
  // console.log(str.length);
  for(let i = 0; i < str.length; i++){
    
    if( i === 0){ 
      arr.push(Number(str.slice(1)))
    }else{
      arr.push(Number(str.slice(0, i) + str.slice(i+1)))
    }
    
  }
  // console.log(Math.max.apply(null, arr));
  return Math.max.apply(null, arr)
}

deleteDigit(152)

module.exports = {
  deleteDigit
};
