const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let teamName = [];
if(Array.isArray(members) === false) return false
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      for(let k = 0; k < members[i].length; k++){
        if(members[i][k] !== " "){
          teamName.push(members[i][k].toUpperCase()) ;
          break;
        }
      }
    }
  }
  teamName = teamName.sort();
  return teamName.join('');
}
// let i = createDreamTeam([
//   'Amelia',
//   'Grace',
//   'Lily',
//   'Ruby',
// ])
// console.log(i);

module.exports = {
  createDreamTeam
};
