const readline = require("readline-sync");
let a = Number(readline.question("Enter the first number: "));
let b = Number(readline.question("Enter the second number: "));
//a = 10, b = 15
//a= b //a =15,b=15
//b = a// a= 15,b = 15
a = a + b; //25 //10*9=90
b = a - b; //25-15 = 10//90/10=9
a = a - b; //25-10 = 15//90/9 =10
console.log("value of a is:", a);
console.log("value of b is:", b);
