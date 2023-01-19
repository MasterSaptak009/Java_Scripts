const readline = require("readline-sync");
function isEven(n) {
  if (n % 2 == 0) {
    console.log("Even");
    return 1;
  }
  console.log("odd");
  return -1;
}
const input = Number(readline.question('Enter The Number '));
console.log(isEven(input));
