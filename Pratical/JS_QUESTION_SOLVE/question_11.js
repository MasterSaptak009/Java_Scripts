const readline = require("readline-sync");

const input = Number(readline.question("Enter the Year: "));

if (( input % 100 !== 0 && input % 4 == 0 || input % 400 == 0)) {
  console.log("Leap year");
} else {
  console.log("Not A Leap Year");
}
