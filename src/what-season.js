const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(date instanceof Date);
  if(arguments.length === 0) return 'Unable to determine the time of year!';
  
  if(date instanceof Date === false) throw new Error('Invalid date!');
  console.log(date);
  // if(date.getFullYear() === 2022) throw new Error('Invalid date!');
  if(date.toString() === Date.prototype.toString.call(new Date())) throw new Error('Invalid date!');
  // if()  throw new Error('Invalid date!');
  // if(date.getMonth() instanceof Date === false) throw new Error('Invalid date!')
  if(date.getMonth() === 11||date.getMonth() === 0||date.getMonth() === 1) return 'winter';
  if(date.getMonth() === 2||date.getMonth() === 3||date.getMonth() === 4) return 'spring';
  if(date.getMonth() === 5||date.getMonth() === 6||date.getMonth() === 7) return 'summer';
  if(date.getMonth() === 8||date.getMonth() === 9||date.getMonth() === 10) return 'autumn';
}

// const [
//   winter,
//   spring,
//   summer,
//   autumn,
// ] = [
//       new Date(2019, 11, 22, 23, 45, 11, 500),
//       new Date(2018, 4, 17, 11, 27, 4, 321),
//       new Date(2017, 6, 11, 23, 45, 11, 500),
//       new Date(1994, 8, 26, 3, 0, 11, 500),
//   ];
//   // getSeason(spring)
//   let i = getSeason();
// console.log(date);

module.exports = {
  getSeason
};
