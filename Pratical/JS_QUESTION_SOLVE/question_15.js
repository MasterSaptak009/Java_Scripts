const readline = require("readline-sync");
let a = readline.question("Enter the value of a: \n");
let b = readline.question("Enter the value of b: \n");
let c = readline.question("Enter the value of c: \n");
let sqrt_value = b * b - 4 * a * c;
let d = Math.sqrt(Math.abs(sqrt_value));

//let x = (-b)/2*a

if (sqrt_value === 0) {
  console.log((-b / 2) * a);
} else if (sqrt_value > 0) {
  console.log("real and unequal");
  console.log((-b + d) / (2 * a) + "\n " + (-b - d) / (2 * a));
} else {
  console.log("complex number");
  console.log( -b / (2 * a) + " + i" + d / (2 * a) + "\n" +-b / (2 * a) + " - i" + d / (2 * a) );
}
