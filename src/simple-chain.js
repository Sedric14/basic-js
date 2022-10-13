const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  string: '',
  getLength() {
return this.array.length;
  },

  addLink(value) {
    
    if(value === null) value = 'null';
    if(value === false) value = 'false';
    if(value === NaN) value = "NaN";
    if(value === Infinity) value = 'Infinity';
    if(value === true) value = 'true';
    if(value === NaN) value = 'NaN';
    if(value === 0) value = '0';
    if(arguments){
      this.array.push("" + value)
    }else{this.array.push('')}
    return this;
  },
  removeLink( position ) {
  if(typeof(position) != 'number'){this.array = []; throw new Error('You can\'t remove incorrect link!')}
    if(!Number.isInteger){ this.array = []; throw new Error('You can\'t remove incorrect link!')}
    if(position<=0){ this.array = []; throw new Error('You can\'t remove incorrect link!')}
    if(position > this.array.length) {this.array = []; throw new Error('You can\'t remove incorrect link!')}
    this.array.splice(position - 1, 1);
    return this;

  },
  reverseChain() { 
    this.array.reverse()
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.array.length; i++) {
      if (i === 0) {
        this.string = ('( ' + this.array[i])
      } else {
        this.string = this.string + (' )~~( ' + this.array[i])
      }
      
    }
    this.string = this.string + ' )';
    this.array = [];
    return this.string;
  }
  
};

module.exports = {
  chainMaker
};
