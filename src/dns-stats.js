const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  for(let i = 0; i < domains.length; i++){
    let a = domains[i].split('.');
    a = a.reverse();
    let s = '.' + a.join('.');

    for(let k = 1; k < s.length; k++){
      if(s[k] === '.'){
        if(!result[s.slice(0, k)]){
          result[s.slice(0, k)] = 1 ;
        }else{
          result[s.slice(0, k)] += 1 ;
        }
        
      }
      
    }
    result[s] = 1;
    
  }
  return result
}

getDNSStats(['epam.com', 'info.epam.com'])

module.exports = {
  getDNSStats
};
