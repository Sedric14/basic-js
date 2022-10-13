const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let counts = 0;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const args = [...arguments][0];
  if(Array.isArray(args) === false) return false
  for(let i = 0; i < args.length; i++){
    for(let k = 0; k < args[0].length; k++){
      if(args[i][k] === '^^')counts++;
    }
  }
  console.log(args);
  return counts;
}
// countCats([
//   ['##', 'dd', '00'],
//   ['^^', '..', 'ss'],
//   ['AA', 'dd', 'Oo'],
// ])

module.exports = {
  countCats
};
