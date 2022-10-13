const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = '';
  let addString = '';
  if(!options.repeatTimes) options.repeatTimes = 1;
  if(!options.separator) options.separator = '+';

  if(!options.hasOwnProperty('addition')) options.addition = '';
  
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(!options.additionSeparator) options.additionSeparator = '|';
  for(let i = 1; i<= options.additionRepeatTimes; i++ ){
    if(i>1) addString = addString + String(options.additionSeparator)
    addString = addString + String(options.addition);
  }
  for(let i = 1; i<= options.repeatTimes; i++ ){
    if(i>1) string = string + String(options.separator);
    string = string + String(str);
    string = string + String(addString);
  }
  return string;
}



module.exports = {
  repeater
};
