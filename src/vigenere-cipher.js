const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

	constructor(bool){
		this.bool = bool;
		this.en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
		this.square = [];
		this.genSqViz = function () {
            var l = this.en, square = [];
			// console.log(l);
            for (var i = 0; i < l.length; i++) {
                this.square[i] = l.slice(i).concat(l.slice(0, i));
            }
        }
	}

  encrypt(text, key) {
	if(arguments.length!==2) throw new Error('Incorrect arguments!')
	if(typeof(arguments[0]) !== 'string' || typeof(arguments[1]) !== 'string') throw new Error('Incorrect arguments!')
	text = text.toUpperCase();
	key = key.toUpperCase();
	let key2 ='';
	let symbolText = 0;
	for (var i = 0; i < text.length; i++){
		if(this.en.includes(text[i])) symbolText ++;}
	if(key.length > symbolText) key = key.slice(0, symbolText)
	if (key.length < symbolText) {
		while (key.length !== symbolText) {
			if (symbolText / key.length < 2) {
				key = key + key.slice(0, symbolText - key.length)
			} else { key += key }
		}
	}
	for (var i = 0; i < text.length; i++){
		if(!this.en.includes(text[i])){
			key2 = key.slice(0, i) + " " + key.slice(i);
			key = key2
		}
	}
	this.genSqViz();
	var s = "";
	for (var i = 0; i < text.length; i++) {
		if(this.en.includes(text[i])){
			s += this.square[this.en.indexOf(text[i])][this.en.indexOf(key[i])];
		}else{
			s += text[i];
		}
	}
	if(this.bool === false) s = s.split("").reverse().join("");
	return s;
  }
	decrypt(cipher, key) {
		if(arguments.length!==2) throw new Error('Incorrect arguments!')
		if(typeof(arguments[0]) !== 'string' || typeof(arguments[1]) !== 'string') throw new Error('Incorrect arguments!')

		key = key.toUpperCase();
		let key2 ='';
		let symbolText = 0;
		for (var i = 0; i < cipher.length; i++) {
			if (this.en.includes(cipher[i])) symbolText++;
		}
		if (key.length > symbolText) key = key.slice(0, symbolText)
		if (key.length < symbolText) {console.log(key)
			while (key.length !== symbolText) {
				
				if (symbolText / key.length < 2) {
					key = key + key.slice(0, symbolText - key.length)
				} else { key += key }
			}
		}
		for (var i = 0; i < cipher.length; i++){
			if(!this.en.includes(cipher[i])){
				key2 = key.slice(0, i) + " " + key.slice(i);
				key = key2
			}
		}

		this.genSqViz();
		var s = "";
		for (var i = 0; i < cipher.length; i++) {
			if(this.en.includes(cipher[i])){
				let row = this.en.indexOf(key[i])
				console.log(cipher[i]);
			let coll = this.square[row].indexOf(cipher[i]);
			s += this.en[coll];
			}else{
				s+= cipher[i]
			}
			
		}
		if(this.bool === false) s = s.split("").reverse().join("");
		return s;
	}
}

// const a = new VigenereCipheringMachine();
// a.genSqViz();
// console.log(a.encrypt('cryptography', 'verylongkeyword'));

module.exports = {
  VigenereCipheringMachine
};
