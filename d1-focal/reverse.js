const reversal = function(arguments) {
let reversed = ''; 
for(let i = arguments.length -1; i > -1;i--) {
  reversed += arguments[i];
}
return reversed; 
};

console.log(reversal("test"));



