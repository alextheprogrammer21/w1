const args = process.argv;

console.log(args.slice(2));

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
const total = num1 + num2;
console.log(total);
