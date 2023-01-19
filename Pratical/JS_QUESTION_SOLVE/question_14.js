const readline = require("readline-sync");
let a = Number(readline.question("Enter the n number: "));
let sum = 0;
for (let i = 1; i <= a; i++) {
    sum+=i;
  console.log(" \n",i);
}

console.log(sum)