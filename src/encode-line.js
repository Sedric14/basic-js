const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let obj = {};
  let count = 1;
  let string = '';
  for(let i = 1; i < str.length; i++){
if(str[i] === str[i-1]){
  count ++
}else{
  if(count === 1){
    string +=  str[i-1]
  }else{string += count + str[i-1]}
  count = 1
  
}
if(i === str.length - 1){
  if(str[i] === str[i-1]){
    string += count + str[i-1]
  }else{
    string += str[i]
  }
  
}
  //   if(!obj[str[i]]){
  //     obj[str[i]] = 1;
  //   }else{obj[str[i]] += 1;}   abbcca
  // }
  // for(key in obj){
  //   string = string + obj[key] + key
  }
  return string;
}

module.exports = {
  encodeLine
};
