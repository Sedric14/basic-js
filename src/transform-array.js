const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(arr);
  if(Array.isArray(arr) == false) throw new Error("'arr' parameter must be an instance of the Array!");
  result = [];
  let flag = 0;
  for(let i = 0; i < arr.length; i++){
    // console.log(67);
    if(arr[i] === '--discard-next'){
      i ++;
      flag = 1;
    }else if(arr[i] === '--discard-prev'){
      if(flag === 0){
      if(result.length !== 0) result.splice(result.length - 1, 1)
    }
    }else if(arr[i] === '--double-next'){
     if(arr[i + 1]) result.push(arr[i+1]);
    }else if(arr[i] === '--double-prev'){
      if(flag === 0){
        if(result.length !== 0) result.push(result[result.length - 1])
      }
      
    }else{
      result.push(arr[i])
    }
  }
  // console.log(result);
  return result;
}

transform(['--discard-prev', 1, 2, 3]); 


module.exports = {
  transform
};
