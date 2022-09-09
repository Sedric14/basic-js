const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const args = [arguments];
  if(typeof(sampleActivity) !== 'string' || typeof(sampleActivity*1) !== 'number') return false;
  if(sampleActivity*1 >15 || sampleActivity*1 <= 0) return false;
  if(isNaN(sampleActivity*1)) return false
  const num = sampleActivity*1;
  const age = Math.ceil((Math.log(MODERN_ACTIVITY) -Math.log(num) )/(0.693/HALF_LIFE_PERIOD))
  // console.log(num);
  return age;
}

// const i = dateSample('3');
// console.log(i);

module.exports = {
  dateSample
};
