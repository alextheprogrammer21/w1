/** - Function named URLDecode will take in a url string 
 *  - Search for %20s and convert it into spaces for your new string
 *  - Have an object with a function
 *  - The function will search the text for equals. The key will equal the text before the equals and the value will be the text after the equal
 *  - object.
 * object[key] = "text"
 * for loop through text for equals for the key. Stop loop when === "=". 
 * for loop through the text after equals
 * Have it code reviewed and ask if there's any way to add callback functions 
*/

urlDecode = (url) => {
output = {
  
}
  let urlWithSpaces = url.split("%20").join(" "); 

  let splitUrl = urlWithSpaces.split('=');

  createObj = (key, value) => {
    output[key] = value; 
  }, 
  
  createObj(splitUrl[0], splitUrl[1]);
  console.log(output); 
}

urlDecode("Link%20and=SomeMore%20yy"); 