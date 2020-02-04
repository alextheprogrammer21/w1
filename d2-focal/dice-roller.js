/** 
 * - convert process.argv to useable number 
 * - create a four loop that generates random number as many times as above 
 * - create a string that prints out all of those numbers 
 */

 let arg = process.argv.slice(2);
 let numOfDices = Number(arg); 
 let arr = []; 
 console.log(numOfDices); 

 function rollDice() {
  return Math.floor(Math.random() * 6);
}
console.log(rollDice()); 

 for (let i = 0; i < numOfDices; i++) {
  arr.push(rollDice()); 
 }

console.log(arr); 