let inputNumber = prompt(`enter a number of at least three digits`); // prompts user to enter a 3 digit number
console.log(`your number is ${inputNumber}`); // displays the number a user entered
let newString = ""; // gloabal variable used to change "newString" later in the code
if (inputNumber.length < 3) {
  // code wil run when user inputs a number
  console.log(`please enter a number with 3 or more digits`); // displays if digits are less than 3
} else {
  // code wil run if user input number is longer than 3 digits
  for (let i = 0; i < inputNumber.length; i++) {
    //code will begin to loop from her
    if (i === 1) {
      // identifies first character
      newString = newString + inputNumber[inputNumber.length - 1]; //moves last character to second positon
    } else if (i === inputNumber.length - 1) {
      // identifies last caracter
      newString = newString + inputNumber[1]; // moves last character to second position
    } else {
      newString = newString + inputNumber[i]; // rest of the digits stay in place
    }
  }
  console.log(`your new number is ${newString}`); // displays swapped number
}
