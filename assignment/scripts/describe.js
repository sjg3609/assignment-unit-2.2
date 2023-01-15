// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to the name 'Dane'.
// Created a conditional if statement and set it equal in value and type, 'Mary'
// check if the name is equal to 'Mary' in console.log, if yes, return 'Hi, Mary!'
// Since name is set to Dane, and not equal in value and type to 'Mary', else statement returns 'How do you do?'
// we console.log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// introduce variable 'secret' and set varaible 'code' equal to 123.
// If statement checks 'code' equal value and type to 123, returns 'secret' as "super" and code equals 'code' multiplied by 2.
// Second if statement checks if code is greater than 250, it will return 'secret' as duper when run in console.log.
// we console.log 'secret' and it returns "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Set variables 'isStudent' equal to true, 'age' is set equal to 34, and variable 'zip' is set to 55407
// if statement checks if 'isStudent' is equal in value and type to true AND 'zip' is greater than 80000, console.log returns 'You're a student on the West Coast!'
// First Else if statements check if 'isStudent' equal in value and type to false OR 'age' is less than 30, console.log returns "What are your hobbies?" and second Else if statement checks to see if 'isStudent' equal to true, console.log returns "Welcome to Prime!"
// Else statement checks if none of the variables in the statements are true, the console.log will return "How about the weather?". 
// We console.log and get "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX colorOne is set to 'red', but the instructions has it set to 'blue'. 
// FIX colorTwo is set to 'blue, instructions has it set to 'red'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX if mix equals true, instructions say colorOne and colorTwo set to purple. Need to add colorTwo = purple as well to the if statement.
// FIX there is also no console.log() to run here that would return us answer of purple afterwards.


if (mix === true) {
  colorOne = 'purple';
}


*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX the || gives us an OR operator, and in the instructions we need an AND operator, which would be &&.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX based on the instructions, the if statement of "if age is greater than or equal to minAge"
// the console.log should return, "enter", but based on the code below it would return "no entry"
// so we need to correct the phrases in the if statement to return 'enter' and the else statement to return, 'no entry'

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

