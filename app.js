/**
 * Implementing a basic Calculator in JavaScript.
 * =============================================
 * 
 * Features:
 *   - We'll use prompt to ask the user what number operation they want to do. 
 *   - We'll save the result in a variable.
 *   - We'll allow the user to end the interaction as they wish.
 * 
 * @author https://github.com/Luis-Diego-Arrieta
 * @created 2022-10-31
 */

const prompt = require('prompt-sync')({sigint: true});
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


readline.question('Do you want to perform a calculation?', answer => {
    console.log(`You selected ${answer}!`);
    readline.close();
  });

  // take the operator input
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ):');
console.log(`Thanks! You selected the ${operator} operator`);

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// Selecting the operation with conditional statements
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);