const readline = require("readline-sync");
console.log('1. C->F \n2. F->C \n3. Exit');
const choices = 0;


do{
    const userInput = Number(readline.question("Enter the choice: "));
    switch(userInput){
        case 1:
            const centrigrade= Number(readline.question('Enter the value in C: '));
            let result = (centrigrade*1.8)+32;
            console.log(result)
           break;
        case 2 :
            const Faren= Number(readline.question('Enter the value in F: '));
            let result2 = (Faren-32)*0.5556;
            console.log(result2);
            break;
        case 3:
          return;
        default:
            console.log("Enter valid number");
            break;
    }

}while(choices!=3);