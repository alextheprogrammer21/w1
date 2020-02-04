/** - Convert process.argv into a sliced off array 
 *  - loop through every letter and make the encryption. Add to a new password string 
 */

 const input = process.argv.slice(2)[0]; 
 console.log(input); 
 let output = "";
console.log(output);
 for (let i = 0; i < input.length; i++) {
  if(input[i] === 'a') {
      output += '4';
  } else if (input[i] === 'e') {
    output += '3';
  } else if (input[i] === 'o') {
    output += '0';  
  } else if (input[i] === 'l') {
    output += '1';
  } else {
    output += input[i]; 
  }
 }
 console.log(`The encrypted password is: ${output}`); 